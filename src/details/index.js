import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import DetailsContainer from './components/DetailsContainer';

ReactDOM.render(
  <AppContainer>
    <DetailsContainer />
  </AppContainer>,
  document.getElementById('approot')
);

if (module.hot) {
  module.hot.accept(['./components/MainContainer', './components/Slider'], () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextDetailsContainer = require('./components/DetailsContainer').default;
    ReactDOM.render(
      <AppContainer>
        <NextDetailsContainer />
      </AppContainer>,
      document.getElementById('approot')
    );
  });
}