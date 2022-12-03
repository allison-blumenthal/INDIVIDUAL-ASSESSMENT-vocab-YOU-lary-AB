import {
  getHTMLVocab, getCSSVocab, getJSVocab, getTechVocab
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
    console.warn('clicked general tech button');
    getTechVocab(user.uid).then(showVocab);
  });
};

export default filterBtnEvents;
