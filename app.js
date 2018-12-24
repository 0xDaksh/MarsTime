import React from 'react';
import { render } from 'react-dom';
import Head from './components/head';
import Clock from './components/clock';

const App = () => {
  return (
    <div>
      <Head />
      <Clock />
    </div>
  )
}

render(<App />, document.querySelector("#app"))
