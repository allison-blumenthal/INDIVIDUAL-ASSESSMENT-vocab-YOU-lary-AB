import renderToDOM from '../../utils/renderToDOM';
import logo from '../../assets/vocabYOUlary_logo.jpg';

const navBar = () => {
  const domString = `
  <nav class="navbar bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src=${logo} alt="VocabYOUlary logo" width="150" height="50"/>
      </a>
      <button type="button" class="btn btn-success">Create Entry</button>
      <div id="logout-button"></div>
    </div>
  </nav>
`;

  renderToDOM('#navigation', domString);
};

export default navBar;
