import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Animated, Dimensions, Easing } from 'react-native';
import { Button, Swiper } from '../../components';
import px2dp from '../../common/px2dp';

const { width, height } = Dimensions.get('window');
const SetupImage = require('../../Images/setup.jpeg');

export default class SetupView extends Component {

    static navigationOptions = {
        header: null,
    };

    state = {
        composite: new Animated.Value(0),
    }
    
    componentDidMount () {
        //@TODO add animations
        Animated.sequence([

        ]).start();
        setTimeout(() => {
            this.props.navigation.navigate('Banner');
        }, 1000);
    }
    render () {
        return (
            <Animated.Image
                style={{
                    width,
                    height
                }}
                source={SetupImage}
            />
        )
    }
}