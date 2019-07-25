import {Platform, StatusBar, StyleSheet, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
let offset = ((screenHeight - StatusBar.currentHeight) - screenWidth) / 2;

export default StyleSheet.create({
    wrapper: {},
    slide_default: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hats:{
        position: 'absolute',
        // top: Math.round((3/66)*370),
        // left: Math.round((21/63)*350),
        width: 70,
        height: 70,
        borderRadius:8
    },
    nohats:{
        position: 'absolute',
        // top: Math.round((3/66)*370),
        // left: Math.round((21/63)*350),
        width: 50,
        height: 50,
        borderRadius:10,
        
    },
    t_shirt:{
        position: 'absolute',
        // top: Math.round((19/66)*370),
        // left: Math.round((5/63)*350),
        width: 100,
        height: 100,
        borderRadius:8
    },
    not_shirt:{
        position: 'absolute',
        // top: Math.round((19/66)*370),
        // left: Math.round((5/63)*350),
        width: 50,
        height: 50,
        borderRadius:10,
        
    },
    dress:{
        position: 'absolute',
        // top: Math.round((28/66)*370),
        // left: Math.round((22/63)*350),
        width: 120,
        height: 250,
        borderRadius:8
    },
    nodress:{
        position: 'absolute',
        // top: Math.round((28/66)*370),
        // left: Math.round((22/63)*350),
        width: 50,
        height: 50,
        borderRadius:10,
        
    },
    trousers:{
        position: 'absolute',
        // top: Math.round((40/66)*370),
        // left: Math.round((5/63)*350),
        width: 100,
        height: 150,
        borderRadius:8
    },
    notrousers:{
        position: 'absolute',
        // top: Math.round((40/66)*370),
        // left: Math.round((5/63)*350),
        width: 50,
        height: 50,
        borderRadius:10,
        
    },
    skirt:{
        position: 'absolute',
        // top: Math.round((40/66)*370),
        // left: Math.round((5/63)*350),
        width: 100,
        height: 100,
        borderRadius:8
    },
    noskirt:{
        position: 'absolute',
        // top: Math.round((40/66)*370),
        // left: Math.round((5/63)*350),
        width: 50,
        height: 50,
        borderRadius:10,
        
    },
    outer:{
        position: 'absolute',
        // top: Math.round((23/66)*370),
        // left: Math.round((39/63)*350),
        width: 100,
        height: 100,
        borderRadius:8
    },
    noouter:{
        position: 'absolute',
        // top: Math.round((23/66)*370),
        // left: Math.round((39/63)*350),
        width: 50,
        height: 50,
        borderRadius:10,
        
    },
    shoes:{
        position: 'absolute',
        // top: Math.round((53/66)*370),
        // left: Math.round((21/63)*350),
        width: 70,
        height: 70,
        borderRadius:8
    },
    noshoes:{
        position: 'absolute',
        // top: Math.round((53/66)*370),
        // left: Math.round((21/63)*350),
        width: 50,
        height: 50,
        borderRadius:10,
        
    },
    accessoriesTOP:{
        position: 'absolute',
        // top: Math.round((5/66)*370),
        // left: Math.round((42/63)*350),
        width: 90,
        height: 90,
        borderRadius:8
    },
    noaccessoriesTOP:{
        position: 'absolute',
        // top: Math.round((5/66)*370),
        // left: Math.round((42/63)*350),
        width: 50,
        height: 50,
        borderRadius:10,
        
    },
    accessoriesBOTTOM:{
        position: 'absolute',
        // top: Math.round((51/66)*370),
        // left: Math.round((42/63)*350),
        width: 90,
        height: 90,
        borderRadius:8
    },
    noaccessoriesBOTTOM:{
        position: 'absolute',
        // top: Math.round((51/66)*370),
        // left: Math.round((42/63)*350),
        width: 50,
        height: 50,
        borderRadius:10,
    },
    containerStyle_Android:{
        transform: [{ rotate: "90deg" }],
        width: screenHeight - StatusBar.currentHeight,
        height: screenWidth,
        top: offset, //top
        right: offset, //right
        //containerStyle.marginTop = StatusBar.currentHeight
    },
    containerStyle:{
        flex: 1,
    },
    pageStyle_Android: {
        transform: [{ rotate: "-90deg" }],
        width: screenWidth,
        height: (screenHeight - StatusBar.currentHeight),
        bottom: offset,  //left
        left: offset,   //top
        paddingBottom: 49
    },
    pageStyle_Android2: {
        transform: [{ rotate: "-90deg" }],
        width: screenWidth,
        height: (screenHeight - StatusBar.currentHeight),
        bottom: offset,  //left
        left: offset,   //top
        paddingBottom: 3
    },
    pageStyle: {
        height: (screenHeight - 94)
    },
    pageStyle2: {
        height: (screenHeight - 94)
    }
})