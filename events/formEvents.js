import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocabCards';
import timestamp from '../utils/timestamp';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // click event for submitting form for adding vocab card
    if (e.target.id.includes('submit-vocab')) {
      console.warn('clicked submit vocab', e.target.id);

      const payload = {
        term: document.querySelector('#term').value,
        category: document.querySelector('#category').value,
        definition: document.querySelector('#definition').value,
        time_submitted: timestamp,
        uid: user.uid
      };

      console.warn(payload);
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
    }

    // click event for editing a vocab card
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('clicked update vocab', e.target.id);
      console.warn(firebaseKey);

      const payload = {
        term: document.querySelector('#term').value,
        category: document.querySelector('#category').value,
        definition: document.querySelector('#definition').value,
        time_submitted: timestamp,
        uid: user.uid,
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocab(user.uid).then(showVocab);
      });
    }
  });
};

export default formEvents;
