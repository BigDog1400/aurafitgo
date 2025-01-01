**--- `milestones/04_workout_plan_creation.md` ---**

## Milestone 4: Workout Plan Creation

**Objective:** Implement the ability for trainers to create and manage workout plans for their clients on the website. Trainers will have a library of workout plans that they can use as a starting point, and each client will have only one active workout plan assigned at a time.

**Technical Context:**

*   This milestone builds upon the authentication system (Milestone 1), trainer profiles (Milestone 2), and client management (Milestone 3).
*   Trainers should be able to create, save, and assign workout plans to their clients.
*   Trainers should have a "library" of workout plans that can be reused.
*   We need to integrate an exercise database and an AI-powered suggestion tool.
*   We also need to allow the trainers to create their own custom exercises.

**Requirements:**

1.  **Create a "Workout Plans" page (`pages/workout-plans/index.tsx` in the `web` directory).**
    *   Only logged-in trainers should be able to access this page.
    *   Display a list of all workout plans created by the trainer ( their "library" ).
    *   Each workout plan should have a name, and a button to view and edit.
2.  **Implement a "Create Workout Plan" page (`pages/workout-plans/create.tsx` in the `web` directory).**
    *   Only logged-in trainers should be able to access this page.
    *   The page should have a form to create the workout plan.
    *   The trainer should be able to add a name for the workout plan.
    *   The trainer should be able to select the client that the workout plan will be assigned to.
    *   The trainer should be able to add exercises to the workout plan.
    *   The trainer should be able to set the number of sets, reps, and rest time for each exercise.
    *   The trainer should be able to use the AI chat to get exercise suggestions, and adjust the plan accordingly.
    *   The trainer should be able to save the workout plan to their library, to reuse it later.
3. **Implement a "View/Edit Workout Plan" page (`pages/workout-plans/[id].tsx` in the `web` directory).**
     *   Only logged-in trainers should be able to access this page.
     *  The page should display all the information of the workout plan.
     *   The page should have a button to edit the plan.
4.  **Implement the integration with an exercise database:**
    *   The trainer should be able to search for exercises by name and/or muscle group.
    *   The trainer should be able to see the name and a video/image demonstration of the exercise.
5. **Implement the ability for the trainers to create custom exercises.**
   *  The trainer should be able to add a name, a video/image demonstration of the exercise.
   *   The trainer should be able to use the custom exercises when creating a workout plan.
6.  **Implement the AI-powered suggestion tool for exercises:**
    *   The AI chat should be able to suggest exercises based on the client's goals, available equipment, and workout history.
    *   The AI should be able to suggest a good workout plan based on the needs of the client.
7.  **Implement the backend logic for creating, retrieving, updating and deleting workout plans.**
  *   Create the API endpoints to manage the workout plans.
8.  **Implement the logic to assign the workout plans to the clients.**
    *   A client should have only one active workout plan.
    *   The trainer should be able to assign a workout plan from their "library" to a client.

**Instructions for LLM:**

*   Generate the code for the "Workout Plans" page, including the workout plan list.
*   Implement the logic to create, view, edit, and assign workout plans.
*   Implement the integration with the exercise database.
*   Implement the custom exercises feature.
*   Implement the AI-powered suggestion tool using the AI chat.
*   Ensure that the workout plan pages are only accessible to logged-in trainers.
*   Ensure that the trainer can save the workout plans to their library, and reuse them later for different clients.

This milestone enables trainers to create workout plans for their clients, using their own library, which is a core feature of our application.
