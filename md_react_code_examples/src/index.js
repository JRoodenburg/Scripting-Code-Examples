import '../sass/main.scss';
import { render } from 'react-dom';
import React from 'react';
import App from './app';

/*
Dit is ons hoofdbestand. Hier starten we React
<PlannerInput /> is onze hoofdcomponent waar alles binenn gaat vallen
 */

render(<App />, document.querySelector('#app'));