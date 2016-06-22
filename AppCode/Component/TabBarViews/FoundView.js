/**
 * Created by zhanghan on 16/6/22.
 */

'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	StyleSheet,
	NavigatorIOS
} from 'react-native';

class FoundView extends Component {
	render() {
		return (
			<View style={styles.container}></View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'green'
	}
});

module.exports = FoundView;