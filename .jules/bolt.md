## 2026-11-07 - High-Frequency Telemetry DOM Caching

**Learning:** In single-file Cordova/Capacitor web applications with continuous skeuomorphic gauge animations, polling loops (`setInterval`) repeatedly querying the DOM tree via `document.getElementById` (8+ queries per 450ms tick, totaling ~1,000 queries/min) waste main-thread cycles and mobile battery. Static elements in fixed UI templates should be queried once and cached in a module-level object.
**Action:** When adding or maintaining simulated telemetry loops, odometers, or animations, reference a pre-cached DOM lookup map rather than re-querying the document tree on every timer tick.
