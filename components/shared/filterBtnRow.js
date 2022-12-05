import renderToDOM from '../../utils/renderToDOM';

const filterBtnRow = () => {
  const domString = `
  <div class="button-container">
    <div class="container" id="btn-row">
      <button class="btn btn-primary filter-btn" id="all-button">All</button>
      <button class="btn btn-primary filter-btn" id="html-button">HTML</button>
      <button class="btn btn-primary filter-btn" id="css-button">CSS</button>
      <button class="btn btn-primary filter-btn" id="js-button">JavaScript</button>
      <button class="btn btn-primary filter-btn" id="tech-button">General Tech</button>  
    </div>
  </div>
`;

  renderToDOM('#filter-container', domString);
};

export default filterBtnRow;
