import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocabCards';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();

  getVocab(user.uid).then((vocab) => showVocab(vocab));
};

export default startApp;
