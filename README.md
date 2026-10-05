# GTW React Native

This Expo project was initialized from the Android source at `/home/linus/AndroidStudioProjects/gtwandroid` and adapted as an iOS-friendly React Native app.

## Notes

- The original Android layout used multiple `BlurView` cards. Those were translated into a reusable `LiquidGlassView` component built with `expo-blur` for a modern frosted-glass look.
- The project is configured as an Expo app so it can run via the standard Expo iOS simulator flow (`npx expo start --ios` or `npx expo run:ios` on macOS).
- The Android branding and UI concept were preserved as a polished landing screen for the GTW game.

## Run locally

```bash
npm install
npm run ios
```

On macOS, this launches the iOS simulator. In a Linux environment, the project is still valid Expo code, but the native iOS simulator cannot be launched directly from this machine.
