
import 'react-native-gesture-handler';
import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import Reducers from './src/redux/reducers'
import AppMain from './appmain'




const App= () => {
  
    const store=createStore(Reducers)

    return(
      <Provider store={store}>
        <AppMain/>
      </Provider>

    )

};



export default App;
