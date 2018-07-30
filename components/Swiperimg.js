/*
* https://github.com/leecade/react-native-swiper/blob/master/examples/components/Swiper/index.js
*/
import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native'

import Swiper from 'react-native-swiper';

var screenwidth = Dimensions.get('window').width;

export default class Swiperimg extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper} height={240} showsButtons>
                    <View style={styles.slide} title={<Text numberOfLines={1}>HP Elitebook 8460p Notebook</Text>}>
                        <Image resizeMode='contain' style={styles.image}
                            source={{ uri: 'https://www.pbtech.co.nz/imgprod/E/X/EXNBKHP84601__1.jpg' }} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Lenovo Tab 7</Text>}>
                        <Image resizeMode='contain' style={styles.image}
                            source={{ uri: 'https://www.pbtech.co.nz/imgprod/T/A/TABLEN7701__3.jpg' }} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Apple 15" Macbook Pro</Text>}>
                        <Image resizeMode='contain' style={styles.image}
                            source={{ uri: 'https://www.pbtech.co.nz/imgprod/N/B/NBKAPP151212__1.jpg' }} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>TP-Link Archer C7 Wi-Fi Router</Text>}>
                        <Image resizeMode='contain' style={styles.image}
                            source={{ uri: 'https://www.pbtech.co.nz/imgprod/N/E/NETTPL4907__1.jpg' }} />
                    </View>
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    wrapper: {
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },

    image: {
        width: screenwidth,
        flex: 1
    }
})
