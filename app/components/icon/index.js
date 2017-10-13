import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import map from './map';

export default class Icon extends Component {
    
    static propTypes = {
        type: PropTypes.string,
        color: PropTypes.string,
        fontSize: PropTypes.number,
        onPress: PropTypes.func,
        marginLeft: PropTypes.number,
        marginRight: PropTypes.number,
    }

    render () {
        const { fontSize=25, color, type, onPress, marginLeft, marginRight } = this.props;
        return (
            <TouchableNativeFeedback
                onPress={onPress}
            >
                <View
                    style={{
                        marginLeft,
                        marginRight
                    }}
                >
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