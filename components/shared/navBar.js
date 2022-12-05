import renderToDOM from '../../utils/renderToDOM';
import logo from '../../assets/vocabYOUlary_logo.jpg';

const navBar = () => {
  const domString = `
  <nav class="navbar bg-light zero">
    <div class="container" id="navbar-style">
      <a class="navbar-brand" href="#">
        <img src=${logo} alt="VocabYOUlary logo" width="200" height="80" id="vocab-logo"/>
      </a>
      <div id="logout-button"></div>
    </div>
  </nav>
`;

  renderToDOM('#navigation', domString);
};

export default navBar;
