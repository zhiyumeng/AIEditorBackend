from backend.models import ProblemRecord
import datetime
import numpy as np
from backend.utils.evaluate import id_category

from django.utils import timezone

tz = timezone.get_current_timezone()


# 获取用户当天的题目数量
def get_user_problem_record_num(user_id, start=None, end=None, days=None, unique=True):
    if end is None:
        end = datetime.datetime.now().astimezone(tz=tz)
    if start is None:
        start = datetime.date.today() + datetime.timedelta(days=-days)
        start = datetime.datetime(start.year, start.month, start.day, 0, 0, 0).astimezone(tz=tz)
    print(start, '=====>', end)
    query_rs = ProblemRecord.objects.filter(user_id=user_id, add_date__range=(start, end)).values('problem_id')
    ids = [q['problem_id'] for q in query_rs]
    if unique:
        ids = set(ids)
    return len(ids)


def get_day_week_monthly_num_problem(user_id, unique=True):
    num_day = get_user_problem_record_num(user_id=user_id, days=1, unique=unique)
    num_week = get_user_problem_record_num(user_id=user_id, days=7, unique=unique)
    num_month = get_user_problem_record_num(user_id=user_id, days=30, unique=unique)
    if unique:
        rs = {'num_problems': {'day': num_day, 'week': num_week, 'month': num_month}}
    else:
        rs = {'num_problem_records': {'day': num_day, 'week': num_week, 'month': num_month}}
    return rs


def average_scores(user_id):
    records = ProblemRecord.objects.filter(user_id=user_id)
    scores = np.array([r.score for r in records])
    num_85 = len(scores[[scores > 85]])
    num_70_85 = len(scores[(scores <= 85) & (scores > 70)])
    num_70 = len(scores[scores <= 70])
    return {'num_scores': {'85': num_85, '70_85': num_70_85, '70': num_70}}


def avegrage_details(user_id):
    records = ProblemRecord.objects.filter(user_id=user_id)
    details = {}
    for record in records:
        for detail in record.recorddetail_set.all():
            category_id = detail.category_id
            if category_id not in details:
                details[category_id] = []
            details[category_id].append(detail.value)
    rs = []
    for key in range(1, 6):
        # details[key] = {'name': id_category[key], 'average_value': str(round(np.average(details[key]), 2)), 'id': key}
        rs.append(str(round(np.average(details[key]), 2)))

    return {'avegrage_details': rs}


def get_stastics(user_id):
    rs = {}
    problems = get_day_week_monthly_num_problem(user_id)
    rs.update(problems)
    records = get_day_week_monthly_num_problem(user_id, unique=False)
    rs.update(records)
    scores = average_scores(user_id)
    rs.update(scores)
    details = avegrage_details(user_id)
    rs.update(details)

    return rs


if __name__ == '__main__':
    print('user 1 problems num:', get_user_problem_record_num(1))
