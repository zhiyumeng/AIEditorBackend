from django.shortcuts import render

# Create your views here.
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.template import loader
from .models import User, Sentence, ProblemRecord, GoodAnswer
import random
from ml_models.similarity import inferencePairsFromGraph
import json


def backend_view(request):
    return JsonResponse({'info': "Hello, You're at the backend view."})


# 获取用户信息
def get_user_info(request, tel_number):
    '''
    功能1：获取用户信息

    输入：phoneNumber
    输出：(是否注册：signed, 用户id：userID, 手机号码：phoneNumber)
    {
        phoneNumber
    }
    {
        signed: true,
        userID: 1,
        phoneNumber: 17162713333
    }
    :param request:
    :param user_id:
    :return:
    '''
    query_set = User.objects.filter(tel_number=tel_number)
    if len(query_set) == 1:
        user = query_set[0]
        response_dict = {'signed': True, 'userID': user.id, 'phoneNumber': user.tel_number}
    elif len(query_set) == 0:
        new_user = User.objects.create(tel_number=tel_number)
        response_dict = {'signed': False, 'userID': new_user.id, 'phoneNumber': new_user.tel_number}
        print('id is :', new_user.id)
        new_user.save()
        print('id is :', new_user.id)
    else:
        raise Exception('Error when query user info.')
    return JsonResponse(response_dict)


# 随机获取句子
def get_sentence_for_user(request, problem_type, user_id):
    '''
    功能2：获取题目
输入：typeOfQue：长中短
输出：
题目id：queID
{
    typeOfQue:2//长句联系
}
{
    typeOfQue:2,
    question:"Paraphrasing is extremely important, so it should be learned!",
    queID:0//题目id
}
功能2获取题目api: [
api: http://52.80.106.20:8000/backend/problem/length(012分别代表短中长)
]
    :param request:
    :return:
    '''

    query_set = Sentence.objects.filter(sentence_type=problem_type)

    if query_set:
        sentence = random.choice(query_set)
        experienced = ProblemRecord.objects.filter(problem_id=sentence.id, user_id=user_id).exists()
        response_dict = {'problem_type': problem_type, 'sentence': sentence.sentence, 'problem_id': sentence.id,
                         'experienced': experienced}
    else:
        response_dict = {'error': 'no appropriate sentence'}

    return JsonResponse(response_dict)


# 根据id获取句子
def get_sentence_by_id(request, problem_index, user_id, problem_type):
    '''
    功能2：获取题目
输入：typeOfQue：长中短
输出：
题目id：queID
{
    typeOfQue:2//长句联系
}
{
    typeOfQue:2,
    question:"Paraphrasing is extremely important, so it should be learned!",
    queID:0//题目id
}
功能2获取题目api: [
api: http://52.80.106.20:8000/backend/problem/length(012分别代表短中长)
]
    :param request:
    :return:
    '''

    query_set = Sentence.objects.filter(sentence_type=problem_type)

    if len(query_set) >= problem_index:
        sentence = query_set[problem_index]
        experienced = ProblemRecord.objects.filter(problem_id=sentence.id, user_id=user_id).exists()
        response_dict = {'problem_type': sentence.sentence_type, 'sentence': sentence.sentence,
                         'problem_id': sentence.id,
                         'problem_index': problem_index,
                         'experienced': experienced
                         }
    else:
        response_dict = {'error': 'problem not exists'}

    return JsonResponse(response_dict)


def get_aspect_detail(id, value, name, description):
    return {'id': id, 'value': value, 'name': name, 'description': description}


# 评价用户产生的句子
def evaluate_sentence(request, json_sentence):
    info = json.loads(json_sentence)['sentence']
    sentence_id = info['queID']
    customer_answer = info['ans']
    user_id = info['user_id']
    sentence_instance = Sentence.objects.filter(id=sentence_id)[0]
    similarity_score = inferencePairsFromGraph(customer_answer, sentence_instance.sentence)
    total_score = similarity_score  # todo:完善总分评价指标
    record = ProblemRecord.objects.create(user_id=user_id, problem_id=sentence_id, answer=customer_answer,
                                          score=total_score)
    record.save()

    record_set = GoodAnswer.objects.filter(record_id__problem_id=sentence_id).values('record_id__problem_id','record_id__score').order_by('record_id__score')
    if len(record_set) < 3:
        GoodAnswer.objects.create(record_id=record).save()
    else:
        min_score_good_record = record_set[0]
        if min_score_good_record.record_id.score < total_score:
            GoodAnswer.objects.create(record_id=record).save()
            min_score_good_record.delete()


    detail = [get_aspect_detail(0, similarity_score, '相似性', 'None at now')]
    # queID: 0,
    # id: 031, // 做题id(可以唯一标识一个回答)
    # rate: 92, // 总分
    # isExc: true, // 优秀到进入三个优秀答案
    rs = {'queID': sentence_id,
          'record_id': record.id,
          'rate': total_score,
          'isExc': False,  # todo:确认是不是最好的三个句子
          'detail': detail
          }

    return JsonResponse(rs)


def index(request):
    result = 0.99999
    template = loader.get_template('polls/index.html')
    context = {
        'latest_question_list': 1,
        'result': result,
    }
    return HttpResponse(template.render(context, request))


@csrf_exempt
def predict(request):
    x1 = request.GET.get("v1")
    x2 = request.GET.get("v2")
    print(x1)
    print(x2)
    import time
    start = time.time()
    res = inferencePairsFromGraph(x1, x2)
    end = time.time()
    data = {"result": str(res), 'time': end - start}
    return JsonResponse(data)
