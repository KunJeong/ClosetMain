/**
 * @flow
 */

import React, { Component, PureComponent } from 'react';
import { Platform, View, FlatList, Text, Dimensions } from 'react-native';
import Tile from './Tile';
var viewportWidth = Dimensions.get('window').width;

type items = {
	height : number,
	color : string,
	profileName : string,
	first?: boolean,
}

type Props = {
	data: Array<items>,
	addToLeft: function,
	addToRight: function,
	masonry: any,
	post: boolean
}

type State = {
	count: number
}

export default class Masonry extends PureComponent<Props, State>{
	state = {
		count:0
	}
	static defaultProps = {
		data: [
			{
				key: '1',
				height: 160,
				profileName: 'abdfcds',
				color:'#FFF',
				source: require('../assets/fashion/1.jpg')
			},
			{
				key: '2',
				height: 210,
				profileName: 'abdfcds',
				source: require('../assets/fashion/2.jpg')
			},
			{
				key: '3',
				height: 100, 
				profileName: 'abdfcds',
				color:'#345677',
				left: 195,
				source: require('../assets/fashion/3.jpg')
			},
			{
				key: '4',
				height: 200,
				profileName: 'abdfcds',
				color: '#28759a',
				left: -345,
				source: require('../assets/fashion/4.jpg')
			},
			{
				key: '5',
				height: 250, 
				profileName: 'abdfcds',
				color:'#FFF',
				source: require('../assets/fashion/5.jpg')
			},
			{
				key: '6',
				height: 340, 
				profileName: 'abdfcds',
				color:'#FFF',
				source: require('../assets/fashion/6.jpg')
			},
			{
				key: '7',
				height: 400, 
				profileName: 'abdfcds',
				color:'#FFF',
				source: require('../assets/fashion/7.jpg')
			},
			{
				key: '8',
				height: 200, 
				profileName: 'abdfcds',
				color:'#FFF',
				source: require('../assets/fashion/8.jpg')
			},
			{
				key: '9',
				height: 160,
				profileName: 'abdfcds',
				color:'#FFF',
				source: require('../assets/fashion/9.jpg')
			},
			{
				key: '10',
				height: 210,
				profileName: 'abdfcds',
				color:'#aaa',
				source: require('../assets/fashion/10.jpg')
			},
			{
				key: '11',
				height: 200, 
				profileName: 'abdfcds',
				color:'#345677',
				source: require('../assets/fashion/11.jpg')
			},
			{
				key: '12',
				height: 100,
				profileName: 'abdfcds',
				color:'#28759a',
				source: require('../assets/fashion/12.jpg')
			},
			{
				key: '13',
				height: 250, 
				profileName: 'abdfcds',
				
				source: require('../assets/fashion/13.jpg')
				
			},
			{
				key: '14',
				height: 340, 
				profileName: 'abdfcds',
				
				source: require('../assets/fashion/14.jpg')
			},
			{
				key: '15',
				height: 400, 
				profileName: 'abdfcds',
				
				source: require('../assets/fashion/15.jpg')
			},
			{
				key: '16',
				height: 200, 
				profileName: 'abdfcds',
				
				source: require('../assets/fashion/16.jpg')
			},
			{
				key: '17',
				height: 160,
				profileName: 'abdfcds',
				
				source: require('../assets/fashion/17.jpg')
			},
			{
				key: '18',
				height: 210,
				profileName: 'abdfcds',
				
				source: require('../assets/fashion/18.jpg')
			},
			{
				key: '19',
				height: 200, 
				profileName: 'abdfcds',
				
				source: require('../assets/fashion/19.jpg')
			},
			{
				key: '20',
				height: 100,
				profileName: 'abdfcds',
				
				source: require('../assets/fashion/20.jpg')
			},
			{
				key: '21',
				height: 250, 
				profileName: 'abdfcds',
				
				source: require('../assets/fashion/21.jpg')
			},
			{
				key: '22',
				height: 340, 
				profileName: 'abdfcds',
				
				source: require('../assets/fashion/22.jpeg')
			},
			{
				key: '23',
				height: 400, 
				profileName: 'abdfcds',
				
				source: require('../assets/fashion/23.jpg')
			},
			{
				key: '24',
				height: 200, 
				profileName: 'abdfcds',
				source: require('../assets/fashion/24.jpg')
			},
			{
				key: '25',
				height: 160,
				profileName: 'abdfcds',
				source: require('../assets/fashion/25.jpg')
			},
			{
				key: '26',
				height: 210,
				profileName: 'abdfcds',
				source: require('../assets/fashion/26.jpg')
			},
			{
				key: '27',
				height: 200, 
				profileName: 'abdfcds',
				source: require('../assets/fashion/27.jpg')
			},
			{
				key: '28',
				height: 100,
				profileName: 'abdfcds',
				source: require('../assets/fashion/28.jpg')
			},
			{
				key: '29',
				height: 250, 
				profileName: 'abdfcds',
				source: require('../assets/fashion/29.jpg')
			},
			{
				key: '30',
				height: 340, 
				profileName: 'abdfcds',
				source: require('../assets/fashion/30.jpg')
			},
			{
				key: '31',
				height: 400, 
				profileName: 'abdfcds',
				source: require('../assets/fashion/31.jpg')
			},
			{
				key: '32',
				height: 200, 
				profileName: 'abdfcds',
				source: require('../assets/fashion/32.jpg')
			},
			{
				key: '33',
				height: 160,
				profileName: 'abdfcds',
				source: require('../assets/fashion/33.jpg')
			},
			{
				key: '34',
				height: 210,
				profileName: 'abdfcds',
				source: require('../assets/fashion/34.jpg')
			},
			{
				key: '35',
				height: 200, 
				profileName: 'abdfcds',
				source: require('../assets/fashion/35.jpg')
			},
			{
				key: '36',
				height: 100,
				profileName: 'abdfcds',
				source: require('../assets/fashion/36.jpg')
			},
			{
				key: '37',
				height: 250, 
				profileName: 'abdfcds',
				source: require('../assets/fashion/37.jpg')
			},
			{
				key: '38',
				height: 340, 
				profileName: 'abdfcds',
				source: require('../assets/fashion/38.jpg')
			},
			{
				key: '39',
				height: 400, 
				profileName: 'abdfcds',
				source: require('../assets/fashion/39.jpg')
			},
			{
				key: '40',
				height: 200, 
				profileName: 'abdfcds',
				source: require('../assets/fashion/40.jpg')
			},
		]
		
	}

