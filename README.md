# Fabrica-X Technical Challenge Submission

This repository contains my submission for the React Native Technical Challenge. It demonstrates high-fidelity UI implementation, performance-optimized list handling, and clean architectural patterns using TypeScript and React Native.

---

## Architectural Overview

The project is structured to separate concerns between the UI layer, business logic (hooks), and data simulation (Mock API), ensuring the codebase is scalable and maintainable.

### 1. The Mock API and Data Modeling

Following the task requirements, I implemented an Async Service Layer (src/libs/api) that mimics a production backend environment:

- **Relational Data Mapping:** Users are stored in a central users.json and dynamically mapped to entries via userId during the fetch, simulating a joined database query.
- **Server-Side Ranking:** The mock API calculates ranks on-the-fly, correctly handling score ties (e.g., two users with the same score share a rank) before returning the response.
- **Simulated Latency:** Every request includes a randomized delay (400ms–800ms) to validate UI loading states and skeleton feedback.
- **Pagination Logic:** Implements a limit/offset strategy to ensure the mobile client only processes 10 items at a time, protecting memory performance.

### 2. State Management and Hooks

I utilized a custom hook pattern (useLeaderboardApi) to encapsulate the leaderboard's state machine:

- **Smart Resets:** Switching a filter (e.g., This Week to All Time) or changing the Challenge ID triggers an automatic state reset to prevent index collisions and data flickering.
- **Fetch Coordination:** Precise tracking of isLoading (initial load) vs. isFetchingNextPage (pagination) to manage footer spinners and empty states separately.

### 3. Performance and Animations

- **List Rendering:** Used FlatList with onEndReached for seamless infinite scrolling and initialNumToRender optimizations.
- **High-Performance Motion:** Leveraged React Native Reanimated for 60FPS entrance animations.
- **Execution Scheduling:** Used requestAnimationFrame to ensure animations fire only when the JS thread has finished initial layout, avoiding dropped frames during heavy data transitions.

---

## Tech Stack

- **Framework:** React Native (Expo SDK 50)
- **Language:** TypeScript (Strict Mode)
- **Animations:** React Native Reanimated
- **Styling:** Theme-based system with design token support
- **Safe Area:** React Native Safe Area Context

---

## Features Demonstrated

### 1. Challenge Detail Screen

- **UI Fidelity:** Pixel-perfect implementation of the Figma design.
- **Smooth Transitions:** Meaningful entrance animations for the challenge cards and description text.

### 2. Leaderboard Screen

- **Dynamic Filtering:** Integrated support for both Time Period (Week, Month, All Time) and specific Challenge IDs.
- **Infinite Scroll:** Smooth pagination fetching chunks of data as the user scrolls to the bottom of the list.
- **Ranking UI:** Visual representation of ranks, including a Last Rank Preview card at the top.

---

## Deliverables

This submission includes the following items as per the challenge requirements:

### 1. Source Code

- Clean folder structure following industry standards.
- Meaningful Git commit history demonstrating the iterative development process.
- TypeScript implementation for type safety and code readability.

### 2. Video Recordings

Located in the `/videos` directory, providing evidence of performance and UI alignment on both platforms:

- **iOS (Simulator/Device):** Demonstrates smooth animations, leaderboard scrolling, filtering, and pagination.
- **Android (Emulator/Device):** Demonstrates consistent behavior and UI scaling across the Android ecosystem.

---

## How to Run

1.  **Clone the repository**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the project:**
    ```bash
    npx expo start
    ```
4.  **Open on Device:** Scan the QR code with Expo Go (Android) or the Camera app (iOS).

---

## Project Structure

```text
src/
├── app/               # Expo Router / Navigation screens
├── assets/            # Images, fonts, and static media
├── components/        # UI Components (Header, List, FilterModal)
├── constants/         # Theme, Spacing, and Config
├── data/              # Mock JSON datasets (Normalized)
├── hooks/             # Custom hooks (useLeaderboardApi, useTheme)
├── libs/api/          # Mock API Service layer (The "Backend")
└── types/             # Global TypeScript interfaces and types
```
