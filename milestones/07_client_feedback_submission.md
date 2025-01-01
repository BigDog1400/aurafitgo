**--- `milestones/07_client_feedback_submission.md` ---**

## Milestone 7: Client Feedback Submission

**Objective:** Implement the ability for clients to provide feedback after completing a workout in the mobile app.

**Technical Context:**

*   This milestone builds upon the workout view (Milestone 6).
*   Clients should be able to provide feedback on their workout session.
*   The feedback should be sent to the backend and be available for the trainers to review.
*   The feedback process should be simple, easy to use and provide useful insights to the trainers.

**Requirements:**

1.  **Create a "Feedback Submission" modal/screen that appears after the workout is finished.**
    *   Only logged-in clients should be able to access this.
    *   The user should be able to submit a text feedback.
    *   The user should be able to select the difficulty of the workout (easy, medium, hard).
    *   The user should be able to select their energy level after the workout (low, medium, high).
    *   The user should be able to rate the mind-muscle connection (low, medium, high).
2.  **Implement the logic to send the feedback to the backend:**
    *   The feedback should be associated with the user and the workout session.
3.  **The feedback should be available to be viewed by the trainer in the website.**
    *  The trainer should be able to see the feedback from all the clients.
4.  **Integrate the AI chat to simplify the feedback submission process.**
     * The user should be able to use the AI chat to provide feedback.

**Instructions for LLM:**

*   Generate the code for the "Feedback Submission" modal/screen, including the input fields and the submit button.
*   Implement the logic to send the feedback to the backend.
*   Implement the integration with the AI chat to submit the feedback.
*   Ensure that the feedback submission is only available after completing a workout.
*   Ensure the feedback is associated with the correct user and workout session.
*  The feedback must be sent to the backend and be available for the trainers to review.

This milestone enables clients to provide feedback after their workout sessions.