	_renderItem({item, index}){
		const row = Math.floor(index/2);
		const offset = this.props.masonry.layout[row - 1];
	
		if(index % 2 === 0){
			const next = this.props.data[index+1];
			const flip = (item.height < next.height)? (offset < 0) : (offset > 0 );
			const margin = flip ? (offset > 0 ? -offset : 0) : (offset < 0 ? offset : 0)
			if(flip){
				this.props.addToRight(item.height, index, true);
			}
			else{
				this.props.addToLeft(item.height, index, false);
			}
			return(
				<Tile
					height={item.height}
					color={item.color}
					profileName={item.profileName}
					overflow='visible'
					first={item.first}
					isLeft={true}
					flip={flip}
					offset={margin}
					viewportWidth={viewportWidth}
					post={this.props.post}
					source={item.source}
				/>
			)
		}
		else{
			const prev = this.props.data[index-1];
			const flip = (prev.height < item.height)? (offset < 0) : (offset > 0);
			const margin = flip ? (offset < 0 ? offset : 0) : (offset > 0 ? -offset : 0);
			if(flip){
				this.props.addToLeft(item.height, index, true);
			}
			else{
				this.props.addToRight(item.height, index, false);
			}
			return(
				<Tile
					height={item.height}
					color={item.color}
					profileName={item.profileName}
					overflow='visible'
					first={item.first}
					isLeft={false}
					flip={flip}
					offset={margin}
					viewportWidth={viewportWidth}
					post={this.props.post}
					source={item.source}
				/>
			)
		}
	}
	render(){
		this.props.data[0].first = true;
		this.props.data[1].first = true;
		return(
			// <View style = {{backgroundColor: '#FFFFFF'}}>
				<FlatList
				numColumns={2}
				data={this.props.data}
				showsVerticalScrollIndicator={false}
				renderItem={this._renderItem.bind(this)}
				// extraData={this.props.masonry.cache}
				initialNumToRender={1}
				maxToRenderPerBatch={1}
				removeClippedSubviews={false}
				windowSize={100}
				updateCellsBatchingPeriod={1}
				refreshing={true}
				extraData = {viewportWidth}
				/>
			// </View>
		)
	}

}