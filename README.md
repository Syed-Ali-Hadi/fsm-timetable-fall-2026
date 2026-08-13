[README.md](https://github.com/user-attachments/files/31048247/README.md)
# 📅 FSM Timetable — Fall 2026

<p align="center">
  <strong>A fast, responsive timetable app for FAST School of Management, Islamabad.</strong>
</p>

<p align="center">
  <a href="https://fsm-timetable-fall-2026.vercel.app/">
    <img alt="Open Live App" src="https://img.shields.io/badge/Open_Live_App-38dfdc?style=for-the-badge&logo=vercel&logoColor=061016">
  </a>
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=061016">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <img alt="Vercel" src="https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel">
</p>

---

## ✨ Features

- Degree → semester → section filtering
- Repeating-course sections identified separately
- Direct search by section, course, room, or teacher
- Save individual classes or all matching results
- Current weekday shown first in Saved Classes
- Clear-day message when no saved class exists
- Free-room finder based on timetable occupancy
- Live Google Sheet timetable with bundled Excel fallback
- Mobile-first responsive interface
- Dark and light themes
- Installable on Android and iPhone home screens

## 🚀 Run locally

```powershell
npm install
npm run dev
```

Open the local address shown by Vite, normally `http://localhost:5173/`.

> Local Vite preview uses the bundled timetable snapshot. The live `/api/schedule` endpoint runs after deployment on Vercel.

## ✅ Production check

```powershell
npm run build
npm run preview
```

## ☁️ Deploy on Vercel

Use these settings:

- **Framework:** Vite
- **Install command:** `npm install`
- **Build command:** `npm run build`
- **Output directory:** `dist`

Keep these files in the repository:

```text
api/schedule.py
requirements.txt
```

The Vercel function checks the public Google Sheet and caches the result briefly. The app falls back to the bundled timetable if the live source is unavailable.

## 📱 Install on a phone

### Android — Chrome

Open the deployed website, tap the three-dot menu, then choose **Install app** or **Add to Home screen**.

### iPhone — Safari

Open the deployed website, tap **Share**, then choose **Add to Home Screen**.

## 🔗 Live app

[Open FSM Timetable](https://fsm-timetable-fall-2026.vercel.app/)

## 👤 Feedback

[Connect with Syed Ali Hadi on LinkedIn](https://www.linkedin.com/in/syed-ali-hadi)
