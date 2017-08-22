import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import registerServiceWorker from './registerServiceWorker';
import DashApp from './dashApp';

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <DashApp />
  </LocaleProvider>,
  document.getElementById('root'),
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./dashApp.js', () => {
    const NextApp = require('./dashApp').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
registerServiceWorker();
