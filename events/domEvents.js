import { getVocab, deleteVocab, getSingleVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocab } from '../pages/vocabCards';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
  // click event for deleting a vocab card
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Delete this card?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      }
    }
    // click event for showing form for adding vocab card
    if (e.target.id.includes('create-vocab-btn')) {
      addVocabForm({}, user.uid);
    }
    // click event for editing a vocab card
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj, user.uid));
    }
  });
};

export default domEvents;
