import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import Realm from 'realm';
import { SERVER_URL } from '../constants';
import { One_Image, Comment, Post, LookBook, Clothes, Closet, User, Tag } from '../schemas';
import { thisTypeAnnotation } from '@babel/types';

// const email = "";
// const passworld = "";

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            rePassword: "",
        };
        this.register = this.register.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    async register() {
        if ((!this.state.email) || (!this.state.password)) {
            Alert.alert(
                '',
                'Please check email or password!',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false },
            );
            return;
        }
        if (this.state.password != this.state.rePassword){
            Alert.alert(
                '',
                'Please check password!',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false },
            );
            return;
        }
        const creds = Realm.Sync.Credentials.usernamePassword(this.state.email, this.state.password);
        Realm.Sync.User.login(SERVER_URL, creds).then(user => {
            const config = user.createConfiguration({
                sync: { url: 'realms://fashion.us1.cloud.realm.io/hello' },
                fullSynchronization: true,

            });
            config.schema = [One_Image, Comment, Post, LookBook, Clothes, Closet, User, Tag];
            Realm.open(config).then((realm) => {
                realm.write(() => {
                    realm.create('User', {
                        userId: user.identity,
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password,
                        mainImage: "",
                        scrapbook: [],
                        posts: [],
                        closet: [],
                        followerList: [],
                        followingList: [],
                        lookBookList: []
                    });
                })
            });
        });
        this.props.navigation.navigate('App');
    }
    
    cancel() {
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="username"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(username) => this.setState({ username })} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Re-Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(rePassword) => this.setState({ rePassword })} />
                </View>
                <TouchableHighlight style={styles.buttonContainer} onPress={this.register}>
                    <Text>Register</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.cancel}>
                    <Text style={styles.loginText}>Cancel</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});