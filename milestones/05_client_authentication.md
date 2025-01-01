**--- `milestones/05_client_authentication.md` ---**

## Milestone 5: Client Authentication

**Objective:** Implement a secure authentication system for clients to access the mobile app.

**Technical Context:**

*   The client mobile app is built with React Native (Expo).
*   We'll use a secure authentication method (e.g., email/password, social login).
*   The authentication state will be managed in a way that's easily accessible throughout the application.
*   We should use a secure way to save the credentials ( we don't want to store plain passwords ).
*   The authentication must persist between sessions.
*   We need to implement the logic to retrieve the data of the logged-in user ( name, image, etc ).
*  The trainers must be able to create users, and the users must be able to log in.

**Requirements:**

1.  **Create a "Login" screen (`src/screens/LoginScreen.tsx` in the `mobile` directory).**
    *   Include fields for email and password.
    *   Implement basic form validation.
    *   Include error messages in case of invalid credentials or errors.
2.  **Create a "Signup" screen (`src/screens/SignupScreen.tsx` in the `mobile` directory).**
    *   Include fields for email and password, and a name.
    *   Implement basic form validation.
    *   Include error messages in case of invalid credentials or errors.
    *  The user should be able to use the signup functionality if a trainer created an account for them.
3.  **Implement the backend logic for user authentication and registration:**
    *   Set up a secure way to store user credentials ( hashing passwords ).
    *   Implement the API endpoints for authentication and registration.
4.  **Implement a session management system to keep clients logged in.**
    *   Implement the logic to persist the user session through page reloads/close the app.
5.  **Implement a "Logout" button/functionality in the settings of the app.**
    *   When the user clicks the "logout" button, the session must be destroyed and the user must be redirected to the login screen.
6.  **Restrict access to protected routes:**
    *   If the user is not logged in, they should be redirected to the login page.
7.  **Create a general layout component (`src/components/Layout.tsx` in the `mobile` directory) that includes the logout button.**
8.  **Display the username on the header when the user is logged in.**
9. **Implement the logic to retrieve the profile data of the logged in user and display the information in the profile screen.**

**Instructions for LLM:**

*   Generate the code for the login and signup screens, including form validation and error handling.
*   Implement the logic for secure authentication and session management. Use a library like Firebase Auth or similar.
*   Ensure that the authentication process is secure and that user credentials are not stored in plain text.
*   Create a general layout component that includes a logout button.
*   Ensure that the protected routes are correctly implemented.
*   Implement the logic to retrieve the user profile information.

This milestone focuses on the fundamental authentication system for the client mobile app. It provides a solid foundation for all subsequent milestones related to the mobile app.