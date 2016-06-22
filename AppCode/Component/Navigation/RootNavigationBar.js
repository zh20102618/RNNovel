/**
 * Created by zhanghan on 16/6/22.
 */

'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	NavigatorIOS
} from 'react-native';

import RootTabBar from '../TabBar/RootTabBar';

class RootNavigationBar extends Component {
	render() {
		return (
			<NavigatorIOS
				style={styles.navigationBar}
				initialRoute={{
					title: 'novel',
					component: RootTabBar
				}}
			/>
		);
	}
}

var styles = StyleSheet.create({
	navigationBar: {
		flex: 1,
		backgroundColor: '#3e454d'
	}
});

module.exports = RootNavigationBar;