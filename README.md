Backend:
	
The backend is broken down into the following features. Each feature is a new branch. When you start a feature, create a new branch, test the code using Postman, and finally merge your code. Then the next driver will pull down the code from Github, create a new branch, and start the next feature.

Here are the features:
Create a new repository on Github and add all the team members.
Build the skeleton of the backend using npm and add the dependencies.
Build a user table using Prisma. This table should contain a UUID that is the primary key, a first name, last name, email that is unique, and a password. All fields should be not null.
Create the register endpoint. A user will enter an email, first name, last name, and password. The password will be encrypted using bcrypt and the end point will return a JSON web token that is good for one day. Create appropriate folders. Test this in Postman
Create a login endpoint. The user will enter their email and password, use bcrypt compare for the password and return a JSON web token. Test this in Postman.
Create an “aboutMe” end point that returns the user's firstname, lastname, id, and email. This is a protected route, use middleware to make sure the user has a valid JSON web token. If they do return the user’s information, if not return an unauthorized error. Test this in Postman
Create an endpoint to get all the users. This is a protected route, use middleware to make sure the user has a valid JSON web token. If they do return all the users, if not return an unauthorized error. Test this in Postman (Are you seeing a pattern?).
Create a get for a single user endpoint. This is another protected route, the same as above.
Create a delete endpoint for a user. This is another protected route, the same as above.
Create an update endpoint for a user. This should take in the email, first name, last name, and password, then update the user's information. Don’t forget to use bcrypt for the password. This is also a protected route
Once you are done and all routes have been tested, deploy on render. Here is the link. Reach out if you have any questions.
Once deployed, test all routes using Postman.
