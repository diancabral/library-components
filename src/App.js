import React, { useState } from 'react';

import './App.css';


import AppInput from './components/input/input';
import AppButton from './components/button/button';

function App() {

  const [var1, setVar1] = useState('');
  const [var2, setVar2] = useState('');
  const [var3, setVar3] = useState(0);

  return (

    <div className="App">

      <div className="Box">

        <h3>Inputs</h3>

        <div className="box__space">
      
          <AppInput label="Label" type="text" value={var1} change={(e) => setVar1(e)} />

        </div>

        <div className="box__space">

          <AppInput label="Label" type="text" error="Campo inválido" value={var2} change={(e) => setVar2(e)} />

        </div>

      </div>      

      <div className="Box">

        <h3>Buttons</h3>

        <div className="box__space">
      
          <AppButton label="Enviar" color="blue" click={() => setVar3(var3 + 1)} />

        </div>

        <div className="box__space">

          <AppButton label="Cancelar" color="red" click={() => setVar3(var3 + 1)} />

        </div>

        { var3 } cliques

      </div>
      
    
    </div>

  );
}

export default App;
