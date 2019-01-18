# Razzle Starter Kit


## Prerequisites

1. Node/npm installed
2. Don't forget to `npm install`

## Running the app for dev

1. Run `npm run start`
2. Go to `localhost:3000` in your browser

## How this Repo is Organized

### app Folder

This contains the global component. It is essentially the router + global components like the Header. It also contains CSS.

### pages Folder

This contains any pages/routes for the website. It should ideally be a compositions of components (see component folder).

### component Folder

This is where you will define components for reuse. Try to be as reusable as possible with your code. DRY is the name of the game, Don't Repeat Yourself.

## Merging Process

1. Branch off onto your own branch
2. Lint code by running `npm run lint`
3. Test code by running `npm run test`
4. If both lint and tests pass, open a PR into master
5. Code review

## Useful reading materials

* https://www.smooth-code.com/open-source/loadable-components/docs/getting-started/
* https://reach.tech/router
* https://eslint.org/
* https://jestjs.io/
* https://airbnb.io/enzyme/docs/guides/jest.html
