
import React from 'react';
import { Provider } from 'react-redux';
import { Font } from 'expo';

import Application from './src/components/Application';
import store from './src/redux/configureStore';

import ZagRegular from './src/assets/fonts/Zag-Regular.otf';
import ZagBold from './src/assets/fonts/Zag-Bold.otf';
import ShadowsIntoLightTwoRegular from './src/assets/fonts/ShadowsIntoLightTwo-Regular.ttf';


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
      'zag-regular': ZagRegular,
      'zag-bold': ZagBold,
      'shadows-into-light-two': ShadowsIntoLightTwoRegular,
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
