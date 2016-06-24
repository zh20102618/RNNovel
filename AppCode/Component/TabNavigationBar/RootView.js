/**
 * Created by zhanghan on 16/6/24.
 */

'use strict';

import React, {
	Component
} from 'react';

import {
	Image,
	StyleSheet,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import BookShelfView from '../TabBarViews/BookShelfView';
import FoundView from '../TabBarViews/FoundView';
import MineView from '../TabBarViews/MineView';
import RankingView from '../TabBarViews/RankingView';
import RecommendView from '../TabBarViews/RecommendView';

var RecommendIcon = require('../../../images_src/Tab_Recommend_N.png');
var RecommendSelectedIcon = require('../../../images_src/Tab_Recommend_P.png');
var RankingIcon = require('../../../images_src/Tab_Ranking_N.png');
var RankingSelectedIcon = require('../../../images_src/Tab_Ranking_P.png');
var MyIcon = require('../../../images_src/Tab_My_N.png');
var MySelectedIcon = require('../../../images_src/Tab_My_P.png');
var FoundIcon = require('../../../images_src/Tab_Found_N.png');
var FoundSelectedIcon = require('../../../images_src/Tab_Found_P.png');
var BookShelfIcon = require('../../../images_src/Tab_Bookshelf_N.png');
var BookShelfSelectedIcon = require('../../../images_src/Tab_Bookshelf_P.png');

export default class RootView extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			selectedTab: '书架'
		};
	}

	render() {
		return (
			<TabNavigator>
				{this._renderTabItem('推荐', <RecommendView navigator={this.props.navigator}/>, RecommendIcon, RecommendSelectedIcon)}
				{this._renderTabItem('排行', <RankingView navigator={this.props.navigator}/>, RankingIcon, RankingSelectedIcon)}
				{this._renderTabItem('书架', <BookShelfView navigator={this.props.navigator}/>, BookShelfIcon, BookShelfSelectedIcon)}
				{this._renderTabItem('发现', <FoundView navigator={this.props.navigator}/>, FoundIcon, FoundSelectedIcon)}
				{this._renderTabItem('我的', <MineView navigator={this.props.navigator}/>, MyIcon, MySelectedIcon)}
			</TabNavigator>
		)
	}

	_renderTabItem (tag, rootView, renderImg, renderSelectedImg) {
		return (
			<TabNavigator.Item
				title= {tag}
				titleStyle={styles.tabItemTitleStyle}
				selectedTitleStyle={styles.tabItemSelectedTitleStyle}
				renderIcon={() => <Image source={renderImg} />}
				renderSelectedIcon={() => <Image source={renderSelectedImg} />}
				selected={this.state.selectedTab === tag}
				onPress={() => {
					this.setState({
						selectedTab: tag
					});
				}}>
				{rootView}
			</TabNavigator.Item>
		)
	}
}

var styles = StyleSheet.create({
	tabItemTitleStyle: {
		color: '#828282',
		fontSize: 11
	},
	tabItemSelectedTitleStyle: {
		color: '#67b242',
		fontSize: 11
	}
});