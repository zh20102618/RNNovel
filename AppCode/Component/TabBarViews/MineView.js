/**
 * Created by zhanghan on 16/6/22.
 */

'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	NavigatorIOS
} from 'react-native';

class MineView extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>
					我的
				</Text>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
		//backgroundColor: '#3e454d'
	},
	text: {
		color: 'black',
		fontSize: 20,
		textAlign: 'center'
	}
});

module.exports = MineView;