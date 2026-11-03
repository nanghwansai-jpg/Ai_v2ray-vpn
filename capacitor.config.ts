import type { CapacitorConfig } from '@capacitor/cli';

/**
 * Capacitor Configuration for AI V2RAY Client (Copper Compass)
 * Developed by Victor Geek // Artesys Digital Solutions
 * Optimized for immersive hardware skeuomorphic UI, edge-to-edge rendering,
 * and high-refresh-rate sensor / gyroscope telemetry on Android.
 */
const config: CapacitorConfig = {
  appId: 'com.artesys.copperv2ray',
  appName: 'AI V2RAY Client',
  webDir: 'dist',
  bundledWebRuntime: false,

  server: {
    // Enable for local network debugging on physical Android devices if needed:
    // url: 'http://192.168.1.100:5173',
    // cleartext: true,
    androidScheme: 'https'
  },

  android: {
    // Enable dark background matching the Dark Brushed Steel Chassis to eliminate white flash during launch
    backgroundColor: '#0a0f13',
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: false
  },

  plugins: {
    // Status Bar & Navigation Bar styling for edge-to-edge skeuomorphic hardware look
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#101418',
      overlaysWebView: true
    },

    // Native Splash Screen matching the Stamped Steel & Copper Compass branding
    SplashScreen: {
      launchShowDuration: 1800,
      launchAutoHide: true,
      backgroundColor: '#0a0f13',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true
    },

    // Keyboard configuration to prevent squishing the 3D gauges on input focus
    Keyboard: {
      resize: 'body',
      style: 'DARK',
      resizeOnFullScreen: true
    }
  }
};

export default config;
