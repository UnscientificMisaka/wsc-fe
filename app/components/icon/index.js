import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import map from './map';

export default class Icon extends Component {
    
    static propTypes = {
        type: PropTypes.string,
        color: PropTypes.string,
        fontSize: PropTypes.number,
        onPress: PropTypes.func
    }

    render () {
        const { fontSize=25, color, type, onPress } = this.props;
        return (
            <TouchableNativeFeedback
                onPress={onPress}
            >
                <View>
                    <Text style={{
                        fontFamily: 'iconfont',
                        fontSize,
                        color
                    }}>
                    {map(type)}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}