import renderToDOM from '../../utils/renderToDOM';

const domBuilder = () => {
  const domString = `
    <div id="navigation"></div>
    <div id="filter-container"></div>
    <div id="main-container">
      <div id="create-button"></div>
      <div id="form-container"></div>
      <div id="library"></div>
      <div id="view"></div>
    </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
