**--- `milestones/01_trainer_authentication.md` ---**

## Milestone 1: Trainer Authentication

**Objective:** Implement a secure authentication system for trainers to access the website.

**Technical Context:**

*   The trainer website is built with Next.js.
*   We'll use a secure authentication method (e.g., email/password with a library like NextAuth.js).
*   The authentication state will be managed in a way that's easily accessible throughout the application.
*   We should use a secure way to save the credentials ( we don't want to store plain passwords ).
*   The authentication must persist between sessions.

**Requirements:**

1.  **Create a "Login" page (`pages/auth/login.tsx` in the `web` directory).**
    *   Include fields for email and password.
    *   Implement basic form validation.
    *   Include error messages in case of invalid credentials or errors.
2.  **Create a "Signup" page (`pages/auth/signup.tsx` in the `web` directory).**
    *   Include fields for email and password, and a name.
    *   Implement basic form validation.
    *   Include error messages in case of invalid credentials or errors.
3.  **Implement the backend logic for user authentication and registration:**
    *   Set up a secure way to store user credentials ( hashing passwords ).
    *   Implement the API endpoints for authentication and registration.
4.  **Implement a session management system to keep trainers logged in.**
    *   Implement the logic to persist the user session through page reloads/close the browser.
5.  **Implement a "Logout" button/functionality on the main layout of the website.**
    *   When the user clicks the "logout" button, the session must be destroyed and the user must be redirected to the login screen.
6.  **Restrict access to protected routes:**
    *   If the user is not logged in, they should be redirected to the login page.
7.  **Create a general layout component (`components/Layout.tsx` in the `web` directory) that includes the logout button.**
8. **Display the username on the header when the user is logged in.**

**Instructions for LLM:**

*   Generate the code for the login and signup pages, including form validation and error handling.
*   Implement the logic for secure authentication and session management. Use NextAuth.js or a similar library.
*   Ensure that the authentication process is secure and that user credentials are not stored in plain text.
*   Create a general layout component that includes a logout button.
*   Ensure that the protected routes are correctly implemented.

This milestone focuses on the fundamental authentication system for the trainer website. It provides a solid foundation for all subsequent milestones.