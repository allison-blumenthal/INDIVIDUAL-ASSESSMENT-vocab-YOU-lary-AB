import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocabCards';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import filterBtnEvents from '../events/filterBtnEvents';
import filterBtnRow from '../components/shared/filterBtnRow';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  filterBtnRow();
  filterBtnEvents(user);
  logoutButton();

  getVocab(user.uid).then((vocab) => showVocab(vocab));
};

export default startApp;
