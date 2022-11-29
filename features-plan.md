Vocab-YOU-lary Project Features

--> Views <--
View 1: Login Screen
- Welcome message to site visiter
- Button to click that brings up Google user authentication

View 2: View All Entries
- Nav bar across top 
  - Logo on top left
  - Create Entry Button that brings up form 
  - Logout button on top right that logs user out and renders login screen
- Category Filter Buttons beneath the navbar - can be hard coded
  - one button per category/language type
- Cards load to the DOM in rows with the following info:
  - Vocab term
  - Category
  - Definition
  - Edit and Delete buttons 
    - Edit button renders create/update form pre-loaded with existing info
    - Delete button deletes entry from DB

View 3: Create/Update Entries Form
- Nav bar is still across top 
- Form with entry fields for the following:
  - Vocab term
  - Definition
  - Category (language/tech) -- type can be hardcoded in a dropdown menu
  - Submit button
  - Time submitted is recorded, but not part of the form - goes to DB
  - UID is automatically created and saved to Firebase


--> Features by Priority <--

1. -- Login page
2. -- Navbar with logo and buttons to stay on DOM
3. -- Cards with Edit/Delete buttons
4. -- Create/Update Form
5. -- Sort buttons


--> Data to save in DB <--

{
  "(firebaseKeyGoesHere)": {
  "term": "",
  "firebaseKey": "",
  "category": "",
  "definition": "",
  "time_submitted": "",
  "uid": ""
  }
}
