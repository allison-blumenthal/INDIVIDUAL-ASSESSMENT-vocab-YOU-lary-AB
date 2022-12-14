import {
  getHTMLVocab, getCSSVocab, getJSVocab, getTechVocab, getVocab
} from '../api/vocabData';
import { showVocab } from '../pages/vocabCards';

const filterBtnEvents = (user) => {
  document.querySelector('#html-button').addEventListener('click', () => {
    getHTMLVocab(user.uid).then(showVocab);
  });

  document.querySelector('#css-button').addEventListener('click', () => {
    getCSSVocab(user.uid).then(showVocab);
  });

  document.querySelector('#js-button').addEventListener('click', () => {
    getJSVocab(user.uid).then(showVocab);
  });

  document.querySelector('#tech-button').addEventListener('click', () => {
    getTechVocab(user.uid).then(showVocab);
  });

  document.querySelector('#all-button').addEventListener('click', () => {
    getVocab(user.uid).then(showVocab);
  });
};

export default filterBtnEvents;
