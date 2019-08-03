from django.db import models

# Create your models here.

'''
数据库设计
题库表
(题目id,题目内容)

用户表（无注册、无密码，类似滴滴验证码登录）
(用户id,用户手机号)

做题记录表
(记录id,用户id,题目id,答题内容,得分项)

题目记录表
(做题记录表id)
'''


class Sentence(models.Model):
    id = models.AutoField(primary_key=True)
    sentence = models.TextField('Sentence content', blank=False)
    sentence_type = models.CharField('Sentence type', choices=(('s', '短'), ('m', '中等长度'), ('l', '长')), max_length=10,
                                     blank=False)
    similar_sentence = models.TextField('Similar sentence', blank=False)

    def __str__(self):
        return "Sentence %s, length %s, %s" % (self.id, self.sentence_type, self.sentence)


class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, default='anonymous')
    tel_number = models.CharField('User tel number', max_length=20, unique=True)

    def __str__(self):
        return "%s %s with tel number: %s" % (self.name, self.id, self.tel_number)


class ProblemRecord(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(to="User", to_field="id", on_delete=models.CASCADE)
    problem_id = models.ForeignKey(to="Sentence", to_field="id", on_delete=models.CASCADE)
    answer = models.TextField('Answer')
    score = models.FloatField('score of user on problem', blank=False)

    def __str__(self):
        return "Record of answers"


class GoodAnswer(models.Model):
    record_id = models.OneToOneField(to='ProblemRecord', to_field='id', on_delete=models.CASCADE, primary_key=True,
                                     unique=True)

    def __str__(self):
        return "The problem %s's record id of good answers" % (self.record_id)


class Composite(models.Model):
    title = models.CharField('composite title', max_length=200)
    text = models.TextField('coposite content')
    author = models.CharField('author', max_length=200)

    def __str__(self):
        return "%s written by %s" % (self.title, self.author)
