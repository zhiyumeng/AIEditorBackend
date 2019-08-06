from backend.models import ProblemRecord
import datetime
import numpy as np
from backend.utils.evaluate import id_category

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


def average_scores(user_id):
    records = ProblemRecord.objects.filter(user_id=user_id)
    scores = np.array([r.score for r in records])
    num_85 = len(scores[[scores > 85]])
    num_70_85 = len(scores[(scores <= 85) & (scores > 70)])
    num_70 = len(scores[scores <= 70])
    return {'85': num_85, '70_85': num_70_85, '70': num_70}


def avegrage_details(user_id):
    records = ProblemRecord.objects.filter(user_id=user_id)
    details = {}
    for record in records:
        category_id = record.category_id
        if category_id not in details:
            details[category_id] = []
        details[category_id].append(record.value)
    for key in details.keys():
        details[key] = {'name': id_category[key], 'average_value': str(np.average(details[key])), 'id': key}
    return details


if __name__ == '__main__':
    print('user 1 problems num:', get_user_problem_record_num(1))
