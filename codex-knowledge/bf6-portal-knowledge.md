# BF6 Portal Knowledge

- Do not save raw conversation logs, raw prompts, or full execution logs as knowledge. Summarize only reusable lessons in an edited form.
- Useful knowledge notes should be short and structured around the symptom, likely cause, fix, and when to reuse the fix.
- Cache reusable information whenever practical, especially SDK/API lookups and facts learned from runtime logs.
- Keep loop processing to the minimum necessary. Avoid short-interval polling such as every second unless there is a clear gameplay reason and the cost is understood.
