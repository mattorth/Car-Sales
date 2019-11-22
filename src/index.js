import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from "./reducers/reducer";

import 'bulma/css/bulma.css';
import './styles.scss';

import { createStore } from "redux";
import { Provider } from "react-redux";

// function reducer() {
//     return {
//         additionalPrice: 0,
//         car: {
//           price: 26395,
//           name: '2019 Ford Mustang',
//           image:
//             'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
//           features: []
//         },
//         additionalFeatures: [
//           { id: 1, name: 'V-6 engine', price: 1500 },
//           { id: 2, name: 'Racing detail package', price: 1500 },
//           { id: 3, name: 'Premium sound system', price: 500 },
//           { id: 4, name: 'Rear spoiler', price: 250 }
//         ]
//       };
// }

const applicationStore = createStore(reducer);



const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={applicationStore}>
        <App />
    </Provider>,
    rootElement);
