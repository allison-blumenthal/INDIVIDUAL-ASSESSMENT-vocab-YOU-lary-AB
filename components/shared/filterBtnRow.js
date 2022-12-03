import renderToDOM from '../../utils/renderToDOM';

const filterBtnRow = () => {
  const domString = `
  <div class="button-container">
    <div class="container">
      <button class="btn btn-primary" id="html-button">HTML</button>
      <button class="btn btn-primary" id="css-button">CSS</button>
      <button class="btn btn-primary" id="js-button">JavaScript</button>
      <button class="btn btn-primary" id="tech-button">General Tech</button>  
    </div>
  </div>
`;

  renderToDOM('#filter-container', domString);
};

export default filterBtnRow;
