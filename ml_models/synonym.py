import sys
sys.path.append('/data/zly')

from xkcd import get_syn
import time

if __name__ == '__main__':
    tic = time.time()
    sentence = 'hello i wanto to find som synonym.'
    toc = time.time()
    print(sentence)
    print(get_syn(sentence))
    print(toc-tic)
    while True:
        sentence = input('input>')
        print(get_syn(sentence))

