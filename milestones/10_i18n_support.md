**--- `milestones/10_i18n_support.md` ---**

## Milestone 10: i18n Support

**Objective:** Implement internationalization (i18n) support for both the trainer website and the client mobile app, starting with English and Spanish.

**Technical Context:**

*   This milestone focuses on making the app and website available in multiple languages.
*   We will start with English and Spanish, but the architecture should be scalable to support more languages in the future.
*   We'll need to manage translations for all user-facing text, labels, and messages.
*   We will use a library like i18next to manage the translations.

**Requirements:**

1.  **Set up i18n library (e.g., i18next) in the trainer website (Next.js).**
    *   Implement the logic to detect the user's language preference.
    *   Implement the logic to switch between languages.
    *   Create the necessary files for English and Spanish translations.
    *   Translate all user-facing text, labels, and messages.
2.  **Set up i18n library (e.g., i18next) in the client mobile app (React Native/Expo).**
    *   Implement the logic to detect the user's language preference.
    *   Implement the logic to switch between languages.
    *   Create the necessary files for English and Spanish translations.
    *   Translate all user-facing text, labels, and messages.
3.  **Ensure that all text in the app and website is translatable.**
    *   Use the i18n library to display all text.
    *   Ensure that all dynamic text is also translatable.
4.  **Provide a way for the user to change the language.**
    *   Add a language selector in the settings of both the app and the website.
5.  **Ensure that the date and number formats are also localized.**

**Instructions for LLM:**

*   Implement the i18n setup for both the trainer website and the client mobile app, using a library like i18next.
*   Implement the logic to detect the user's language preference and to switch between languages.
*   Create the necessary files for English and Spanish translations.
*   Translate all user-facing text, labels, and messages.
*   Ensure that the date and number formats are also localized.
*  Add the language selector in the settings of the app and the website.

This milestone completes the i18n implementation, making the app and website available to a wider audience.