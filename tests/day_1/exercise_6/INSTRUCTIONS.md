  _____         _   _   _                _   
 |_   _|__  ___| |_| | | |_   _ ___  ___| |_ 
   | |/ _ \/ __| __| |_| | | | / __|/ _ \ __|
   | |  __/\__ \ |_|  _  | |_| \__ \  __/ |_ 
   |_|\___||___/\__|_| |_|\__,_|___/\___|\__|
                    ___                _          __   _____ 
                    | __|_ _____ _ _ __(_)___ ___  \ \ / /_ _|
                    | _|\ \ / -_) '_/ _| (_-</ -_)  \ V / | | 
                    |___/_\_\___|_| \__|_/__/\___|   \_/ |___|
                                                            
# Day 1 – Exercise 6: Let's Create a Note! With the API engine!
## Goals:
    - Learn how to perform a simple API request using Playwright
    - Understand how to call a health-check endpoint
    - Parse and validate JSON responses
    - Use assertions to verify correct API behavior

## Exercise 6
    Your task is simple. You need to call a health-check endpoint, and make sure that it works properly.
    You will need to apply the knowledge of the last slides in order to call it correctly. 


## Instructions:
    1.  Create a new GET request using the request fixture:
        const response = await request.get(<endpoint>);
    2.  Call the /health-check endpoint by appending it to the base URL
    3.  Assert that reponse.ok() return true, meaning that the request was successful.
    4.  Extract the JSON body from the response and store it in a const data.
        const data = await response.json();
    5.  Validate that data.message contains the expected text.
        Use logger.info(data) if needed to inspect the full response.