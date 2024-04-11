
from typing import List
from storage import storage_client

class QuoteClient:

    def __init__(self):
        pass
    
    def calculate_quote(self, 
                        email: str, 
                        phone: str, 
                        first_name: str, 
                        last_name: str, 
                        location: str, 
                        gender: str,
                        dob: int,
                        citizenship: int,
                        income_bracket: int,
                        vaccination: int, 
                        smoking: int,
                        alcohol: int):
        
        initial = 10000

        if gender == "Male":
            initial *= 1.2
        elif gender == "Female":
            initial *= 1.1
        else:
            initial *= 1.2
        
        if dob < 1950:
            initial *= 1.5
        elif dob < 1970:
            initial *= 1.3
        elif dob < 1990:
            initial *= 1.2
        else:
            initial *= 1.1
            
        if location == "NSW" or location == "VIC":
            initial *= 1.1
        
        if citizenship == 0:
            initial *= 1.2
        
        if income_bracket < 50000:
            initial *= 0.8
        elif income_bracket > 100000:
            initial *= 1.1

        if vaccination == 0:
            initial *= 1.2

        if smoking == 1:
            initial *= 1.5

        if alcohol == 1:
            initial *= 1.2

        storage_client.insert_user({
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "phone": phone,
            "quote": initial
        })

        return {"quote": initial}


quote_client = QuoteClient()