# Teacher mapping audit

Teacher details were joined from the supplied workbook's `Course Plan` sheet using course code plus normalized section, with title and section matching for rows without timetable course codes.

- All 642 timetable source entries have a visible instructor/status value.
- Where the university course plan explicitly leaves an instructor unresolved, the card shows `TBA` or `To be confirmed` rather than inventing a name.
- Live Google Sheet timetable rows are enriched client-side from this audited teacher mapping, because the Timetable CSV itself does not contain instructor columns.
