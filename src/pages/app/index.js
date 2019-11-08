import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import routerConfig from '../../router';
import * as serviceWorker from '../../serviceWorker';
import {Router, Switch} from 'react-router-dom';
import history from '../../plugin/history'
import RenderRouterMap from '../../router/renderRouterMaps'

// ReactDOM.render(
// 	<Router history={history}>
// 		<Switch>
// 			<RenderRouterMap config={routerConfig}></RenderRouterMap>
// 		</Switch>
// 	</Router>
// 	, document.getElementById('root'));

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
