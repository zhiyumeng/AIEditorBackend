from django.contrib import admin

# Register your models here.
from .models import Composite, ProblemRecord, Sentence, User, GoodAnswer

admin.site.register(Composite)
admin.site.register(ProblemRecord)
admin.site.register(Sentence)
admin.site.register(User)
admin.site.register(GoodAnswer)
