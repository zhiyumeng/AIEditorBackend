from django.urls import path
from . import views

urlpatterns = [
    # ex:/backend
    path('', views.index, name='backend_view'),
#    url(r'^predict/', views.predict, name="predict"),
    # ex: /backend/user/1
    path('user/<int:tel_number>', views.get_user_info),
    # ex:/backend/problems/s/1
    path('problems/<str:problem_type>/<int:user_id>', views.get_sentence_for_user),
    # 根据id获取题目
    path('problems/<int:problem_id>/user/<int:user_id>', views.get_sentence_by_id)
]
