# Place Picker Application (React Side Effects)

This project is a practical simulation for mastering **Side Effects** in React. It is part of the "React - The Practical Guide" course. The application allows users to select places they'd like to visit, sorting them by distance from their current location, and storing their selection persistently.

## 🚀 Features implemented

- **Location-Based Sorting:** Automatically requests user's geolocation and sorts available places by distance.
- **Persistent Storage:** Saves user's selected places to the browser's `localStorage` so data survives page reloads.
- **Auto-Dismiss Modal:** When deleting a place, the confirmation modal waits 3 seconds before automatically deleting (if the user doesn't cancel).
- **Visual Progress Bar:** Shows the remaining time for the auto-dismiss action using a custom progress component.

## 📚 Key Concepts Learned

### 1. Handling Side Effects with `useEffect`

- Understanding the difference between **Main Effects** (rendering UI) and **Side Effects** (talking to the "Outside World" like Browser APIs).
- Using `navigator.geolocation` nicely within React without creating infinite loops.
- Preventing **Race Conditions** and **Memory Leaks** by using cleanup functions in `useEffect` (e.g., `return () => clearTimeout(timer)`).

### 2. Browser Storage

- Interacting with `localStorage` (a synchronous browser API).
- Understanding why we must serialize data (`JSON.stringify`) to store it and parse it (`JSON.parse`) to read it.
- Handling `null` initialization states defensively.

### 3. Advanced Hooks & Optimization

- **`useCallback`:** Used to "freeze" or stabilize function definitions across renders. This prevents infinite loops when functions are used as dependencies in `useEffect`.
- **Refactoring for Performance:** Moved the Timer/Progress Bar logic into a separate `<ProgressBar />` component. This isolates the rapid "state updates" (every 10ms) to a small leaf component, preventing the entire Application from re-rendering just to update a progress bar.

### 4. DOM Synchronization

- Bridging the gap between React's Declarative state (`open={true}`) and the Browser's Imperative DOM methods (`dialog.showModal()`) using `useEffect`.

## 🛠️ Project Structure

- `App.jsx`: Main application logic, handling location sorting and global state.
- `components/ProgressBar.jsx`: specific component handling the interval timer for the progress bar animation.
- `components/DeleteConfirmation.jsx`: Handles the "Zombie Timer" logic to ensure safe auto-deletion.
- `loc.js`: Utility for sorting logic.
