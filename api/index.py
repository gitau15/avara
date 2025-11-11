import os
import httpx
from fastapi import FastAPI
from pydantic import BaseModel

# --- Configuration ---
app = FastAPI()

# This print statement will appear in the Vercel logs if the file loads correctly.
print("Avara Backend: FastAPI app loaded successfully.")

# Get secrets from environment variables configured on Vercel
GLM_API_KEY = os.environ.get("GLM_API_KEY")

# --- Data Models ---
class ChatRequest(BaseModel):
    user_id: str
    message: str

class ChatResponse(BaseModel):
    response: str

# --- The Main API Endpoint ---
@app.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    """
    Receives a message from the user, gets a response from the Lead Councillor,
    and returns it.
    """
    print(f"Avara Backend: Received request for user_id: {request.user_id}")

    # For now, we'll just call the Lead Councillor directly.
    # We will add the other specialists later.
    final_response = await call_lead_councillor(request.message)
    
    return {"response": final_response}

# --- The Lead Councillor (GLM-4.6) ---
async def call_lead_councillor(user_prompt: str):
    """Calls the Zhipu AI GLM-4.6 API to get a response."""
    
    # The official API endpoint for GLM-4
    url = "https://open.bigmodel.cn/api/paas/v4/chat/completions"
    
    headers = {
        "Authorization": f"Bearer {GLM_API_KEY}",
        "Content-Type": "application/json"
    }
    
    # The payload for the API request
    payload = {
        "model": "glm-4",  # Or "glm-4-air", "glm-4-flash" depending on access/cost
        "messages": [
            {"role": "user", "content": user_prompt}
        ]
    }
    
    try:
        async with httpx.AsyncClient(timeout=60.0) as client:
            response = await client.post(url, json=payload, headers=headers)
            response.raise_for_status()  # Raise an exception for bad status codes (4xx or 5xx)
            
            result = response.json()
            
            # Extract the content from the response
            if 'choices' in result and len(result['choices']) > 0:
                return result['choices'][0]['message']['content']
            else:
                return "The Lead Councillor is silent. Unexpected API response."

    except httpx.HTTPStatusError as e:
        print(f"Avara Backend: HTTP error calling GLM: {e.response.status_code} - {e.response.text}")
        return f"Sorry, I had trouble reaching the council (HTTP Error {e.response.status_code})."
    except Exception as e:
        print(f"Avara Backend: An error occurred: {e}")
        return "Sorry, an internal error occurred while consulting the council."

@app.get("/")
def read_root():
    return {"status": "The Avara council is in session."}