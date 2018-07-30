import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native'

var screenwidth = Dimensions.get('window').width;

export default class Userlogin extends Component {
    state = {
        myemail: '',
        mypassword: ''
    }

    login = (myemail, mypassword) => {
        alert('Email: ' + myemail + ' Password: ' + mypassword)
    }

    render() {
        return (
            <View style={styles.containerStyle}>

                <Text style={styles.textFieldStyle}>Email Address:</Text>

                <TextInput style={styles.inputFieldStyle}
                    underlineColorAndroid="transparent"
                    placeholder="Your Email here"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ myemail: text })} />

                <Text style={styles.textFieldStyle}>Password:</Text>

                <TextInput secureTextEntry={true} style={styles.inputFieldStyle}
                    underlineColorAndroid="transparent"
                    placeholder="Your password here"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ mypassword: text })} />

                <TouchableOpacity
                    style={styles.submitButtonStyle}
                    onPress={
                        () => this.login(this.state.myemail, this.state.mypassword)
                    }>
                    <Text style={styles.submitButtonTextStyle}> Submit </Text>
                </TouchableOpacity>

            </View >
        )
    }
}


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 20,
        paddingLeft: 10
    },
    textFieldStyle: {
        margin: 3,
        fontSize: 14
    },
    inputFieldStyle: {
        width: screenwidth * .8,
        margin: 5,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 3
    },
    submitButtonStyle: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonTextStyle: {
        color: 'white'
    }
})
