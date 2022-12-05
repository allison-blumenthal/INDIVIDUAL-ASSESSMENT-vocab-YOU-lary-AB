import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const emptyVocab = () => {
  const domString = '<h1>No Vocab Cards</h1>';
  renderToDOM('#library', domString);
};

const showVocab = (array) => {
  clearDOM();

  const btnString = '<button type="button" class="btn btn-success" id="create-vocab-btn">Create Vocab Card</button>';
  renderToDOM('#create-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card" id="card-style">
        <h5 class="card-header">${item.term}</h5>
        <div class="card-body">
          <h5 class="card-title">${item.category}</h5>
          <p class="card-text">${item.definition}</p>
          <a href="#" class="btn btn-primary" id="edit-vocab-btn--${item.firebaseKey}">Edit</a>
          <a href="#" class="btn btn-danger" id="delete-vocab-btn--${item.firebaseKey}">Delete</a>
        </div>
      </div>
    `;
  });
  renderToDOM('#library', domString);
};

export { showVocab, emptyVocab };
