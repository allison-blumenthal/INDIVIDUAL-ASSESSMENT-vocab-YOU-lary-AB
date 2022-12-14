import clearDOM from '../../utils/clearDOM';
import renderToDOM from '../../utils/renderToDOM';

// form for create or edit vocab card
const addVocabForm = (obj = {}) => {
  clearDOM();
  const domString = `
  <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="form-floating">
    <div class="form-group">
      <label for="term">Vocab Term</label>
      <input type="text" class="form-control" id="term" aria-describedby="vocabTerm"  placeholder="Enter Vocab Term" value="${obj.term || ''}" required>
    </div>

    <div class="form-group">
      <label for="category">Tech/Language Category</label>
      <select id="category" name="vocabCategory" value="${obj.category || ''}" required>
        <option value="HTML" ${obj.category === 'HTML' ? 'selected' : ''}>HTML</option>
        <option value="CSS" ${obj.category === 'CSS' ? 'selected' : ''}>CSS</option>
        <option value="JavaScript" ${obj.category === 'JavaScript' ? 'selected' : ''}>JavaScript</option>
        <option value="General Tech" ${obj.category === 'General Tech' ? 'selected' : ''}>General Tech</option>
      </select>
    </div>

    <div class="form-group">
      <label for="definition">Vocab Definition</label>
      <input type="text" class="form-control" id="definition" aria-describedby="vocabDefinition"  placeholder="Enter Vocab Definition" value="${obj.definition || ''}" required>
    </div>
    <button type="submit" class="btn btn-primary submit">Submit Vocab
    </button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
