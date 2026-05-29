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