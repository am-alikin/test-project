# Test Project

This project serves as a technical test assignment. It contains several bugs and missing behaviors that need to be identified and fixed. Your main objectives are to:
 
- Make the project run.
- Fix bugs related to functionality and rendering.
- Propose enhancements to the existing logic, code, and project (implementation optional, but a detailed description is required). 

> 👉 Clone the repository to your local machine, replace the remote URL, create a new repository on your preferred platform, and push your solution there. Share the link to your completed solution. All your work, findings, and suggestions must be documented in a Markdown file named SOLUTION_REPORT.md

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) installed on your machine.

### Launching the Project

1. Clone the repository
2. `docker compose up`

## Features

### List of Items

- Display a list of items
- "Set Active" button in each card to mark an item as active
- Automatic data refresh every 10 seconds
- Loading indicator shown during initial load or when data is unavailable
- Items are sorted by ID
- Search by ID

### Detail View

- View detailed information about a selected item
- Navigation between list and item detail views
- Items with id % 3 === 0 will return a 403 error intentionally (edge case handling required)

## Notes

- The intentional 403 error is a known case and should not be considered a bug.
- Feel free to comment inline or in a separate markdown file with your suggestions and reasoning.

## Goals of the Assignment

- Problem-solving and debugging skills
- Code clarity and structure
- Understanding of React and frontend best practices
- Ability to propose architectural and UX improvements

## TODO

- use debounce for a list to prevent search spamming
- add padding to list header (solved)
- sort on server without overloading client with large list
- also add pagination with option to show all (users get used to interface and we still have no idea about user behavior without any analytics)
- move query regexp before filter call function to improve performance
- also export button in client/src/pages/components/index.ts to shorter import paths
- remove Component: React.FC<any> - react already know about function components
- hide/disable filter during first load of the list
- save active items after navigation did with context/state manager
- use pass id in subtitle to print formatted text inside subtitle and achieve same behavior as useMemo
- use non any generic type for fetched data. IE. define interface globally ItemType {id, .... } and use it instead any. This helps developers know about data format in returned data and avoid errors when field names or types will change in further versions
- May be it worth to use css modules with one per if the app is going to be scaled
- don't use null for undefined variables. Ut shorter the definition of states and it's a bad habit also
- use AXIOS wrapper or another package to get data and handle a temporary server unavailability during maintenance (reloading, updating)
- don't allow to click on a item which will return 403 error. Show a note or mark item with color if item cannot be viewed.
- use <Route path="/item/:id" ... /> if the app is going to be developed further
- depending on will the app is going to be indexed also add static pages that regenerates them daily
- update npm packages. some of them soon is going to be deprecated
- update node to 24 version
- add package-lock.json in project to match download urls on both developer and server
- set target to ES2015 in tsconfig to support more browsers (if needed)
- 


