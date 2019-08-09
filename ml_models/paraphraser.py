import sys
from inference import model_init,inference
sys.path.append('/data/lxd/paraphraser')

model = model_init(0.5)

if __name__ == '__main__':
    sentence = 'hello, i have a dream'
    print(sentence)
    print(inference(model,sentence))
