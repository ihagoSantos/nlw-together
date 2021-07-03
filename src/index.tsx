import React from 'react';
import ReactDOM from 'react-dom'; // Document Object Model
import App from './App';

import './services/firebase';


/**
 * COMPONENTS
 * 
 * é uma função que retorna um HTML
 * 
 * HTML dentro do JS => JSX
 * HTML dentro do TS => TSX
 */
/**
 * PROPRIEDADES
 * 
 * São informações que é passado em um compontent para que ele se comporte
 * de uma determinada maneira (parecido com os atributos do html)
 */

/**
 * ESTADO
 * 
 * Informação mantida por um component no react que pode ser alterado pelo usuário
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
