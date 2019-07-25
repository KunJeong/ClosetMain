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
				color:'#FFF'
			},
			{
				key: '2',
				height: 210,
				profileName: 'abdfcds',
				color:'#aaa'
			},
			{
				key: '3',
				height: 100, 
				profileName: 'abdfcds',
				color:'#345677',
				left: 195,
				// offset: -50
			},
			{
				key: '4',
				height: 200,
				profileName: 'abdfcds',
				color: '#28759a',
				left: -345,
				offset: -50
			},
			{
				key: '5',
				height: 250, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '6',
				height: 340, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '7',
				height: 400, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '8',
				height: 200, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '9',
				height: 160,
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '10',
				height: 210,
				profileName: 'abdfcds',
				color:'#aaa'
			},
			{
				key: '11',
				height: 200, 
				profileName: 'abdfcds',
				color:'#345677'
			},
			{
				key: '12',
				height: 100,
				profileName: 'abdfcds',
				color:'#28759a'
			},
			{
				key: '13',
				height: 250, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '14',
				height: 340, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '15',
				height: 400, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '16',
				height: 200, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '17',
				height: 160,
				profileName: 'abdfcds',
				color:'#FFF',
			},
			{
				key: '18',
				height: 210,
				profileName: 'abdfcds',
				color:'#aaa'
			},
			{
				key: '19',
				height: 200, 
				profileName: 'abdfcds',
				color:'#345677'
			},
			{
				key: '20',
				height: 100,
				profileName: 'abdfcds',
				color:'#28759a'
			},
			{
				key: '21',
				height: 250, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '22',
				height: 340, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '23',
				height: 400, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '24',
				height: 200, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '25',
				height: 160,
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '26',
				height: 210,
				profileName: 'abdfcds',
				color:'#aaa'
			},
			{
				key: '27',
				height: 200, 
				profileName: 'abdfcds',
				color:'#345677'
			},
			{
				key: '28',
				height: 100,
				profileName: 'abdfcds',
				color:'#28759a'
			},
			{
				key: '29',
				height: 250, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '30',
				height: 340, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '31',
				height: 400, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '32',
				height: 200, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '33',
				height: 160,
				profileName: 'abdfcds',
				color:'#FFF',
			},
			{
				key: '34',
				height: 210,
				profileName: 'abdfcds',
				color:'#aaa',
			},
			{
				key: '35',
				height: 200, 
				profileName: 'abdfcds',
				color:'#345677'
			},
			{
				key: '36',
				height: 100,
				profileName: 'abdfcds',
				color:'#28759a'
			},
			{
				key: '37',
				height: 250, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '38',
				height: 340, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '39',
				height: 400, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '40',
				height: 200, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '41',
				height: 160,
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '42',
				height: 210,
				profileName: 'abdfcds',
				color:'#aaa'
			},
			{
				key: '43',
				height: 200, 
				profileName: 'abdfcds',
				color:'#345677'
			},
			{
				key: '44',
				height: 100,
				profileName: 'abdfcds',
				color:'#28759a'
			},
			{
				key: '45',
				height: 250, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '46',
				height: 340, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '47',
				height: 400, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '48',
				height: 200, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '49',
				height: 160,
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '50',
				height: 210,
				profileName: 'abdfcds',
				color:'#aaa'
			},
			{
				key: '51',
				height: 200, 
				profileName: 'abdfcds',
				color:'#345677'
			},
			{
				key: '52',
				height: 100,
				profileName: 'abdfcds',
				color:'#28759a'
			},
			{
				key: '53',
				height: 250, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '54',
				height: 340, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '55',
				height: 400, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '56',
				height: 200, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '57',
				height: 200, 
				profileName: 'abdfcds',
				color:'#345677'
			},
			{
				key: '58',
				height: 100,
				profileName: 'abdfcds',
				color:'#28759a'
			},
			{
				key: '59',
				height: 250, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '60',
				height: 340, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '61',
				height: 400, 
				profileName: 'abdfcds',
				color:'#FFF'
			},
			{
				key: '62',
				height: 200, 
				profileName: 'abdfcds',
				color:'#FFF'
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