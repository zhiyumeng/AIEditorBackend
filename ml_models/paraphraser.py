import sys

sys.path.append('/data/lxd/paraphraser')
from inference import model_init, inference


def load_paraphraser():
    model = model_init(0.5)

    def paraphraser(sentence):
        return inference(model, sentence)

    return paraphraser


if __name__ == '__main__':
    model = model_init(0.5)
    sentence = 'hello, i have a dream'
    print(sentence)
    print(inference(model, sentence))
