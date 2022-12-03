import clearDOM from '../../utils/clearDOM';
import renderToDOM from '../../utils/renderToDOM';

// form for create or edit vocab card
const addVocabForm = (obj = {}) => {
  clearDOM();
  const domString = `
  <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="form-floating">
    <div class="form-group">
      <input type="text" class="form-control" id="term" aria-describedby="vocabTerm"  placeholder="Enter Vocab Term" value="${obj.term || ''}" required>
      <label for="term">Vocab Term</label>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" id="category" aria-describedby="vocabCategory"  placeholder="Choose Vocab Category" value="${obj.category || ''}" required>
      <label for="category">Vocab Category</label>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" id="definition" aria-describedby="vocabDefinition"  placeholder="Enter Vocab Definition" value="${obj.definition || ''}" required>
      <label for="definition">Vocab Definition</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit Vocab
    </button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
