# Next.js Dynamic Routing, API Routes, Data Fetching Tasks

## Topic Focus

-   Dynamic Routes
-   Route Params
-   API Routes
-   Fetching Data
-   Using Mock Data Properly

------------------------------------------------------------------------

## Basic Tasks

1.  Create a students page and show a list of students.
2.  Create a dynamic route `/students/[id]`.
3.  Clicking on one student should open their detail page.
4.  Show student name and ID on detail page.
5.  Add a back button to return to list.

------------------------------------------------------------------------

## Intermediate Tasks

1.  Create an API route that returns a list of interns in JSON.
2.  Fetch that data and display it in a page.
3.  Create another API route for courses.
4.  Fetch course data and show it in cards.
5.  Handle loading state while data is being displayed.

------------------------------------------------------------------------

## Advanced Tasks

1.  Create a dynamic route for `/courses/[id]`.
2.  Fetch course details based on selected course ID.
3.  Show error message if course is not found.
4.  Add filtering UI for course level:
    -   Beginner
    -   Intermediate
    -   Advanced
5.  Build a page that fetches tasks from API and groups them by status.

------------------------------------------------------------------------

## Folder Structure

    app/
      students/page.js
      students/[id]/page.js
      courses/page.js
      courses/[id]/page.js
      tasks/page.js
    api/
      interns/route.js
      courses/route.js

------------------------------------------------------------------------

## Notes

-   Use Next.js App Router
-   Use `fetch()` for API calls
-   Handle loading and error states properly
-   Keep components clean and reusable
