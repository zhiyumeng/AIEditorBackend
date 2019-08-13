from ml_models.ltt_similarity import bimpmPred as ltt_serving
from ml_models.similarity import inferencePairsFromGraph as cz_serving
from ml_models.mying_similarity import my_similarity_serving as my_serving
import pandas as pd


def evaluate_setence(sent1, sent2):
    ltt = ltt_serving(sent1, sent2)
    my = my_serving(sent1, sent2)
    cz = cz_serving(sent1, sent2)
    return ltt, my, cz


def stastics():
    df = pd.read_csv('data/after_data_selected.csv', sep='\t')[['question1', 'question1']]
    rs = [evaluate_setence(sent1, sent2) for sent1, sent2 in df.values]
    rs = zip(*rs)
    return pd.DataFrame({'ltt': rs[0], 'my': rs[1], 'cz': rs[2]})


def select_sentence():
    pass


if __name__ == '__main__':
    df = stastics()
    print(df.describe())
