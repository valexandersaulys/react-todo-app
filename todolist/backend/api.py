from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions

from backend.models import TodoModel
from backend.serializers import TodoModelSerializer


class TodoViewSet(ModelViewSet):
    serializer_class = TodoModelSerializer
    permission_classes = [permissions.AllowAny]
    queryset = TodoModel.objects.all()

    # https://www.django-rest-framework.org/api-guide/routers/
