```diff
-API
```

#

Base url : "https://api-m3-g2.herokuapp.com"

user example:

{

"email": "kenzinho@mail.com",

"password":

"$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",

"name": "Kenzinho",

"cnpj/cpf": "11111111111",

"address": "rua qualquer",

"complement": "apto 99",

"city/state": "Manaus/AM",

"responsible": "Fulano",

"contact": "ciclano",

"type": "donor",

"id": 1

}

donation example:

{

"food": "alface",

"quantity": "10maços",

"expiration": "31/08/2022",

"class": "hortifruti",

"available": true,

"userId": 1,

"id": 1

}

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
