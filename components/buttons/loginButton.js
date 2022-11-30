import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginPage = () => {
  const domString = `
    <h1>Welcome to VocabYOUlary!</h1>
    <h5>Where YOU make the vocab that counts.</h5>
    <button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>`;

  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginPage;
