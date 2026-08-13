# FSM Timetable Fall 2026 — Final Polish

Includes live Google Sheet API with snapshot fallback, degree/section filters, current-day default on Timetable and Saved, weekday toggles, semantic saved-class deduplication, Save all, Free rooms, install prompt support, and responsive light/dark UI.

## Local
```powershell
npm install
npm run dev
```

## Production
```powershell
npm run build
npm run preview
```

## Vercel
Use Vite, `npm run build`, output `dist`. The `api/timetable.js` function deploys automatically.
