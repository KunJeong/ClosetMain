/**
 * @flow
 */

import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Platform,
    ImageBackground,
    Alert,
    TouchableOpacity,
    Image,
    Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import Realm from 'realm';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore'
import MasonryContainer from '../containers/masonryContainer'
import { ScrollView } from "react-native-gesture-handler";
import {SERVER_URL} from '../constants'
import {One_Image, Comment, LookBook, Closet, Clothes, Post, User, Tag} from '../schemas'

const store = configureStore();

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


class MyPage extends Component<{}> {
    constructor(props) {
      super(props);
      this.signout = this.signout.bind(this)
    }

    
    signout() {
        Realm.Sync.User.current.logout();
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <Provider store = {store}>
                <View style = {{height: Platform.OS === 'ios'? 44 : 0, backgroundColor: '#FFE7FF'}}></View>

                <View style = {{position: 'absolute', height: Platform.OS === 'ios'? screenHeight - 304 : screenHeight - 260, width: '100%',top: Platform.OS === 'ios'? 304 : 260}}>
                    <ImageBackground
                    source = {Platform.OS === 'ios'? require('../assets/gradient2.jpg') : require('../assets/gradient3.jpg')}
                    style = {{height: '100%', width: '100%'}}
                    >
                        <MasonryContainer post={false}/>
                    </ImageBackground>
                {/* <TouchableHighlight style={[styles.buttonContainer, styles.logoutButton]} onPress={this.signout.bind(this)}>
                <Text style={styles.logoutText}>Sign Out</Text>
                </TouchableHighlight> */}
                </View>
                <View style = {[styles.cardShadow,{height: 260, width: '100%', justifyContent: 'space-around',alignContent: 'space-around'}]}>
                
                    <View style = {{height: '100%', width: '100%', backgroundColor: '#FFF', elevation: 6}}>
                        <View style={{flex:5, flexDirection:'row'}}>

                            <View style={{flex:2, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <TouchableOpacity style={{justifyContent:'center', alignItems:'center', margin: 50}}>
                                    <View style={{elevation:6, shadowColor: '#000',shadowOffset: {width:0, height: 2}, 
                                                shadowOpacity: 0.3, shadowRadius: 2, backgroundColor:'white', borderRadius: 10}}>
                                        <Image style={{width:screenWidth/3.5, height:screenHeight/3.5, borderRadius:10}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJUFHRGZXz-p4CDFYwSCI9rmTC6CxmauwyZsuji_P0Ny-lKl3_w'}}/>
                                    </View>
                                </TouchableOpacity>
                                <View style={{flex:2}}></View>
                            </View>


                            <View style={{flexDirection:'column', flex:3, alignItems:'center', justifyContent:'center', marginVertical:10}}> 
                                <View style={{flexDirection:'row', flex:1, justifyContent:'center', alignItems:'center', marginVertical:10}}> 
                                    <Text style={{flex:4, marginHorizontal: 10, fontSize: 19}}>*Chrystine_1453*</Text>
                                    <TouchableOpacity onPress = {this.signout}style={{flex:1, paddingVertical:3,  justifyContent:'center', alignItems:'center', marginRight:10, borderwidth:1, borderRadius:3, 
                                                        backgroundColor: "#a6a6a6"}}>
                                        <Icon name="md-walk" size={23}/>
                                    </TouchableOpacity>
                                </View>

                                <View style={{flexDirection:'row', flex:2, paddingHorizontal:5, justifyContent:'space-between', alignItems:'center', marginVertical:10}}>   
                                    <View style={{flex:1, flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                                        <Text style={{flex:2,flexDirection:'column', justifyContent:'flex-end', alignItems:'center', fontSize:20}}>100</Text>
                                        <Text style={{flex:1,flexDirection:'column', justifyContent:'flex-end', fontSize:10}}>Posts</Text>
                                    </View>
                                    <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                        <Text style={{flex:2,flexDirection:'column', justifyContent:'flex-end', alignItems:'center', fontSize:20}}>19</Text>
                                        <Text style={{flex:1,flexDirection:'column', justifyContent:'flex-end', fontSize:10}}>Followers</Text>
                                    </View>
                                    <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                        <Text style={{flex:2,flexDirection:'column', justifyContent:'flex-end', alignItems:'center', fontSize:20}}>160</Text>
                                        <Text style={{flex:1,flexDirection:'column', justifyContent:'flex-end', fontSize:10}}>Followed</Text>
                                    </View>
                                </View>

                                <View style={{flexDirection:'row', flex:3, marginVertical:10, marginHorizontal : 10}}>
                                    <Text>#Fashion #Flowery #Dress #Weather-poor #</Text>
                                </View>
                            </View>


                        </View>
                    </View>


                </View>
                {/* </ScrollView> */}
            </Provider>
        );
    }
}
export default MyPage;

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
        // marginLeft: shift,
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    logoutButton: {
      backgroundColor: "#00b5ec",
    },
    logoutText: {
      color: 'white',
    }
});