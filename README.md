# HireHub — Standalone UI Demo

A self-contained preview of the **HireHub** frontend with **mock data only**. No backend, no API keys, no database. Ready to push to its own GitHub repo.

The original `Frontend/` project is **not modified** — this folder is a separate copy of the UI with demo-specific tweaks.

## Quick start

```bash
cd hirehub-demo
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Static build (optional)

```bash
npm run build
npm run preview
```

Or open `dist/index.html` after building — hash-based routing works without a server.

## Demo login

Use **any email and password** (min 6 characters). Role is inferred from the email:

| Email contains | Dashboard |
|----------------|-----------|
| `admin` | Admin panel |
| `company` | Company dashboard |
| anything else | Candidate dashboard |

Examples: `admin@demo.com`, `company@demo.com`, `sarah@demo.com`

Click the **Demo Mode** button (bottom-right) for quick navigation to any section.

## All pages included

### Public
| Page | Route |
|------|-------|
| Landing | `#/` |
| For Companies | `#/companies` |
| For Candidates | `#/candidates` |
| Login | `#/login` |
| Register | `#/register` |

### Candidate
| Page | Route |
|------|-------|
| Dashboard | `#/candidate/dashboard` |
| Browse Jobs | `#/jobs` |
| Job Detail | `#/jobs/1` |
| My Applications | `#/candidate/applications` |
| Profile | `#/candidate/profile` |
| CV Manager | `#/candidate/cv` |
| Schedule | `#/schedule` |
| Chat | `#/chat` |
| Notifications | `#/notifications` |

### Company
| Page | Route |
|------|-------|
| Dashboard | `#/company/dashboard` |
| ATS Board | `#/company/ats` |
| Job Posts | `#/company/jobs` |
| Schedule | `#/schedule` |
| Chat | `#/chat` |

### Admin
| Page | Route |
|------|-------|
| Overview | `#/admin/dashboard` |
| Users | `#/admin/users` |
| Companies | `#/admin/companies` |
| Jobs | `#/admin/jobs` |
| Reports | `#/admin/reports` |

## Mock data

Every page uses inline mock data (jobs, users, chat messages, notifications, calendar events, etc.). Auth is mocked in `src/services/authService.js` — no real network calls.

## Differences from main Frontend

- Uses **HashRouter** so static builds work without a server
- Includes **Demo Mode** quick-nav banner
- Adds **Job Posts**, **Admin Jobs**, and **Admin Reports** pages (referenced in sidebar but missing from main app routes)
- No axios/backend dependencies
