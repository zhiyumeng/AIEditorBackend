from backend.models import ProblemRecord
import datetime

start = datetime.datetime(2019, 8, 6, 12, 0, 0, 0)
end = datetime.datetime.now()


# 获取用户当天的题目数量
def get_user_problem_record_num(user_id):
    query_rs = ProblemRecord.objects.filter(user_id=user_id, add_date__range=(start, end)).values('problem_id')
    ids = set([q['problem_id'] for q in query_rs])
    return len(ids)


if __name__ == '__main__':
    print('user 1 problems num:', get_user_problem_record_num(1))
