from backend.models import ProblemRecord
import datetime

from django.utils import timezone


# 获取用户当天的题目数量
def get_user_problem_record_num(user_id, start=None, end=None):
    if start is None:
        start = datetime.datetime.today()
    if end is None:
        end = datetime.date.today() + datetime.timedelta(days=1)
    print(start, '=====>', end)
    query_rs = ProblemRecord.objects.filter(user_id=user_id, add_date__range=(start, end)).values('problem_id')
    ids = set([q['problem_id'] for q in query_rs])
    return len(ids)


if __name__ == '__main__':
    print('user 1 problems num:', get_user_problem_record_num(1))
