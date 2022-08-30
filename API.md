```diff
-                                API
```

#

Base url : "https://api-m3-g2.herokuapp.com"

## Register User

### POST /users

"email" - required
"password" - required

## Login User

### POST /login

"email" - required
"password" - required

## Make Donation

### POST /donations

token - required

## Get Donations

### GET /donations

## Show Donations with their Users

### GET /donations?\_expand=user

## Get Donations from user

### GET /users/"user_Id"?\_embed=donations

token - required
Example: Get all donations from user_Id = 2
=> https://api-m3-g2.herokuapp.com/users/2?embed=donations
