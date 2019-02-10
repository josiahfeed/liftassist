import React from 'react';
import { store } from './src/store'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import Stack from './src/navigation/Stack'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <Stack />
        </View>
      </Provider>
    );
  }
}
