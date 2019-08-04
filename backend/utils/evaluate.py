from ml_models.words_evaluation import sentenceScore as words_score
from backend.models import Sentence
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
    readable_score = words_score(sentence)
    detail = {'id': 2, 'value': readable_score, 'name': '单词生僻性', 'description': '单词数值越小，越生僻'}
    return readable_score, detail


def evaluate_similarity(problem_id, customer_answer):
    '''
    句子相似程度
    :param problem_id:
    :param customer_answer:
    :return:
    '''

    sentence_instance = Sentence.objects.filter(id=problem_id)[0]
    similarity_score = inferencePairsFromGraph(customer_answer, sentence_instance.sentence)
    similarity_detail = {'id': 1, 'value': similarity_score, 'name': '句子相似度', 'description': '句子相似程度'}
    return similarity_score, similarity_detail


def evaluate_sentence(problem_id, customer_answer):
    readable_score, readable_detail = evaluate_sentence_wordscore(customer_answer)
    similarity_score, similarity_detail = evaluate_similarity(problem_id, customer_answer)
    total_score = readable_score + similarity_score
    return total_score, [readable_detail, similarity_detail]
