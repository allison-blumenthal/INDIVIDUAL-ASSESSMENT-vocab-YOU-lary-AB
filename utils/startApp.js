import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import getVocab from '../api/vocabData';
import { showVocab } from '../pages/vocabCards';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();

  getVocab(user.uid).then((vocab) => showVocab(vocab));
};

export default startApp;
