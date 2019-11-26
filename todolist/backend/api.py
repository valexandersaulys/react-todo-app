from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import permissions, status

from backend.models import TodoModel
from backend.serializers import TodoModelSerializer


class TodoViewSet(ModelViewSet):
    serializer_class = TodoModelSerializer
    permission_classes = [permissions.AllowAny]
    queryset = TodoModel.objects.all()

    # https://www.django-rest-framework.org/api-guide/routers/
    @action(methods=["DELETE"], detail=False, permission_classes=[permissions.AllowAny])
    def remove_marked(self, request, pk=None):
        if pk is None:
            objects = TodoModel.objects.filter(done=True)
            number_deleted = len(objects)
            ids_deleted = [x.id for x in objects]
            objects.delete()
            return Response(
                {"number_deleted": number_deleted, "ids_deleted": ids_deleted},
                status=status.HTTP_200_OK,
            )
        else:
            return Response({}, status=status.HTTP_404_NOT_FOUND)
