# Authentication APIs

## Register

POST /api/auth/register

### Request Body

{
  "name": "Madhan",
  "email": "madhan@gmail.com",
  "password": "123456",
  "confirmPassword": "123456"
}

---

## Login

POST /api/auth/login

### Request Body

{
  "email": "madhan@gmail.com",
  "password": "123456"
}

---

## Profile

GET /api/auth/profile

Headers:
Authorization: Bearer TOKEN