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
	NavigatorIOS,
	TabBarIOS
} from 'react-native';

import BookShelfView from '../TabBarViews/BookShelfView';
import FoundView from '../TabBarViews/FoundView';
import MineView from '../TabBarViews/MineView';
import RankingView from '../TabBarViews/RankingView';
import RecommendView from '../TabBarViews/RecommendView';

class RootTabBar extends Component {
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
			<TabBarIOS
				style={styles.container}
				//unselectedTintColor='#828282'
				>
				<TabBarIOS.Item
					title= "推荐"
				  //icon={require('../../../images_src/Tab_Recommend_N.pdf')}
				  //systemIcon="history"
				  //selectedIcon={require('../../../images_src/Tab_Recommend_P.pdf')}
				  selected={this.state.selectedTab === '推荐'}
					onPress={() => {
						this.setState({
							selectedTab: '推荐'
						});
					}}>
					<RecommendView/>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					title= "排行"
					//icon={require('../../../images_src/Tab_Ranking_N.pdf')}
					//systemIcon="history"
					//selectedIcon={require('../../../images_src/Tab_Ranking_P.pdf')}
					selected={this.state.selectedTab === '排行'}
					onPress={() => {
						this.setState({
							selectedTab: '排行'
						});
					}}>
					<RankingView/>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					title= "书架"
					//icon={require('../../../images_src/Tab_Bookshelf_N.pdf')}
					//systemIcon="history"
					//selectedIcon={require('../../../images_src/Tab_Bookshelf_P.pdf')}
					selected={this.state.selectedTab === '书架'}
					onPress={() => {
						this.setState({
							selectedTab: '书架'
						});
					}}>
					<BookShelfView/>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					title= "发现"
					//icon={require('../../../images_src/Tab_Found_N.pdf')}
					//systemIcon="history"
					//selectedIcon={require('../../../images_src/Tab_Found_P.pdf')}
					selected={this.state.selectedTab === '发现'}
					onPress={() => {
						this.setState({
							selectedTab: '发现'
						});
					}}>
					<FoundView/>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					title= "我的"
					//icon={require('../../../images_src/Tab_My_N.pdf')}
					//systemIcon="history"
					//selectedIcon={require('../../../images_src/Tab_My_P.pdf')}
					selected={this.state.selectedTab === '我的'}
					onPress={() => {
						this.setState({
							selectedTab: '我的'
						});
					}}>
					<MineView/>
				</TabBarIOS.Item>
			</TabBarIOS>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f7f7f7',
		alignItems: 'center'
	},
	tabTextNormal: {
		color: '#828282',
		fontSize: 11
	},
	tabTextSelected: {
		color: '#67b242',
		fontSize: 11
	}
});

module.exports = RootTabBar;