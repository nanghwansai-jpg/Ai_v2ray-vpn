<div align="center">

# AI V2RAY CLIENT // COPPER COMPASS
### Enterprise-Level Android APK & Skeuomorphic Precision Network Console

[![Build Android APK](https://github.com/nanghwansai-jpg/Ai_v2ray-vpn/actions/workflows/build_apk.yml/badge.svg)](https://github.com/nanghwansai-jpg/Ai_v2ray-vpn/actions/workflows/build_apk.yml)
[![Capacitor Android](https://img.shields.io/badge/Capacitor-Android%20SDK%2035-brightgreen.svg)](https://capacitorjs.com/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

</div>

---

## 🏛️ Architecture Overview

The **Copper Compass AI V2Ray Client** is an enterprise-grade mobile network telemetry console engineered with high-tactility skeuomorphic instrument design and native Android packaging.

```
AI_V2RAY_VPN / COPPER COMPASS
├── android/                             # Native Android Platform Shell (SDK 35, Java 21)
│   ├── app/src/main/AndroidManifest.xml # Enterprise Network & Foreground Service Permissions
│   └── app/build.gradle                 # Hardware-accelerated release & debug configurations
├── .github/workflows/                   # Automated Enterprise CI/CD Pipeline
│   ├── build_apk.yml                    # Automated debug APK compilation & tag release
│   └── build_release_apk.yml            # Signed production APK packaging
├── src / index.html                     # Unified Copper Compass Master UI Console
│   ├── Triple Analog Gauge Cluster      # 270° Sweep Latency & Speed Needles
│   ├── Master Power Actuator Switch     # Tactile toggle with animated neon PCB circuit tracks
│   ├── Hydraulic Latch Server Drawer    # Multi-node selector & custom URI importer (VLESS/VMess/Trojan)
│   └── Gemini AI Topology Engine        # Route latency & throughput optimizer
├── capacitor.config.ts                  # Edge-to-edge hardware skeuomorphic configuration
├── vite.config.ts                       # High-speed web asset bundler
└── DESIGN.md                            # Detailed hardware skeuomorphic design specification
```

---

## 🚀 Key Enterprise Features

1. **Precision Skeuomorphic Telemetry**:
   - 270-degree sweeping analog gauges for latency jitter and bandwidth throughput.
   - Dual odometers tracking real-time Rx/Tx telemetry.
   - Laser-cut stencil typography and dynamic pulse oscilloscope wave.
   - Offline-first vector SVG substrates eliminating remote image dependencies.

2. **Enterprise Node Management**:
   - Native support for VLESS, VMess, Trojan, and Shadowsocks URI parsing and validation.
   - Real-time diagnostic sweeps (TCP handshake, TLS negotiation, DNS resolution).
   - AI-assisted route topology optimization powered by Gemini routing heuristics.

3. **Android Native Integration**:
   - Compiled with Android SDK 35 and Java 21 OpenJDK.
   - Full enterprise permission matrix: `INTERNET`, `ACCESS_NETWORK_STATE`, `FOREGROUND_SERVICE`, `WAKE_LOCK`, `RECEIVE_BOOT_COMPLETED`, and `POST_NOTIFICATIONS`.
   - Dark steel chassis matching to eliminate white flash during native launch.

---

## 🛠️ Building & Packaging

### Local Development
```bash
npm install
npm run dev
```

### Compile Enterprise Android APK
```bash
# 1. Build web application assets
npm run build

# 2. Sync web assets with Capacitor Android
npx cap sync android

# 3. Assemble Android APK via Gradle
cd android
./gradlew assembleDebug --no-daemon
```
The compiled enterprise APK is generated at:
`android/app/build/outputs/apk/debug/app-debug.apk`

---

## 📜 Design Specifications

Full specifications for physical depth levels, metallic chamfers, color hex codes, and typography can be found in [DESIGN.md](DESIGN.md).
