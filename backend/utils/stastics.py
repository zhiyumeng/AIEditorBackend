from backend.models import ProblemRecord
import datetime

from django.utils import timezone

tz = timezone.get_current_timezone()


# 获取用户当天的题目数量
def get_user_problem_record_num(user_id, start=None, end=None, days=None):
    if end is None:
        end = datetime.datetime.now().astimezone(tz=tz)
    if start is None:
        start = datetime.date.today() + datetime.timedelta(days=-days)
        start = datetime.datetime(start.year, start.month, start.day, 0, 0, 0).astimezone(tz=tz)
    print(start, '=====>', end)
    query_rs = ProblemRecord.objects.filter(user_id=user_id, add_date__range=(start, end)).values('problem_id')
    ids = set([q['problem_id'] for q in query_rs])
    return len(ids)


def get_day_week_monthly_num(user_id):
    num_day = get_user_problem_record_num(user_id=user_id, days=1)
    num_week = get_user_problem_record_num(user_id=user_id, days=7)
    num_month = get_user_problem_record_num(user_id=user_id, days=30)
    return {'day': num_day, 'week': num_week, 'month': num_month}


if __name__ == '__main__':
    print('user 1 problems num:', get_user_problem_record_num(1))
