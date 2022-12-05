# "VocabYOUlary" [![Netlify Status](https://api.netlify.com/api/v1/badges/6ea9bf80-ebe1-4973-868b-4b1bb6002c72/deploy-status)](https://app.netlify.com/sites/blumenthal-vocab-you-lary/deploys)

"VocabYOUlary" is an app for displaying, creating, updating, and deleting a user's personal coding/tech-related vocab cards.

[View App](https://blumenthal-vocab-you-lary.netlify.app/)

## Get Started 
$ git clone git@github.com:allison-blumenthal/INDIVIDUAL-ASSESSMENT-vocab-YOU-lary-AB.git
$ cd INDIVIDUAL-ASSESSMENT-vocab-YOU-lary-AB

## About the User 
- The ideal user for this application is a coding student.
- They are working towards a career in tech, and want to have a place to list important terms they'd like to remember or study.
- This app allows the user to create as many vocab cards as they'd like, sort them by category, edit them, and delete when no longer needed. 

## Features 
- Google authentication allows the user to log into their own personal collection of cards
- When a new vocab term is added, the information is added to the user's database and renders a new card to the DOM
- Filter buttons allow the user to sort by category
- Edit and Delete button allow the user to make changes to their card collection

## Video Walkthrough of APP NAME <!-- A loom link is sufficient -->
https://www.loom.com/share/829b90d831ea441ba2db6bea724af210

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](https://blumenthal-vocab-you-lary.netlify.app/)
- [Wireframe](https://docs.google.com/presentation/d/1d_CY6ux7L26Ft-ef9gs1dnx38CCsWRFtSJTZ1dn3Huk/edit?usp=sharing)
- [ERD] (https://dbdiagram.io/d/63857674c9abfc611175c760) 

## Code Snippet

```
const showVocab = (array) => {
  clearDOM();

  const btnString = '<button type="button" class="btn btn-success create-btn" id="create-vocab-btn">Create Vocab Card</button>';
  renderToDOM('#create-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
        <div class="card" style="width: 18rem;" id="card-style">
          <h5 class="card-header">${item.term}</h5>
          <div class="card-body">
            <h5 class="card-title">${item.category}</h5>
            <p class="card-text">${item.definition}</p>
            <a href="#" class="btn btn-primary card-btn edit" id="edit-vocab-btn--${item.firebaseKey}">Edit</a>
            <a href="#" class="btn btn-danger card-btn delete" id="delete-vocab-btn--${item.firebaseKey}">Delete</a>
          </div>
        </div>
    `;
  });
  renderToDOM('#library', domString);
};
```

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<img width="1148" alt="Screenshot of Cards" src="cardsScreenshot.png">
<img width="1148" alt="Screenshot of Form" src="formScreenshot.png">

## Contributors
- [Allison Blumenthal](https://github.com/allison-blumenthal)
