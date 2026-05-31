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

# File APIs

## Create File

POST /api/files

---

## Get All Files

GET /api/files

---

## Get Single File

GET /api/files/:id

---

## Update File

PUT /api/files/:id

---

## Delete File

DELETE /api/files/:id