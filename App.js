
import React from 'react';
import { Provider } from 'react-redux';
import { Font } from 'expo';

import Application from './src/components/Application';
import store from './src/redux/configureStore';

export default class App extends React.Component {
  constructor(args) {
    super(args);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      'zag-regular': require('./src/assets/fonts/Zag-Regular.otf'),
      'zag-bold': require('./src/assets/fonts/Zag-Bold.otf'),
      'shadows-into-light-two': require('./src/assets/fonts/ShadowsIntoLightTwo-Regular.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    return loading
      ? null
      : (
        <Provider store={store}>
          <Application />
        </Provider>
      );
  }
}
