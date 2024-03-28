from fastapi import FastAPI
from src.logic import quote_client
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI() 

class QuoteRequest(BaseModel):
    email: str
    phone: str
    first_name: str
    last_name: str
    location: str
    gender: str

    dob: List[int]
    citizenship: str
    income_bracket: int
    vaccination: bool
    smoking: bool
    alcohol: bool
    package: str

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/quote")
def get_quote(request: QuoteRequest):
    quote_response = quote_client.calculate_quote(**request.dict())
    return quote_response

# @app.post("/details")
# def get_details():
#     #TODO: get details from db, check if quote submitted or not
#     details = quote_client.get_details()
#     return details

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)