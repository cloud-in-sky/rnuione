import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class Showimg extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Image
                    style={{ width: 240, height: 240 }}
                    source={{ uri: 'https://www.pbtech.co.nz/fileslib/_20170314111848_pbtech-samsung-tv.jpg' }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    }
})