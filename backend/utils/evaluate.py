from ml_models.words_evaluation import sentenceScore as words_score
from ml_models.FleschReadingEaseScore import fresScore
from backend.models import Sentence, GoodAnswer
from ml_models.similarity import inferencePairsFromGraph


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
    wordscore_detail = {'id': 2, 'value': str(wordscore), 'name': '单词生僻性', 'description': '单词数值越小，越生僻'}
    return wordscore, wordscore_detail


def evaluate_readbility(sentence):
    readable_score = fresScore(sentence)
    readable_detail = {'id': 3, 'value': str(readable_score), 'name': '句子可读性', 'description': '句子可读程度'}
    return readable_score, readable_detail


def evaluate_similarity(sentence, customer_answer):
    '''
    句子相似程度
    :param problem_id:
    :param customer_answer:
    :return:
    '''

    similarity_score = inferencePairsFromGraph(customer_answer, sentence)
    similarity_detail = {'id': 1, 'value': str(similarity_score), 'name': '句子相似度', 'description': '句子相似程度'}
    return similarity_score, similarity_detail


def evaluate_sentence_total(sentence, customer_answer):
    wordscore, wordscore_detail = evaluate_sentence_wordscore(customer_answer)
    similarity_score, similarity_detail = evaluate_similarity(sentence, customer_answer)
    readable_score, readable_detail = evaluate_readbility(customer_answer)
    total_score = wordscore + similarity_score + readable_score
    return total_score, [wordscore_detail, similarity_detail, readable_detail]


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
