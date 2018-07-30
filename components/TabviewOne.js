/*
* https://www.npmjs.com/package/react-native-tab-view
*/

import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

var screenwidth = Dimensions.get('window').width;
var screenheight = Dimensions.get('window').height;

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} >
        <Image resizeMode='contain' style={styles.image}
            source={{ uri: 'https://www.pbtech.co.nz/imgprod/E/X/EXNBKHP84601__1.jpg' }} />
        <Text style={styles.text}>HP Elitebook 8460p Notebook</Text>
        <Text style={styles.text}>Intel Core i5 4GB 320GB 14" Display Win 10Pro</Text>
    </View>
);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} >
        <Image resizeMode='contain' style={styles.image}
            source={{ uri: 'https://www.pbtech.co.nz/imgprod/T/A/TABLEN7701__3.jpg' }} />
        <Text style={styles.text}>Lenovo Tab 7</Text>
    </View>
);

const ThreeRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#C0C0C0' }]} >
        <Image resizeMode='contain' style={styles.image}
            source={{ uri: 'https://www.pbtech.co.nz/imgprod/N/E/NETTPL4907__1.jpg' }} />
        <Text style={styles.text}>TP-Link Archer C7 Wi-Fi Router</Text>
    </View>
);

export default class TabviewOne extends Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Laptop' },
            { key: 'second', title: 'Phone' },
            { key: 'three', title: 'Router' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderTabBar = props => <TabBar {...props} style={styles.header} />;

    _renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        three: ThreeRoute,
    });

    render() {
        return (
            <TabView style={styles.image}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderTabBar={this._renderTabBar}
                onIndexChange={this._handleIndexChange}
                initialLayout={{ width: screenwidth, height: screenheight }}
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    header: {
        paddingTop: 2,
    },
    image: {
        width: screenwidth * 0.97,
        flex: 1
    },
    tabview: {
        margin: 10,
    },
    text: {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
