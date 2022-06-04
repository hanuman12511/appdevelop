/* import React, {useState, useEffect} from 'react';
import DrawerStack from './src/navigation/DrawerStack';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/data/store';

import StackNav from './src/navigation/StackNav';

export default App = props => {
  return (
    <>
      <Provider store={store}>
        <StackNav />
      </Provider>
    </>
  );
}; */

import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

import StackNav from './src/navigation/StackNav';

export default App = props => {
  return (
    <>
      <Provider store={store}>
        <StackNav />
      </Provider>
    </>
  );
};

/* 
import React from 'react';
import 'react-native-gesture-handler';

import Routes from './src/src/route/Routes';
export default App = props => {
  return (
    <>
      <Routes />
    </>
  );
};
 */
/*

import React, {Component} from 'react';
import {View, Text, Button, Alert, Platform} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import InternetConnectionAlert from 'react-native-internet-connection-alert';

const App = () => {
  const usenet = useNetInfo();

  const NetStatus = () => {
    if (usenet.isConnected) {
      console.log('online');

      return <View style={{flex: 1, backgroundColor: 'green'}}></View>;
    } else {
      console.log('offine');

      return <View style={{flex: 1, backgroundColor: 'red'}}></View>;
    }
  };
  return (
    <>
      <InternetConnectionAlert
        onChange={connectionState => {
          console.log('Connection State: ', connectionState);
        }}>
        <NetStatus />
      </InternetConnectionAlert>
    </>
  );
};
export default App; */
