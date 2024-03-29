import React, {useState, createContext} from 'react';
import { UserAndApplication } from './components/UserAndApplicationSelector/UserAndApplication';
import { UserAndApplicationSelector } from './components/UserAndApplicationSelector/UserAndApplicationSelector';
import { Reducer } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Routing';
import Navigation from './components/Navigation/Navigation';

export const UserAndApplicationContext = createContext<UserAndApplication>({} as UserAndApplication);

function App() {

  // const [userAndApplication, setUserAndApplication] = useState<UserAndApplication>();
  

  // type StoreType = {
  //   lista1: string[],
  //   lista2: string[]
  // }

  // type Action = {
  //   whatToDo: 'ADD' | 'REMOVE';
  //   param: string
  // }

  // const initialStoreState:StoreType = {
  //   lista1: ['pierwszy', 'drugi', 'trzeci'],
  //   lista2: ['piaty', 'szosty', 'siodmy']
  // }

  // // firstReducer jest funkcją ktora ma dwa parametry (pierwszy jest z wartościa domyślną)
  // const moviesReducer:Reducer<StoreType> = (state:StoreType = initialStoreState, action): StoreType => {
  //   switch (action.whatToDo) {

  //   }
  //   return state;
  // };

  // tego można użyc do tworzenia root reducera
  // const rootReducer = {
  //   movies: moviesReducer
  // }

  //const store = createStore(reducer);
  // const store = configureStore({ reducer: { movies: moviesReducer }})

  return (
    <div className="App">
      <div className="container">

      {/* <UserAndApplicationContext.Provider value={{} as UserAndApplication}> */}
        <BrowserRouter>
          <Navigation />
          <Routing />
          {/* <Provider store={store}> */}
          {/* <UserAndApplicationSelector /> */}
          {/* </Provider>   */}
        </BrowserRouter>
      </div>
      {/* </UserAndApplicationContext.Provider> */}
    </div>
  );
}

export default App;
