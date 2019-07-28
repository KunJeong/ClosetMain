import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';
import FastImage from 'react-native-fast-image'


export default class SliderEntry extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            touched : false
        }
    }

    static propTypes = {
        data: PropTypes.object.isRequired,
    };

    get image () {
        const { data: { illustration }} = this.props;

        return( 
            <FastImage
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }
    touched=()=>{
        const { data: { illustration }} = this.props;
        this.props.onClick(illustration)
        this.setState({touched : !this.state.touched})
    }
    render () {
        const { data: { subtitle } } = this.props;
        const { data: { illustration }} = this.props;
        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress = {this.touched}
              >
                <View style={styles.shadow} />
                {this.state.touched ? (<View style={styles.imageContainer_Touched}>
                    { this.image }
                    <View style={styles.radiusMask} />
                </View>) : 
                (<View style={styles.imageContainer}>
                    { this.image }
                    <View style={styles.radiusMask} />
                </View>)}
                <View style={styles.textContainer}>
                    <Text
                      style={styles.subtitle}
                      numberOfLines={1}
                    >
                        { subtitle }
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}