from ml_models.words_evaluation import sentenceScore as words_score
from ml_models.FleschReadingEaseScore import fresScore
from backend.models import Sentence, GoodAnswer, RecordDetail
from ml_models.similarity import inferencePairsFromGraph
from ml_models.sentenceComplexity import sentenceComplex

id_category = {
    1: '句子相似度',
    2: '单词生僻性',
    3: '句子可读性',
    4: '句子复杂度',
    5: '语法正确性'
}
id_description = {
    1: '句子相似程度',
    2: '单词数值越小，越生僻',
    3: '句子可读程度',
    4: '句子复杂程度',
    5: '语法正确性'
}


def evaluate_sentence_wordscore(sentence):
    '''
     判断句子中单词的生僻性，
     数值越小，越生僻，
     返回一个数值，
     score < 0.2，句子所用词汇很生僻；
     0.2 =< score < 0.4，句子所用词汇比较生僻；
     0.4 =< score < 0.6，句子所用词汇常见；
     0.6 =< score < 0.7，句子所用词汇比较常见；
     score >= 0.7，句子所用词汇很常见；
     输入：句子，
     输出：分数
     '''
    # top 5000 English words were downloaded from
    # https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000
    wordscore = words_score(sentence)
    wordscore = int(wordscore * 5)
    wordscore_detail = {'id': 2, 'value': str(wordscore), 'name': id_category[2], 'description': id_description[2]}
    return wordscore, wordscore_detail


def evaluate_readbility(sentence):
    readable_score = fresScore(sentence)
    readable_score = int(readable_score / 20)
    readable_detail = {'id': 3, 'value': str(readable_score), 'name': id_category[3], 'description': id_description[3]}
    return readable_score, readable_detail


def evaluate_similarity(sentence, customer_answer):
    '''
    句子相似程度
    :param problem_id:
    :param customer_answer:
    :return:
    '''

    similarity_score = inferencePairsFromGraph(customer_answer, sentence)
    similarity_score = int(similarity_score * 5)
    similarity_detail = {'id': 1, 'value': str(similarity_score), 'name': id_category[1],
                         'description': id_description[1]}
    return similarity_score, similarity_detail


# 从各个指标评价句子
def evaluate_sentence_total(sentence, customer_answer):
    wordscore, wordscore_detail = evaluate_sentence_wordscore(customer_answer)
    similarity_score, similarity_detail = evaluate_similarity(sentence, customer_answer)
    readable_score, readable_detail = evaluate_readbility(customer_answer)
    complex_score, complex_detail = evaluate_sentence_complexity(sentence, customer_answer)
    total_score = wordscore + similarity_score + readable_score + complex_score
    return total_score, [wordscore_detail, similarity_detail, readable_detail, complex_detail]


# 更新好答案
def updateGoodAnswer(sentence_id, record):
    record_set = GoodAnswer.objects.filter(record_id__problem_id=sentence_id).order_by('record_id__score')
    isExc = False
    if len(record_set) < 3:
        GoodAnswer.objects.create(record_id=record).save()
        isExc = True
    else:
        min_score_good_record = record_set[0]
        if min_score_good_record.record_id.score < record.score:
            isExc = True
            GoodAnswer.objects.create(record_id=record).save()
            min_score_good_record.delete()
    return isExc


def evaluate_sentence_complexity(problem_sentence, customer_sentence):
    complex_score = sentenceComplex(problem_sentence, customer_sentence)
    complex_score = int(complex_score * 5)
    complex_detail = {'id': 4, 'value': str(complex_score), 'name': id_category[4], 'description': id_description[4]}
    return complex_score, complex_detail


def save_details(record_instance, details):
    detail_instances = []
    for detail in details:
        value = float(detail['value'])
        category_id = detail['id']
        detail_instances.append(RecordDetail(category_id=category_id, value=value, problem_record=record_instance))
    RecordDetail.objects.bulk_create(detail_instances)


def change_record_detail_to_dict(record_detail):
    #  readable_detail = {'id': 3, 'value': str(readable_score), 'name': id_category[3], 'description': id_description[3]}
    id = record_detail.category_id
    detail = {'id': id, 'value': str(record_detail.value), 'name': id_category[id], 'description': id_description[id]}
    return detail
