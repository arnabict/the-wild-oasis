# The Wild Oasis

A modern admin dashboard for **The Wild Oasis**, a boutique hotel and cabin retreat. Staff can manage reservations, handle guest check-ins and check-outs, configure cabins, and monitor business performance — all from a single, responsive web app.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4-646CFF?logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-4-FF4154?logo=reactquery&logoColor=white)

## Live Demo

- thewildoasis1234.netlify.app

## Features

### Authentication & Users

- Email/password login with protected routes
- Create new staff accounts
- Update profile and password from the account page

### Dashboard

- Key metrics: bookings, sales, occupancy, and cabin count
- Interactive sales and stay-duration charts (Recharts)
- Today’s activity feed for arrivals and departures
- Filter stats by time range (7 / 30 / 90 days)

### Bookings

- Paginated, sortable, and filterable bookings table
- Booking detail view with guest and payment info
- Delete bookings with confirmation
- Check-in flow with optional breakfast and payment confirmation
- One-click checkout

### Cabins

- Full CRUD for hotel cabins
- Image upload via Supabase Storage
- Sort and filter cabin list

### Settings

- Configure min/max booking length, max guests per booking, and breakfast price
- Inline updates with optimistic UI feedback

### UX & DX

- Dark mode toggle
- Toast notifications for success and error states
- Error boundaries for graceful failure handling
- React Query DevTools for server-state debugging

## Tech Stack

| Category         | Tools                                  |
| ---------------- | -------------------------------------- |
| **Framework**    | React 18, Vite                         |
| **Routing**      | React Router v7                        |
| **Server state** | TanStack React Query                   |
| **Backend**      | Supabase (Auth, Database, Storage)     |
| **Forms**        | React Hook Form                        |
| **Styling**      | Styled Components                      |
| **Charts**       | Recharts                               |
| **Utilities**    | date-fns, react-hot-toast, react-icons |

## Acknowledgments

Inspired by and built as part of Jonas Schmedtmann’s Ultimate React Course — extended with custom fixes and enhancements.
