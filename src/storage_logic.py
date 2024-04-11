
import json

class StorageClient:

    def __init__(self):
        pass

    def insert_quote(self, quote_dict: dict):
        # accept a dictionary and insert into data.json
        with open('data.json', 'r') as f:
            json.dump(quote_dict, f, indent=4)

        #TODO: add new quote to the list

    def fetch_quote(self):
        pass

if __name__ == "__main__":
    pass