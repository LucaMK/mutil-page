import React, {PureComponent} from 'react';
import {withRouter} from 'react-router';
import {Route} from 'react-router-dom';

export default withRouter(class RouterFilter extends PureComponent {
	render(){
		const {location, config} = this.props;
		const {pathname} = location;
		const targetRouterConfig = config.find(val => val.path === pathname);
		let {component} =targetRouterConfig;
		return <Route exact path={pathname} component={component}></Route>
	}
})