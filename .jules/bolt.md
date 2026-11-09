# Bolt's Performance Journal

Critical learnings only. Do not record routine work.

## 2026-11-09 - Managed Telemetry Ticker Lifecycle on Mobile WebView
**Learning:** In single-file Capacitor/WebView applications with real-time UI gauges and meters, unbounded `setInterval` loops continue waking the JS thread and executing layout logic even when the connection/feature is marked offline, draining mobile battery and keeping CPU frequency governor elevated.
**Action:** Always tie continuous telemetry and animation intervals directly to state transitions (e.g., `startTelemetryLoop()` / `stopTelemetryLoop()`), and pre-cache static DOM nodes accessed during high-frequency interval ticks.
