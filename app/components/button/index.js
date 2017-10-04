import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import px from '../../common/px2dp';

export default class Button extends Component {

    static propTypes = {
        text: PropTypes.string,
        type: PropTypes.oneOf(['default','primary']),
        disabled: PropTypes.bool,
        loading: PropTypes.bool,
        onPress: PropTypes.func
    }

    static defaultProps = {
        type: 'default',
        disabled: false,
        loading: false,
    }

    

    shouldComponentUpdate (nextProps, nextState) {
        return (
            nextProps.text !== this.props.text ||
            nextProps.loading !== this.props.value || 
            nextProps.disabled !== this.props.disabled
        );
    }

    render () {
        const { type, href } = this.props;
        const touchableProps = {};
        if (!this.props.disabled && !this.props.loading) {
            // @todo add other events and split it out
            touchableProps.onPress = this.props.onPress;
        }
        
        return (
            <TouchableNativeFeedback
                {...touchableProps}
            >
                <View
                    style={href ? '' : [style.button, style[`${type}Button`]]}
                >
                    <Text
                        style={href ? style.link : [style.text, style[`${type}Text`]]}
                    >
                    {this.props.children}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const style = StyleSheet.create({
    button: {
        flex: 1,
        height: px(36),
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 36,
        margin: 10,
        borderRadius: 2
    },
    link: {
        fontSize: 20,
        color: '#38f'
    },
    text: {
        lineHeight: 25,
        fontSize: 25,
        fontWeight: '200',
    },
    defaultButton: {
        backgroundColor: 'red',
        borderColor: 'red'
    },
    defaultText: {
        color: '#fff',
    },
    primaryButton: {
        borderColor: 'red'
    },
    primaryText: {
        color: 'red'
    }
});