import renderToDOM from '../../utils/renderToDOM';
import logo from '../../assets/vocabYOUlary_logo.jpg';

const navBar = () => {
  const domString = `
  <nav class="navbar bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src=${logo} alt="VocabYOUlary logo"/>
      </a>
    </div>
  </nav>
`;
  document.getElementById('logo').innerHTML = domString;

  renderToDOM('#navigation', domString);
};

export default navBar;
