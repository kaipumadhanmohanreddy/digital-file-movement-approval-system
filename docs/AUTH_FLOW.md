# Authentication Flow

## Registration Flow

User fills registration form
        ↓
Frontend validation
        ↓
API request sent
        ↓
Backend validation
        ↓
Check duplicate email
        ↓
Password hashed using bcrypt
        ↓
User saved in MongoDB
        ↓
JWT token generated
        ↓
Response sent to frontend

---

## Login Flow

User enters credentials
        ↓
Backend checks email
        ↓
Compare password using bcrypt
        ↓
JWT token generated
        ↓
Token returned to frontend
        ↓
Protected routes accessible

---

## Protected Route Flow

Frontend sends JWT token
        ↓
Auth middleware verifies token
        ↓
User authorized
        ↓
Protected data returned


# Security Improvements

## Password Security

Passwords must contain:
- Minimum 8 characters
- One uppercase letter
- One lowercase letter
- One number
- One special character

---

## Role Security

Public users can only register as:
- employee

Admin and officer accounts:
- Created by admin only

---

## Route Protection

Protected routes verify:
- JWT token
- User authentication
- User role authorization