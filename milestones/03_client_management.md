**--- `milestones/03_client_management.md` ---**

## Milestone 3: Client Management

**Objective:** Implement the ability for trainers to manage their clients on the website.

**Technical Context:**

*   This milestone builds upon the authentication system (Milestone 1) and trainer profiles (Milestone 2).
*   Trainers should be able to add, view, edit, and tag clients.
*   We need to establish a clear relationship between trainers and their clients in the backend.

**Requirements:**

1.  **Create a "Clients" page (`pages/clients/index.tsx` in the `web` directory).**
    *   Only logged-in trainers should be able to access this page.
    *   Display a list of all the trainer's clients.
    *   Each client should display basic information (name, email, etc).
    *   Provide a button/link to view the client's detailed profile.
2.  **Implement a "Add Client" modal:**
    *   Include fields for client information (name, email, etc).
    *   Implement basic form validation.
    *    The trainer should be able to add the client only if the client doesn't exist in the database.
    *   Include error messages in case of invalid data or errors.
3.  **Implement the client detailed profile page (`pages/clients/[id].tsx`):**
    *   Only logged-in trainers should be able to access this page.
    *   The page should display the client's information.
    *   The page should display a button to edit the client information.
4. **Implement a "Edit Client" modal:**
    *   Pre-populate the modal with the current client information.
    *   Include fields for the client information.
    *   Implement basic form validation.
    *   Include error messages in case of invalid data or errors.
5.  **Implement the backend logic for adding, retrieving, and updating client information:**
    *   Set up the API endpoints for adding, retrieving and updating the client profiles.
    *   Establish a clear relationship between the trainer and their clients.
6.  **Implement the ability to tag the clients.**
    *  The trainer should be able to add tags to their clients.
    *  The trainer should be able to filter the clients by tag.
7.  **The trainer should be able to search the clients by name.**

**Instructions for LLM:**

*   Generate the code for the "Clients" page, including the client list and "Add Client" modal.
*   Implement the logic to add, retrieve, and update client information, and display it correctly.
*   Implement the client profile page and "Edit Client" modal.
*   Implement the tagging functionality.
* Implement the search by name.
*   Ensure that the client pages are only accessible to logged-in trainers.
*   Ensure that the trainer can only see and edit their own clients.

This milestone enables trainers to manage their clients, which is essential for using the platform.