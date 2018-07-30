import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Welcome extends Component {
    render() {
        return (
            <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'blue' }}>
                Welcome to Auckland!
            </Text>
        );
    }
}