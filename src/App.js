import React from "react";
import Cadastro from './components/Cadastro';
import {Provider} from 'react-redux';
import store from './store';



export default function App() {


  return (
    <Provider store={store}>
      <div className="container mx-auto teste2">
        <Cadastro></Cadastro>
      </div>
    </Provider>
  );

}

