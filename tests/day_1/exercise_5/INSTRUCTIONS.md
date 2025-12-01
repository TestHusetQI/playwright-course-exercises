  _____         _   _   _                _   
 |_   _|__  ___| |_| | | |_   _ ___  ___| |_ 
   | |/ _ \/ __| __| |_| | | | / __|/ _ \ __|
   | |  __/\__ \ |_|  _  | |_| \__ \  __/ |_ 
   |_|\___||___/\__|_| |_|\__,_|___/\___|\__|
                    ___                _          __   __
                    | __|_ _____ _ _ __(_)___ ___  \ \ / /
                    | _|\ \ / -_) '_/ _| (_-</ -_)  \ V / 
                    |___/_\_\___|_| \__|_/__/\___|   \_/  
                                                        
# Day 1 – Exercise 5: Let's Create a Note!
## Prerequisite:
    - Go to 'https://practice.expandtesting.com/notes/app/register' and create a test account. 
    - Don't worry about having a valid email, since you can login without verifying your account. 
    - You will use the login details later on, we recommend not using one of your own password and personal email.
    
## Goals:
    - More advanced UI interactions
    - Use Playwright to add a new note by using all the techniques that we have learned so far.
    - Create multiple test scripts


## Exercise 5
    - Copy the code from exercise_2.spec.ts into exercise_4.spec.ts
    - Implement logging inside each test step
    - Run the test and see the logs in the test result

## Instructions:
    1. Go into the exercise_5.spec.ts and fill in the test("Login to note app") test. 
    2. Next up is the "Create new note" test. Instead of using the same approach in the login test, you should use the function login() with in the notes-page.ts file. 
    3. Creating a new note step is fairly straight forward, you might notice that all the locators are already created within the page object, all you need to do, is use them.
    4. Verify that the notes has been created is the assertion part of the test. Here we just verify that the note actually was created. You might need to filter on the title and do a
       check afterwards that there only is one with that title created.
    5. A good practice when working with creating test objects, is the clean up aftwards. The last and final step is to delete the note that you have just created. 