Writing a README for your Expo React Native project is essential for providing clear instructions on how to run the project and its dependencies. Below is a template for your README file:

---

# PeacefulPal 

## Description
Expo react native mobile app for mental health.

## Features
- Registration and authentication 
- Journal 
- Habit tracker
- Breathing exercise
- Pomodoro timer
- Games

## Prerequisites
- Node.js and npm installed
- Expo CLI installed (`npm install -g expo-cli`)
- Docker installed (for PostgreSQL database with Docker)
- Expo Go app installed on your device (for testing on mobile)

## Setup
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the server:**
   Navigate to the server directory and run the following commands:
   ```bash
   cd server
   npm install
   node server.js
   ```

4. **Run PostgreSQL with Docker:**
   Navigate to the ./server directory of the project and run:
   ```bash
   docker-compose up -d
   ```
    Tables will create automatically

5. **Start the Expo development server:**
   ```bash
   npx expo start 
   ```
   or 
    ```bash
   npx expo start --tunnel
   ```
   This will start the Expo development server.

6. **View the app:**
    - Open the Expo Go app on your device.
    - Scan the QR code displayed in the terminal or Expo DevTools.
    - Alternatively, you can run the project on an emulator/simulator by following the instructions in the Expo DevTools.

    