**--- `milestones/02_trainer_profile_management.md` ---**

## Milestone 2: Trainer Profile Management

**Objective:** Implement the ability for trainers to create and manage their profiles on the website.

**Technical Context:**

*   This milestone builds upon the authentication system implemented in Milestone 1.
*   We will need to store the profile information in the backend.
*   We will need to provide an interface for the user to update their information.
*   We will need to use an secure method to store the images in the backend.

**Requirements:**

1.  **Create a "Profile" page (`pages/profile/index.tsx` in the `web` directory).**
    *   Only logged-in trainers should be able to access this page.
    *   If the user doesn't have the profile created, the page should display a form to create it.
    *   If the user already has a profile, the page should display the information and a button to edit the information.
2.  **Implement the "Create Profile" form:**
    *   Include fields for basic information, certifications, and areas of expertise (text fields).
    *   Implement basic form validation.
    *   Include error messages in case of invalid data or errors.
3.  **Implement the "Edit Profile" form:**
    *   Pre-populate the form with the current profile information.
    *   Include fields for basic information, certifications, and areas of expertise (text fields).
    *   Implement basic form validation.
    *   Include error messages in case of invalid data or errors.
4.  **Implement the functionality to upload and store a profile image:**
    *   The image should be stored using a secure method.
5.  **Implement the backend logic for creating, retrieving, and updating the profile information:**
    *   Set up the API endpoints for creating, retrieving and updating the user profile.
6.  **Display the profile information in the "Profile" page.**
    *   Display the basic information, certifications, areas of expertise and the profile image.

**Instructions for LLM:**

*   Generate the code for the "Profile" page, including the create and edit forms.
*   Implement the logic for uploading, storing, and displaying the profile image. Use a secure method for storing images.
*   Implement the backend logic to create, retrieve and update the trainer profile information.
*   Ensure that the profile page is only accessible to logged-in trainers.
*   Ensure that the correct information is displayed in the profile page.

This milestone will allow trainers to manage their profiles, which is a key feature for the application.
