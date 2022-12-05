import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginPage = () => {
  const domString = `
    <div class="login-page">
      <h2>Welcome to</h2>
      <h1>VocabYOUlary!</h1>
      <h5>Your very own vocab study site.</h5>
      <button id="google-auth" class="btn btn-danger">LOGIN</button>
    </div>`;

  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginPage;
