# Development Log

## Session 1 — Project Planning

Defined the goal of building a full-stack lion dance booking platform.

Key objectives:

- Allow customers to book lion dance performances
- Provide admin tools to manage bookings
- Demonstrate full-stack engineering skills
- Showcase the ability to design and ship a working product quickly

The project will serve both as a real tool for the lion dance team and as a portfolio project demonstrating full-stack development.

---

## Session 2 — Environment Setup

Installed the required development tools:

- Node.js (LTS version)
- Angular CLI
- Visual Studio Code

Verified the Angular development environment by confirming CLI installation and Node compatibility.

---

## Session 3 — Project Repository Setup

Created the initial project folder structure and connected it to version control.

Steps completed:

- Created project root directory
- Created documentation folder (`docs`)
- Added initial project documentation files
- Created `.gitignore` to protect sensitive files
- Created `.private` folder for local development assets

The `.private` folder is used to store sensitive or non-public assets such as:

- internal notes
- real media files
- experimental data

This folder is excluded from Git using `.gitignore` to ensure privacy and keep the repository clean.

---

## Session 4 — Git Initialization and GitHub Integration

Initialized the project as a Git repository.

Actions completed:

- Ran `git init` to initialize version control
- Added project files to Git tracking
- Created the first commit documenting the initial project structure
- Created a GitHub repository for the project
- Connected the local repository to GitHub
- Pushed the initial commit to the remote repository

The repository now serves as the central source of truth for the project and will track future development progress.

---

## Session 5 — Angular Project Initialization

Initialized the Angular frontend application using Angular CLI.

The Angular application was placed inside a dedicated `frontend` directory to maintain a clean repository structure separating documentation and application code.

Routing support was enabled during initialization.

The application was successfully tested locally using the Angular development server.

---

## Session 6 — Frontend Architecture and Routing Setup

After initializing the Angular application, the initial frontend architecture was established.

The project follows a modular structure separating pages, reusable components, and services to maintain scalability and maintainability.

The following directory structure was implemented:

src/app  
components  
- navbar  
- footer  
- booking-form  
- gallery-grid  

pages  
- home  
- about  
- gallery  
- book-performance  
- admin-dashboard  

services  

app.routes.ts  
app.ts  
app.html  

Design decisions:

- Pages represent full application views.
- Components represent reusable UI elements.
- Services will later manage API communication and business logic.

This separation improves long-term maintainability and allows independent development of UI elements.

---

## Session 7 — Application Routing Implementation

Client-side routing was implemented using Angular's router system.

Routes were defined for the primary application pages:

- Home
- About
- Gallery
- Book Performance
- Admin Dashboard

Each route loads a corresponding page component, allowing the application to behave like a multi-page site while remaining a single-page application (SPA).

Example route configuration:

/ → Home  
/about → About page  
/gallery → Gallery page  
/book → Booking form  
/admin → Admin dashboard  

Routing allows users to navigate between sections without triggering full page reloads.

---

## Session 8 — Global Layout Implementation

A global application layout was implemented to provide consistent navigation across all pages.

The root layout file (`app.html`) now includes:

- Navigation bar
- Router outlet
- Footer

Structure:

Navbar  
Page Content (router outlet)  
Footer  

This ensures navigation and footer elements remain persistent while page content dynamically changes based on the current route.

---

## Session 9 — Navigation Component Development

A reusable navigation component was implemented to allow users to move between application pages.

The navigation bar includes links for:

- Home
- About
- Gallery
- Book Performance

Angular’s `routerLink` directive was used to enable client-side navigation without full page reloads.

This maintains the single-page application behavior while improving the user experience.

---

## Session 10 — Home Page Initial UI

The first user-facing interface element was implemented on the Home page.

A hero section was created to communicate the purpose of the platform and provide a clear call-to-action.

The section includes:

- A headline describing the lion dance performance service
- A supporting description explaining the service value
- A call-to-action button linking users to the booking page

The goal of this section is to quickly communicate the value of the platform and guide users toward submitting a booking request.

---

## Session 11 — Standalone Component Debugging and Routing Fixes

During implementation of navigation between pages, several issues were encountered related to Angular standalone component configuration.

The following fixes were implemented:

- Ensured each page component declared `standalone: true`
- Added required directive imports such as `RouterLink`
- Verified router configuration in `app.routes.ts`
- Confirmed router initialization through `provideRouter(routes)` in `app.config.ts`
- Verified that `<router-outlet>` was correctly placed inside the root layout

After correcting these issues, navigation between pages successfully worked through Angular’s router system.

Users can now move between pages without full page reloads, confirming proper single-page application behavior.

---

## Session 12 — Booking Form Interface Implementation

The first functional user interaction feature was implemented: the booking request form.

The booking form was added to the **Book Performance** page and collects the following information:

- Name
- Phone number
- Event date
- Event type
- Event location
- Additional notes

Angular's template-driven form system was implemented using `FormsModule` and `ngModel` to bind input fields to component state.

When the form is submitted, the booking data is currently logged to the browser console. This confirms that form binding and submission events are working correctly.

This interface will later be connected to a backend API so booking requests can be stored and managed through the admin dashboard.

---

## Session 13 — Development Environment Debugging

While integrating Angular forms, a dependency caching issue occurred within the Angular Vite development server.

The error originated from an outdated dependency pre-bundle inside Angular’s build cache.

The issue was resolved by:

- Stopping the development server
- Removing the `.angular` cache directory
- Restarting the Angular development server

This forced Angular to rebuild its dependency graph and resolved the pre-bundling error.

Documenting this issue helps ensure faster debugging if similar development environment problems occur in the future.