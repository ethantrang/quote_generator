
import json

class StorageClient:

    def __init__(self):
        pass

    def insert_user(self, quote_dict: dict):
        # accept a dictionary and insert into data.json
        with open('data.json', 'r') as f:
            user_details = json.load(f)

            user_details["users"].append(
                {
                    "id": user_details["total"] + 1,
                    "first_name": quote_dict["first_name"],
                    "last_name": quote_dict["last_name"],
                    "email": quote_dict["email"],
                    "phone": quote_dict["phone"],
                    "quote": quote_dict["quote"],
                }
            )

            user_details["total"] += 1

        # save back into data.json
        with open('data.json', 'w') as f:
            json.dump(user_details, f)

    def get_user(self, email: str):
        # get the quote for a particular user
        with open('data.json', 'r') as f:
            user_details = json.load(f)

            for user in user_details["users"]:
                if user["email"] == email:
                    return user
                
    def delete_user(self, email: str):
        # delete a user from data.json
        with open('data.json', 'r') as f:
            user_details = json.load(f)

            for user in user_details["users"]:
                if user["email"] == email:
                    user_details["users"].remove(user)
                    break

        with open('data.json', 'w') as f:
            json.dump(user_details, f)
    

storage_client = StorageClient()

if __name__ == "__main__":
    # storage_client.insert_quote({
    #     "first_name": "John",
    #     "last_name": "Doe",
    #     "email": "john.doe@gmail.com",
    #     "phone": "0412345678",
    #     "quote": 10000
    # })

    # print(storage_client.get_quote("john.doe@gmail.com"))
    # storage_client.delete_user("john.doe@gmail.com")
    pass