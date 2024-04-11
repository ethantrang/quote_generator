from fastapi import FastAPI
from generation import quote_client
from storage import storage_client
from pydantic import BaseModel
from typing import List, Dict, Any
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI() 

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],  # Include OPTIONS method
    allow_headers=["*"],
)


class QuoteRequest(BaseModel):
    email: str
    phone: str
    first_name: str
    last_name: str

    location: str
    gender: str
    dob: int
    citizenship: int
    income_bracket: int
    vaccination: int
    smoking: int
    alcohol: int

class FetchRequest(BaseModel):
    email: str

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/quote")
def get_quote(request: QuoteRequest):
    quote_response = quote_client.calculate_quote(**request.dict())
    return quote_response

@app.post("/fetch")
def get_fetch(request: FetchRequest):
    details = storage_client.get_user(**request.dict())
    return details

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)