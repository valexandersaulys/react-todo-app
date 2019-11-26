from rest_framework import routers
from backend.api import TodoViewSet

router = routers.DefaultRouter()
router.register("todos", TodoViewSet, "todos")

urlpatterns = router.urls
