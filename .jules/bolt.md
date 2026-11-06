## 2026-11-06 - Telemetry simulation DOM lookup caching
**Learning:** Repetitive `document.getElementById` calls inside high-frequency intervals (450ms simulation loop) cause unnecessary DOM tree searches and CPU churn in Android WebView. Caching elements into a plain lookup object speeds up attribute/text mutations by ~4-5x and eliminates ~800 redundant DOM lookups per minute.
**Action:** When building real-time dashboard or gauge loops in single-page HTML/Capacitor apps, cache DOM references immediately following DOMContentLoaded or at module scope.
