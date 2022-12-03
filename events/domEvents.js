import { getVocab, deleteVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocabCards';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) =>
  {
    // click event for deleting a vocab card
    if (e.target.id.includes('delete-vocab')) {
      if (window.confirm('Delete this card?')) {
        console.warn('clicked delete card', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      }
    }
  });
};

export default domEvents;
