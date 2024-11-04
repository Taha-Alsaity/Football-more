from django.shortcuts import render

# Create your views here.

# views.py
import requests
from django.http import JsonResponse
from django.conf import settings

def proxy_to_external_api(request):
    # Define the target URL
    external_url = "https://api.football-data.org/v4/competitions/2001/standings"
    
    # Prepare headers with your API token from settings
    headers = {
        "X-Auth-Token": settings.API_TOKEN
    }

    try:
        # Make a request to the external API
        response = requests.get(external_url, headers=headers)
        response.raise_for_status()  # Check for HTTP errors

        # Return the JSON response to the client
        return JsonResponse(response.json())
    except requests.exceptions.RequestException as e:
        return JsonResponse({"error": str(e)}, status=500)

def index(request):
    return render(request,"pages/index.html")