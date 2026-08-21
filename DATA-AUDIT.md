# Timetable data audit

The parser now reads every recognized section cell across the complete Timetable worksheet rather than checking only six fixed starting columns. This captures normal slots, merged cells, custom-time classes, combined sections, lab subgroups and repeat offerings.

Bundled workbook validation:
- Recognized source section cells: 642
- Normalized schedule entries: 642
- Validation errors: 0
- FT03C/FT05A Psychology on Tuesday: present

The live API repeats this validation for every Google Sheets refresh and refuses an incomplete response below the safety threshold. Existing saved profiles are reconciled against each successful sync, so newly added classes for a previously selected section are added automatically.
