# Frontend Flow

## Authentication Flow

User submits login form
        ↓
Axios API request sent
        ↓
Backend validates credentials
        ↓
JWT token received
        ↓
Token stored in localStorage
        ↓
Context API updates authentication state
        ↓
Protected routes accessible

---

## Protected Route Flow

User visits protected page
        ↓
ProtectedRoute checks user state
        ↓
If authenticated → access granted
If not authenticated → redirect to login

# Dashboard Flow

Dashboard loads
      ↓
Fetch files from API
      ↓
Generate statistics
      ↓
Render charts
      ↓
Apply search/filter
      ↓
Render paginated table