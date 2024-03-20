# quote_generator
First group project for ELEC1005

# Instructions

Install

```
pip install -r requirements.txt
```

Run with uvicorn

```
python main.py
```

View and test in local browser
```
http://0.0.0.0:8000/docs
```

```
{
  "email": "ethan.trang5521@gmail.com",
  "phone": "+61434947101",
  "first_name": "Ethan",
  "last_name": "Trang",
  "location": "NSW",
  "gender": "M",
  "dob": [
    2005, 5, 24
  ],
  "citizenship": "citizen or resident",
  "income_bracket": 50000,
  "vaccination": true,
  "smoking": false,
  "alcohol": false,
  "package": "premium"
}
```

COMMON ERROR: [Errno 48] error while attempting to bind on address ('0.0.0.0', 8000): address already in use. 
SOLUTION: Kill server process and run python main.py again

```
python main.py           
INFO:     Started server process [61944]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
ERROR:    [Errno 48] error while attempting to bind on address ('0.0.0.0', 8000): address already in use
INFO:     Waiting for application shutdown.
INFO:     Application shutdown complete.
 
lsof -i :8000
COMMAND     PID       USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
python3.1 54465 ethantrang    6u  IPv4 0x2026905aa2ec3f2d      0t0  TCP *:irdmi (LISTEN)

kill -9 54465

python main.py
```
