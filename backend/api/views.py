import json
import requests
from rest_framework.views import APIView
from rest_framework.response import Response

class Test(APIView):
    def get(self, request, *args, **kwargs):
        resp = {
            'test': 'test'
        }
        return Response(json.dumps(resp))