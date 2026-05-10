# Campus Mart Admin

Admin portal frontend for moderation and marketplace operations.

## Tech Stack

- React 19
- React Router DOM 6
- Vite 5
- Tailwind CSS 4
- ESLint

## Implemented Routes

- `/login` - admin login screen
- `/dashboard` - control center stats, queue, and activity feed
- `/users` - user listing with search, status filter, date sorting, pagination, and status update actions
- `/products` - product listing with search, status filter, pagination, and moderation actions (list/unlist, block, soft delete, hard delete)
- `/reports` - report moderation with two modes:
  - user reports (review and set status: dismissed, warned, suspended, banned)
  - product reports (block product or ignore report)
- `/analytics` - analytics placeholder section
- `/notification` - notification composer UI, preview, and recent broadcasts list
- `/settings` - read-only moderation settings view

## Authentication and Session

- Auth state is managed in `src/context/AuthContext.jsx`.
- Session data is stored in `localStorage` under `campus_mart_admin`.
- Protected routes are wrapped by `src/routes/AdminRoutes.jsx`.
- On app start, session restore flow runs in this order:
  1. `GET /admin/auth/me`
  2. If needed, `POST /admin/auth/refresh-token`
- Login and logout calls:
  - `POST /admin/auth/login`
  - `POST /admin/auth/logout`

## API Layer

- Base URL is read from `VITE_API_BASE_URL` and defaults to `http://localhost:5000/api`.
- Requests use `fetch` with `credentials: 'include'`.
- API helpers live in `src/services/api.js`.
- Hook `src/hooks/useFetch.js` handles loading, error, response data, pagination, and refetch.

### Backend endpoints used by this frontend

- `GET /admin/auth/me`
- `POST /admin/auth/login`
- `POST /admin/auth/refresh-token`
- `POST /admin/auth/logout`
- `GET /admin/users`
- `PATCH /admin/users/:userId/status`
- `GET /admin/products`
- `PATCH /admin/products/:productId/status`
- `PATCH /admin/products/:productId/soft-delete`
- `DELETE /admin/products/:productId`

### In-memory data used in current frontend

The following sections currently use in-memory collections inside `src/services/api.js`:

- dashboard payload (`getDashboard`)
- product reports (`getReports`)
- user reports (`getUserReports`, `getUserReportById`, `updateUserReportStatus`)
- notification center payload (`getNotificationCenter`)
- report ignore state (`ignoreReport`)

## Setup

1. Install dependencies:
   - `npm install`
2. Create `.env` from `.env.sample` and set:
   - `VITE_API_BASE_URL=`
3. Start development server:
   - `npm run dev`

Default dev server port is `5174`.

## Scripts

- `npm run dev` - start Vite dev server on port 5174
- `npm run build` - create production build
- `npm run preview` - preview production build
- `npm run lint` - run ESLint
