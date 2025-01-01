**--- `milestones/06_client_workout_view.md` ---**

## Milestone 6: Client Workout View

**Objective:** Implement the ability for clients to view their assigned workout plan and track their progress during a workout in the mobile app.

**Technical Context:**

*   This milestone builds upon the authentication system (Milestone 5).
*   Clients should be able to view their assigned workout plan.
*   Clients should be able to track their progress during a workout.
*   Clients should be able to start a workout and use timers for both the exercises and the rest periods.

**Requirements:**

1.  **Create a "Workout View" screen (`src/screens/WorkoutViewScreen.tsx` in the `mobile` directory).**
    *   Only logged-in clients should be able to access this screen.
    *   Display the workout plan assigned to the client.
    *   Display the name of the workout plan and the exercises.
    *   Display the sets, reps, and rest periods for each exercise.
    *   Display a video/image demonstration of each exercise.
2.  **Implement the logic to retrieve the client's active workout plan:**
    *   Fetch the workout plan assigned to the logged-in user from the backend.
3.  **Implement a "Start Workout" button:**
    *   When clicked, the button should start a timer for the first exercise.
4.  **Implement a timer for each exercise:**
    *   The timer should be visible during the exercise.
    *   The timer should be paused when the user has finished the exercise.
5. **Implement a rest timer:**
    *  When the user finishes an exercise, the timer should start.
    *   The user must be able to pause the rest timer if they need.
6. **Implement a progress tracking system:**
   *   The user should be able to see a checkmark or some visual cue when they complete a set.
   *   The user should be able to track the weight they used in the exercise.
7.   **Implement the navigation logic to go to the next exercise.**
    *   When the user finishes all sets for an exercise, they should be able to go to the next exercise.
8. **Implement the logic to retrieve the videos/images from the backend.**
    *   The app should be able to display the videos/images correctly.

**Instructions for LLM:**

*   Generate the code for the "Workout View" screen, including the display of the workout plan and the start workout button.
*   Implement the logic to retrieve the client's active workout plan.
*   Implement the timers for both exercises and rest periods.
*  Implement the logic for tracking the user progress during the workout.
* Implement the navigation logic to go to the next exercise.
* Implement the logic to retrieve and display the video/image demos.
*   Ensure that the workout view screen is only accessible to logged-in clients.

This milestone enables clients to view their workout plans and track their progress during workouts.