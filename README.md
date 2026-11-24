# EventSphere demo

An interactive Next.js frontend prototype for event discovery, exhibitions, event services and illustrative trip planning.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Demo interactions use browser state and localStorage. Listings, bookings, travel recommendations, prices and availability are illustrative only; no payment is collected and no live travel inventory is queried.

## Build and deploy

```bash
npm run build
```

The project uses Next.js App Router and static export (`out/`), so it can be deployed to Vercel or another static host. To share with a client, deploy the repository to Vercel and share the generated `*.vercel.app` URL. For Vercel, connect the repository, keep the default Next.js build settings, and deploy. The temporary preview URL can be used for client review; use the production domain for the final presentation.

## Demo routes

- `/` — discovery home
- `/events` — searchable event directory
- `/events/bharat-mobility` — event detail and simulated ticket flow
- `/ai-planner` — illustrative event trip planner
- `/marketplace` — event services provider directory
- `/promote` — illustrative promotion packages
- `/dashboard/visitor`, `/dashboard/organizer`, `/dashboard/exhibitor`, `/dashboard/provider` — role dashboards
- `/admin` — platform administration overview

The platform and listings are fictional demo content prepared for presentation.
