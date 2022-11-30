import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <h1>Welcome to Vocab-YOU-lary!</h1>
  <h5>Where YOU make the vocab that counts.</h5>
  `;

  ViewDirectorBasedOnUserAuthStatus();
};

init();
