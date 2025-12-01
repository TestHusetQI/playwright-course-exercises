  _____         _   _   _                _   
 |_   _|__  ___| |_| | | |_   _ ___  ___| |_ 
   | |/ _ \/ __| __| |_| | | | / __|/ _ \ __|
   | |  __/\__ \ |_|  _  | |_| \__ \  __/ |_ 
   |_|\___||___/\__|_| |_|\__,_|___/\___|\__|
                    ___                _          __   _____ ___ 
                    | __|_ _____ _ _ __(_)___ ___  \ \ / /_ _|_ _|
                    | _|\ \ / -_) '_/ _| (_-</ -_)  \ V / | | | | 
                    |___/_\_\___|_| \__|_/__/\___|   \_/ |___|___|
                                                                
                                                            
# Day 1 – Exercise 7: Let's Create a Note! With the API engine!
## Prerequisite:
    
## Goals:
    - Authenticating against a REST API.
    - Using the returned auth token to call a protected endpoint.
    - Making basic assertions on the response.

## Exercise 6
### Instructions:
    1. Use Playwright’s **`request` fixture** to send HTTP requests.
    2. Authenticate with an API using **POST /users/login**.
    3. Extract data from a JSON response and reuse it in other tests.
    4. Call an authenticated endpoint (**GET /notes**) using a token.
    5. Add meaningful assertions on API responses.
    6. Optionally log useful information using the shared `logger`.