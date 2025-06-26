# Sick-Kid Tracker

A friendly mobile/web app for monitoring your child's illness and medication schedule. This repository contains a very small prototype demonstrating dose calculation logic and a starting point for a React Native application.

## Tech Stack Rationale

- **React Native** for a single code base across iOS and Android.
- **Firebase/Firestore** to handle authentication, realtime data sync and push notifications.
- **Node.js** used for development tooling and to run unit tests.

## Setup Instructions

1. Ensure you have Node.js installed (v18+ recommended).
2. Install the Expo CLI globally if you plan to run the React Native front end:
   ```bash
   npm install -g expo-cli
   ```
3. Install project dependencies (none are required for the tests in this prototype):
   ```bash
   npm install
   ```
4. Run the unit tests for dosing logic:
   ```bash
   npm test
   ```

The React Native app would normally live in a `app/` directory and can be started with `expo start` once implemented.

## API Key Checklist

- Firebase project configuration (apiKey, authDomain, projectId, etc.).
- Enable Firebase Authentication for email/password sign-in.
- Configure Firestore database rules to restrict access per user and child record.
- Set up Firebase Cloud Messaging keys for push notifications.

## Notes

This repository only contains sample dosing logic with tests. Additional work is required to build the full application, including offline-first data entry and queued sync.
