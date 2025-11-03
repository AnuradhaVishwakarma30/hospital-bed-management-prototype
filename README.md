### Smart Hospital Bed Management System

This is a high-fidelity frontend prototype of a "Smart Hospital Bed Management System." It was built as a portfolio project to demonstrate skills in UI/UX design, frontend development (HTML/CSS/JS), and complex application logic.

This prototype solves the problem of slow, manual bed tracking in hospitals (which often relies on whiteboards and phone calls). It replaces that system with a clean, real-time, digital solution.

## The Solution: 5 User Roles

The core of this project is Role-Based Access Control (RBAC). The system provides 5 unique, secure dashboards, and each staff member only sees what they need for their job.

## 👨‍⚕️ Admin:

Has full control over the system.

1.  Manages all staff accounts (creates logins for doctors, nurses, etc.).
2.  Can add new patients and assign them to available beds.
3.  Can view all dashboards.

## 🩺 Doctor:

1.  Views the main bed dashboard.
2.  Manages patient tasks and can discharge a patient.
3.  Discharging a patient automatically triggers the "cleaning" workflow.

## 👩‍⚕️ Nurse:

1.  Views the main dashboard and a list of tasks assigned by the Doctor.
2.  Can log patient vitals, resolve alerts, and complete tasks.

## 🧹 Cleaner:

1.  Has a very simple "to-do list" dashboard.
2.  Only sees beds that are marked as PENDING_CLEANING.
3.  Can mark a bed as AVAILABLE once it is clean.

## 🚑 Ambulance Driver:

1.  A "view-only" dashboard focused on privacy.
2.  Can see bed counts (e.g., "5 Beds Available") but no patient names or details.
3.  This helps them quickly decide if they should bring a new patient to this hospital.

### Core Workflow: The "Bed Turnover Cycle"

This is the prototype. The entire workflow is automated, removing the need for phone calls.

1. A Doctor discharges a patient.
2. The bed status automatically updates to PENDING_CLEANING.
3. The Cleaner instantly sees this new task appear on their dashboard.
4. The Cleaner cleans the room and marks the bed as AVAILABLE.
5. The Admin, Doctor, and Nurse instantly see the bed is available on their dashboards.
6. The Admin and doctor can now assign a new patient to that bed.

### My Design & Development Process

This project was built in three stages:

## 🎨 Design (Figma):

    I designed the entire project from scratch in Figma.

    This included the initial wireframes for the landing page and the high-fidelity app screens for the phone mockups.

## 💻 Code (HTML/CSS):

    I personally hand-coded the entire responsive landing page using HTML5 and CSS3.

    This was a great way to apply the skills I learned from my Frontend Development course.

## 🧠 Logic (JavaScript + AI):

    I architected the complex 5-role logic.

    The app prototype is powered by JavaScript, simulating all 5 dashboards and the "fake database" (using arrays).

    (Note: AI tools were used as a "coding assistant" to help write and debug the complex JavaScript logic.)

### How to Run This Prototype

This is a frontend-only prototype. No installation is needed!

1. Clone this repository (or download the ZIP file).

2. Open the index.html file (or your main HTML file) in any web browser.

3. Click "Get Started" to go to the login page and explore the different role

### Future Development

To make this a real, shareable application, the next step is to build a secure backend.

1. Backend: Firebase

2. Database: Firestore to manage the beds, users, and patients collections in real-time.

3. Authentication: Firebase Authentication to securely manage logins and passwords for all 5 roles.

4. Security: Firestore Security Rules to enforce the role-based permissions on the server (e.g., to stop a "Cleaner" from accessing patient data).
