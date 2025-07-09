
## Production

Access a demo of this app at: https://leonardo-app-6ewz.vercel.app/.

## Getting Started

First, run the development server:

```bash
# use latest node version
nvm use node
# install dependencies
npm install
# run the app
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


- [x] Please document your code appropriately.
- [x] Set up a NextJS project using the App router with TypeScript.
- [x] Ensure your project is set up with git.
- [x] Use the ChakraUI component library for UI elements and styling.
- [x] Ensure your product is responsive for mobile and desktop.
- [x] Add a footer to your site that displays the challenge version.
- [x] Have a blocking element (page/modal / etc) that prevents access to all other pages
and data:
a. On this blocking element, get a username and job title from the user.
b. Save the user’s username and job title information in a way you best see fit
so the data persists between reloads.
i. Once the username and job title information has been entered, a user
must be able to view this information in full.
ii. A user must be able to change this information after submitting it.

- [x] Use the Apollo client to query a public GraphQL API.
a. Ensure that you pick a GraphQL API and data structure that provides images.
b. Ensure the data and images are displayed.
c. Ensure this data is not retrieved until the user has entered their username
and job title information.

- [x] Display the GraphQL API data as a paginated list of items on an “Information Page”.
- [x] A user must be able to directly link (via URL) to a specific page of the paginated data.
- [x] When an item is clicked on the “Information Page”, it must open a modal that
displays the information about that item.
- [x] Deploy on Vercel free tier.


## Dev considerations
- A11y features: pagination, modal, title, focus etc.
- Responsiveness: breakpoint used `48rem`. The app should be responsive.
- TODO: unit test, snapshot test