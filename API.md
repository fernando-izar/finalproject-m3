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

## Make Reservation

### POST /reservations

token - required

## Get Donations

### GET /donations

#

## Show Donations with their Users

### GET /donations?\_expand=user

#

## Show Reservations with their Users

### GET /reservations?\_expand=user

#

## Get Donations from user

### GET /users/"user_Id"?\_embed=donations

token - required

Example: Get all donations from user_Id = 2

=> https://api-m3-g2.herokuapp.com/users/2?embed=donations

#

## Get Donation by id

### GET /donations/"id"

#

## Get Donation by id showing the donor

### GET /donations/"id"?\_expand=user

#

## Get Reservation from user

### GET /users/"user_Id"?\_embed=reservatios

token - required

#

## Edit available property

### PATCH /donations/"user_Id"

body=> {"available": false}

Example: turn prop available (donation id = 2) from true to false

=> https://api-m3-g2.herokuapp.com/donations/2

body: {"available": false}

#

fixed services on api for tests:

{

"users": [

    {

      "email": "kenzinho@mail.com",

      "password":

      "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",

      "name": "Kenzinho",

      "cnpj/cpf": "11111111111",

      "address": "rua qualquer",

      "complement": "apto 99",

      "city": "Manaus",

      "state": "AM",

      "responsible": "Fulano",

      "contact": "92-9111 1111",

      "type": "donor",

      "id": 1

    },

    {

      "email": "charity@mail.com",

      "password": "$2a$10$5ZslJ/j7GnCIsVWx/M4I5OspVlYejq/kvqzSV269Q0yy65gWEK0MK",

      "name": "Charity",

      "cnpj/cpf": "222.222.222-22",

      "address": "rua qualquer",

      "complement": "apto 99",

      "city": "Porto Alegre",

      "state": "RS",

      "responsible": "José",

      "contact": "51-9222 2222",

      "type": "charity",

      "id": 2

    },

    {

      "email": "charity2@mail.com",

      "password": "$2a$10$Vbt.R4nxfObrJE2UON3bxOzGOMpzCNQOhwJhzCtK5YLOcO5rBfxxa",

      "name": "Charity Número 2",

      "cnpj/cpf": "221.221.221-21",

      "address": "rua da charity2",

      "complement": "térreo",

      "city": "São José do Rio Preto",

      "state": "SP",

      "responsible": "Manuel",

      "contact": "17-9333 3333",

      "type": "charity",

      "id": 3

    },

    {

      "email": "donor@mail.com",

      "password": "$2a$10$gO4esYQGmexyTk55lstTOucVlgBn1YGBPer1sgehcPbwKBIZalKLS",

      "name": "Donor Corporation",

      "cnpj/cpf": "229.229.229-29",

      "address": "rua do Donor Inc.",

      "complement": "35 andar",

      "city": "São Paulo",

      "state": "SP",

      "responsible": "Ana",

      "contact": "11-9444 4444",

      "type": "donor",

      "id": 4

    }

],

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

    },

    {

      "food": "rúcula",

      "quantity": "10 maços",

      "expiration": "30/12/2025",

      "classification": "hortifruti",

      "available": true,

      "userId": 1,

      "id": 5

    },

    {

      "food": "batata",

      "quantity": "100 kg",

      "expiration": "30/09/2022",

      "classification": "hortifruti",

      "available": true,

      "userId": 4,

      "id": 6

    },

    {

      "food": "leite",

      "quantity": "100 L",

      "expiration": "15/09/2022",

      "classification": "laticinios",

      "available": true,

      "userId": 4,

      "id": 7

    }

],

"reservations": [

    {

      "userId": 2,

      "donations": [

        {

          "food": "arroz",

          "quantity": "10kg",

          "expiration": "31/08/2022",

          "classification": "cereais",

          "available": true,

          "userId": 1,

          "id": 2,

          "user": {

            "name": "Kenzinho",

            "address": "rua qualquer",

            "complement": "apto 99",

            "city": "Manaus",

            "state": "AM",

            "responsible": "Fulano",

            "contact": "92-9111 1111",

            "type": "donor",

            "id": 1

          }

        }

      ],

      "id": 1

    },

    {

      "userId": 3,

      "donations": [

        {

          "food": "batata",

          "quantity": "100 kg",

          "expiration": "30/09/2022",

          "classification": "hortifruti",

          "available": true,

          "userId": 4,

          "id": 6,

          "user": {

            "name": "Donor Corporation",

            "address": "rua do Donor Inc.",

            "complement": "35 andar",

            "city": "São Paulo",

            "state": "SP",

            "responsible": "Ana",

            "contact": "11-9444 4444",

            "type": "donor",

            "id": 4

          }

        }

      ],

      "id": 2

    }

]

}
