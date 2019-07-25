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
    Alert
} from "react-native";

import Realm from 'realm';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore'
import MasonryContainer from '../containers/masonryContainer'
import { ScrollView } from "react-native-gesture-handler";
import {SERVER_URL} from '../constants'
import {One_Image, Comment, LookBook, Closet, Clothes, Post, User, Tag} from '../schemas'

const store = configureStore();

// const Realm = require('realm');

// const PersonSchema = {
//   name: 'Person',
//   properties: {
//     name:  'string'
//   }
// };

const Part = {
  name: 'Part',
  properties: {
    name:     'string',
  }
};
    const user = Realm.Sync.User.current
    
    const config = user.createConfiguration ({
      sync: {url: 'realms://fashion.us1.cloud.realm.io/world'},
      fullSynchronization: true,
      schema: [Part],
      validate_ssl:false
    });


    Realm.open(config).then((realm) => {
        realm.write(() => { 
            let john = realm.create('Part', {name: 'dd'});
            // john.cars.push({make: 'Honda',  model: 'Accord', miles: 1500});
            // john.cars.push({make: 'Toyota', model: 'Prius',  miles: 2780});

            // let joan = realm.create('Person', {name: 'Joan', cars: []});
            // joan.cars.push({make: 'Skoda', model: 'Octavia', miles: 1120});
            // joan.cars.push({make: 'Ford',  model: 'Fiesta',  miles: 95});
            // joan.cars.push({make: 'VW',    model: 'Golf',    miles: 1270});

            // let jill = realm.create('Person', {name: 'Jill', cars: []});

            // let jack = realm.create('Person', {name: 'Jack', cars: []});
            // jack.cars.push({make: 'Porche', model: '911',    miles: 965});
        });

        let carOwners = realm.objects('Part');
        Alert.alert('llll')
        for (let p of carOwners) {
            Alert.alert(p.name)
        }
  });
// // Initialize a Realm with Car and Person models
// Realm.open({schema: [CarSchema, PersonSchema]})
//     .then(realm => {

//         // Add persons and their cars
//         realm.write(() => {
//             let john = realm.create('Person', {name: 'John', cars: []});
//             john.cars.push({make: 'Honda',  model: 'Accord', miles: 1500});
//             john.cars.push({make: 'Toyota', model: 'Prius',  miles: 2780});

//             let joan = realm.create('Person', {name: 'Joan', cars: []});
//             joan.cars.push({make: 'Skoda', model: 'Octavia', miles: 1120});
//             joan.cars.push({make: 'Ford',  model: 'Fiesta',  miles: 95});
//             joan.cars.push({make: 'VW',    model: 'Golf',    miles: 1270});

//             let jill = realm.create('Person', {name: 'Jill', cars: []});

//             let jack = realm.create('Person', {name: 'Jack', cars: []});
//             jack.cars.push({make: 'Porche', model: '911',    miles: 965});
//         });

//         // Find car owners
        // let carOwners = realm.objects('Person').filtered('cars.@size > 0');
        // // console.log('Car owners')
        // for (let p of carOwners) {
        //     Alert.alert(p.name)
        // }

// //         // Find who has been driver longer than average
// //         // let average = realm.objects('Car').avg('miles');
// //         // let longerThanAverage = realm.objects('Person').filtered('cars.@sum.miles > $0', average);
// //         // console.log(`Longer than average (${average})`)
// //         // for (let p of longerThanAverage) {
// //         //     console.log(`  ${p.name}: ${p.cars.sum('miles')}`);
// //         // }

//         realm.close();
// });

class MyPage extends Component<{}> {
    constructor(props) {
      super(props);
    }

    
    signout() {
        Realm.Sync.User.current.logout();
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <Provider store = {store}>
                <View style = {{height: Platform.OS === 'ios'? 44 : 0, backgroundColor: '#FFE7FF'}}></View>
                {/* <ScrollView> */}
                
                <View style = {{position: 'absolute', height: '60%', width: '100%',top: Platform.OS === 'ios'? 344 : 300}}>
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
                <View
                style = {[styles.cardShadow,
                    {height: 300, width: '100%', justifyContent: 'space-around',alignContent: 'space-around'}]}>
                    <View style = {{height: '100%', width: '100%', backgroundColor: '#FFF', elevation: 6}}></View>
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