# FSM Timetable Pro — Fall 2026

A responsive timetable app for FAST School of Management, Islamabad.

## Highlights

- Live Google Sheet sync with truthful status and fallback
- Batch → degree → section → optional lab subgroup
- Stable saved-timetable profile and legacy migration
- Today-first weekday views
- Automatic overlap-only clash detection
- Teacher, room, section, duration and course details
- Image export and formatted text sharing
- Free-room finder
- Responsive PWA with safe local storage and error recovery

## Run

```powershell
npm install
npm run dev
```

## Build

```powershell
npm run build
npm run preview
```

## Deploy

Vercel preset: Vite. Build command: `npm run build`. Output: `dist`. Keep `api/schedule.py` and `requirements.txt`.
