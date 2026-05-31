# File Workflow

## File Request Flow

Employee creates file request
        ↓
File stored in MongoDB
        ↓
Initial status = Submitted
        ↓
Approval history initialized
        ↓
Officer/Admin reviews request
        ↓
Status updated dynamically

---

## Status Workflow

Submitted
    ↓
Under Review
    ↓
Approved / Rejected
    ↓
Returned for Changes

---

## Approval History

Every file stores:
- Action performed
- Status
- Remarks
- User performing action
- Timestamp