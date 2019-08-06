from backend.models import ProblemRecord
import datetime

from django.utils import timezone

tz = timezone.get_current_timezone()


# 获取用户当天的题目数量
def get_user_problem_record_num(user_id, start=None, end=None):
    if start is None:
        start = datetime.date.today()
        start = datetime.datetime(start.year, start.month, start.day, 0, 0, 0).astimezone(tz=tz)
    if end is None:
        end = datetime.date.today() + datetime.timedelta(days=1)
        end = datetime.datetime(end.year, end.month, end.day, 0, 0, 0).astimezone(tz=tz)
    print(start, '=====>', end)
    query_rs = ProblemRecord.objects.filter(user_id=user_id, add_date__range=(start, end)).values('problem_id')
    ids = set([q['problem_id'] for q in query_rs])
    return len(ids)


if __name__ == '__main__':
    print('user 1 problems num:', get_user_problem_record_num(1))