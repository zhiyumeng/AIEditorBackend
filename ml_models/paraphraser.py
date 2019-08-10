import sys

sys.path.append('/data/lxd/paraphraser')
from inference import model_init, inference

model = 0#model_init(0.5)#todo:remove note


def paraphraser(sentence):
    return inference(model, sentence)


if __name__ == '__main__':
    model = model_init(0.5)
    sentence = 'hello, i have a dream'
    print(sentence)
    print(paraphraser(sentence))
