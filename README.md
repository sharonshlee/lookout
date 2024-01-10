# LOOKOUT

A full-stack web application serves as a seamless bridge between job seekers and referrers, facilitating connections within the professional landscape.

Through a secure authentication system, users can create and manage their profiles, showcasing their expertise and preferences.

Job seekers gain access to a comprehensive listing of opportunities, equipped with robust search functionalities tailored to their preferences.

Referrers, empowered by the platform, can seamlessly refer candidates to specific job listings, fostering a collaborative environment.

Communication channels enable direct interactions between users, ensuring a transparent and efficient exchange of information regarding job applications and opportunities.

The application, continually evolving, aims to streamline the job-seeking process while fostering meaningful connections within the professional community.

### Completion Status:

-   In progress

### User Authentication and Authorization:

-   Implement a secure user authentication system allowing job seekers and referrers to register, log in, and manage their profiles.
-   Use authentication middleware to control access to certain features or data based on user roles (job seekers, referrers, admins).

### Job Listings and Search Functionality:

-   Develop a database schema to store job listings with details like job title, description, requirements, and company information.
-   Implement a search feature allowing job seekers to filter and find relevant job postings based on criteria like location, industry, or job type.

### Profile Management:

-   Enable users (job seekers and referrers) to create and manage their profiles, including personal information, work experience, skills, and preferences.
-   Implement functionalities for uploading resumes, portfolios, or additional documents relevant to job applications.

### Referral System:

-   Create a mechanism for referrers to refer job seekers to specific job listings within the platform.
-   Track and manage referrals, providing notifications and updates to referrers and job seekers on the status of their referrals.

### Communication and Notifications:

-   Implement a messaging system to facilitate communication between job seekers and referrers, allowing them to discuss job opportunities or application progress.
-   Set up notification systems to alert users about new job listings, application status changes, or messages received.

### Review and Feedback:

-   Develop a review and rating system where job seekers can rate referrers based on their experience with the referral process, and vice versa.
-   Display these ratings and reviews to help users make informed decisions about referrals.

### Technologies and Tools:

-   **Frontend**: HTML5, CSS3, JavaScript (Next.js)

-   **Backend**: Node.js (to be converted to Typescript)

-   **Database**: DynamoDB

-   **Testing**: Jest (unit), Supertest (integration), Cypress (end-to-end)

-   **Authentication**: JWT (JSON Web Tokens), OAuth, Auth0 (TBD)

-   **Version Control**: Git, Github

-   **Deployment**: Docker, AWS (Amplify, Cognito, API Gateway, Lambda, DynamoDB)

## User Interface

![Alt text](public/images/lookout.png)
