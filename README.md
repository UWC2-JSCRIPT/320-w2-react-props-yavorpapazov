# Week 2 Assignment

## Getting Started

1. Clone the repository to your local computer.
2. Navigate to the repository in your terminal window.
3. Setup your application
   ```bash
   # Make sure you run this command inside the week2-assignment folder. Check via `pwd`
   # Not doing so may cause the create-react-app command to fail
   pwd
   # /path/to/week2-assignment
   create-react-app blog-homepage
   ```
4. Ensure you can run your dev server
   ```bash
   cd blog-homepage
   npm start
   ```

## Overview

For this assignment, you'll be creating a blog UI using React. We're going to focus on creating the UI elements for now, but the "Bonus" section has additional tasks you can try out to add some interactive elements.

### Requirements

Recreate the provided screenshot from [Medium](https://medium.com).

![Medium screenshot](medium.jpeg)

Ensure that your UI meets the following criteria:

* Code should render the provided data using React components.
    * Copy the JSON files in the `_data` folder into your project folder. Import them into your `App.js` component like so (path may vary):
      ```js
      import missedArticles from './missed-articles.json';
      ```
* Code should iterate over each array of articles using a loop or iterator, such as `map`.
* Code should pass each article to a React component as a prop
    * This can be done as a whole object (e.g. `<Article article={article}>`) or individually (e.g. `<Article title={article.title} image={article.image}>`)
* Code should render the following data for each article on the page:
    * "For you" section
    * "In case you missed it" section
    * Articles. Each article should have:
        * Image
        * Title
        * Description
        * Author picture/name
        * Article date
        * Article length
        * Bookmark
        * "Audio available"
        * "Member preview"
        * The green author outline (present if the author is a Medium member) is optional
* Code should have React components that...
    * Are modular/reusable.
        * At the very minimum, this means the "Article" should be a component.
        * Optionally, subdivide the Article into more components.
        * It is up to you whether to create a single "Article" for both sections, or two separate components for each section.
            * Hint: The same "Article" component can be used in both sections by providing different CSS classes.
    * Use the appropriate loops/conditionals to map and display components.
    * Use propTypes to define all props.
* Looks "close enough" to the original screenshot.
    * Focus more on the React components first, then follow up with styling. We're really just ensuring that you know how to define and import a CSS file for this assignment.

## Submission

1. In order for a valid submission, your app should run and display a UI when running `npm start`. Please be mindful of any lint or console errors and clean those up before submission.
2. Create a pull request to this repository. There will be no CI.
3. Create a zip file of this repository for submission to Canvas. 

## Bonus

* Make each card clickable. Upon clicking a card title/description/image, the browser should open the link for the article.
* Make each bookmark component clickable. Upon clicking a bookmark, the bookmark icon should turn green. Clicking the bookmark again will reset to the original state (no color). It's recommended to use React state to implement this behavior.
