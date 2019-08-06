import sys
sys.path.append('/data/zly')

from xkcd import get_syn


if __name__ == '__main__':
    sentence = 'hello i wanto to find som synonym.'
    print(sentence)
    print(get_syn(sentence))