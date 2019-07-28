/**
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Platform, Dimensions, Image } from 'react-native';

type Props = {
    height: number,
    profileName: string,
    color: string,
    first: boolean,
    isLeft: boolean,
    flip: boolean,
    offset: number,
    post: boolean
};
var viewportWidth = Dimensions.get('window').width;
const gutter = 25;
const leftMargin = 25;
const rightMargin = 18;
var postWidth = Math.round((viewportWidth - gutter - leftMargin - rightMargin )/2);
const flipRight = postWidth + gutter + leftMargin;
const flipLeft = - postWidth * 2 - gutter;
const shift = -10;
const border = 10;
const extraHeight = 60;
const verticalMargin = 15;

export default class Block extends Component<Props>{
    static defaultProps = {
        height: 160,
        first: false,
        offset: 0,
        left: 15,
        post: true
    }

    render(){
        return(
            <View>
            {this.props.post? 
        <ImageBackground
            source = {Platform.OS === 'ios'? require('../assets/gradient2.jpg') : require('../assets/gradient3.jpg')}
            style = {[
                styles.cardShadow, 
                styles.post,
                {
                    marginTop: this.props.first? verticalMargin : this.props.offset ,
                    marginLeft: this.props.flip? (this.props.isLeft? flipRight : flipLeft) : (this.props.isLeft? leftMargin : gutter),
                    height: this.props.height + extraHeight
                    // backgroundColor: this.props.color,
                },
            ]}
            imageStyle={{ borderRadius: border }}
        >
            <View
            style={{
                flexDirection: 'row',
                height: 30 
                }}>
                <View
                    style={[styles.cardShadow, {marginLeft: 7.5, marginTop: 7.5, marginRight: 5, width: 15, height: 15, borderRadius: 7  , backgroundColor: '#FFFFFF'}]}>
                </View>
                <Text
                    style={{marginTop: 8, includeFontPadding: false, fontSize: 11, fontWeight: '700'}}
                >{this.props.profileName}</Text>
            </View>
            <View
                style = {[styles.image, styles.cardShadow, {
                    height: this.props.height}]}>
                <Image source={this.props.source} style={{width: postWidth, height: this.props.height, borderRadius:10}} imageStyle={{borderRadius:10}}></Image>
            </View>

        </ImageBackground>
        : 
            <View
                style = {[
                    
                    styles.post,
                    {
                        marginTop: this.props.first? verticalMargin : this.props.offset ,
                        marginLeft: this.props.flip? (this.props.isLeft? flipRight : flipLeft) : (this.props.isLeft? leftMargin : gutter),
                        height: this.props.height,
                        backgroundColor: '#FFF',
                    },
                    styles.cardShadow]}>
        <Image source={this.props.source} style={{width: postWidth, height: this.props.height, borderRadius:10}} imageStyle={{borderRadius:10}}></Image>
            
            </View>
        }
        </View>
        )
    }
}

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: '#000',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 2 ,
        elevation: 6 
    },
    image: {
        // marginTop: 5 ,
        marginLeft: shift,
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: border,
    },
    post: {
        // marginLeft: gutter,
        width: postWidth,
        marginBottom: verticalMargin ,
        borderRadius: border,
        // borderWidth: 4
    }
})