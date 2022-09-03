```diff
-API
```

#

Base url : "https://api-m3-g2.herokuapp.com"

#

## Register User

### POST /users

"email" - required
"password" - required

#

## Login User

### POST /login

"email" - required

"password" - required

#

## Show User

### Get /users/"id"

token - required

#

## Make Donation

### POST /donations

token - required

#

## Get Donations

### GET /donations

#

## Show Donations with their Users

### GET /donations?\_expand=user

#

## Get Donations from user

### GET /users/"user_Id"?\_embed=donations

token - required

Example: Get all donations from user_Id = 2

=> https://api-m3-g2.herokuapp.com/users/2?embed=donations

#

## Edit available property

### PATCH /donations/"user_Id"

body=> {"available": false}

Example: turn prop available (donation id = 2) from true to false

=> https://api-m3-g2.herokuapp.com/donations/2

body: {"available": false}

#

fixed services on api for tests:

"users": [
{

      "email": "kenzinho@mail.com",

      "password": "123456",

      "name": "Kenzinho",

      "cnpj/cpf": "11111111111",

      "address": "rua qualquer",

      "complement": "apto 99",

      "city": "Manaus",

      "state": "AM",

      "responsible": "Fulano",

      "contact": "11-99999999",

      "type": "donor",

      "id": 1
    }

]

"donations": [
{

      "food": "alface",

      "quantity": "10maços",

      "expiration": "31/08/2022",

      "classification": "hortifruti",

      "available": true,

      "userId": 1,

      "id": 1
    },
    {
      "food": "arroz",

      "quantity": "10kg",

      "expiration": "31/08/2022",

      "classification": "cereais",

      "available": true,

      "userId": 1,

      "id": 2
    },
    {
      "food": "sardinha",

      "quantity": "5 latas",

      "expiration": "31/12/2022",

      "classification": "enlatados",

      "available": true,

      "userId": 1,

      "id": 3
    }

]
