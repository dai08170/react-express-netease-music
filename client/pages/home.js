import React, { Component } from 'react'
import { Tabs } from 'antd-mobile'
import LazyLoad from 'react-lazyload'
import Header from "./header"
import '../styles/home.less'
import Recommend from '../components/Home/recommend'
import PlayList from '../components/Home/playList'
import Rank from '../components/Home/rank'
import { connect } from "react-redux"

const TabPane = Tabs.TabPane

class Home extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Header />
				<Tabs defaultActiveKey="1" swipeable={false}>
					<TabPane tab="个性推荐" key="1">
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
							<LazyLoad height={200}>
								<Recommend />
							</LazyLoad>
						</div>
					</TabPane>
					<TabPane tab="歌单" key="2">
						<div style={{ display: 'flex', alignItems: 'left', justifyContent: 'center', backgroundColor: '#fff' }}>
							<LazyLoad height={200}>
								<PlayList />
							</LazyLoad>
						</div>
					</TabPane>
					<TabPane tab="排行榜" key="3">
						<div style={{ display: 'flex', alignItems: 'left', justifyContent: 'center', backgroundColor: '#fff' }}>
							<LazyLoad height={200}>
								<Rank />
							</LazyLoad>
						</div>
					</TabPane>
				</Tabs>
			</div>
		)
	}
}

function select(state) {
	return {

	}
}

export default connect(select)(Home)
