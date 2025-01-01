**--- `milestones/08_client_progress_tracking.md` ---**

## Milestone 8: Client Progress Tracking

**Objective:** Implement the ability for clients to view their workout history and track their progress over time in the mobile app.

**Technical Context:**

*   This milestone builds upon the workout view (Milestone 6) and feedback submission (Milestone 7).
*   Clients should be able to view their workout history and see their progress.
*   Clients should be able to track their weight, reps, sets, and other metrics.
*   The app should display charts and graphs of progress over time.
*   The app should allow the user to compare their progress with previous weeks/months.

**Requirements:**

1.  **Create a "Progress Tracking" screen (`src/screens/ProgressTrackingScreen.tsx` in the `mobile` directory).**
    *   Only logged-in clients should be able to access this screen.
    *   Display the user's workout history.
    *  Display the weight, reps, sets, and other metrics that have been tracked.
    *  Display charts and graphs of progress over time.
    *   Allow the user to compare their progress with previous weeks/months.
2.  **Implement the logic to retrieve the user's workout history from the backend.**
    *   Fetch the workout history for the logged-in user.
3.  **Implement the logic to display the progress data in a clear way.**
    *   Display the progress data in tables or charts.
4.  **Implement the logic to track the user's weight.**
   *    The user should be able to add their weight.
5.  **Implement the logic to compare the progress with previous weeks/months.**
    *   The user should be able to select a period to compare the progress.

**Instructions for LLM:**

*   Generate the code for the "Progress Tracking" screen, including the display of the workout history and progress charts.
*   Implement the logic to retrieve the user's workout history from the backend.
*   Implement the logic to display the progress data in a table and with charts.
*  Implement the logic for the user to add their weight.
*  Implement the logic for the user to compare their progress with previous weeks/months.
*   Ensure that the progress tracking screen is only accessible to logged-in clients.

This milestone enables clients to view their progress over time, which is a key feature for motivation.