import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native';
import { Button, Input, Icon, Country } from '../../components';
import px from '../../common/px2dp';

export default class Shop extends Component {
    
    state = {
        shopName: ''
    }

    componentDidMount () {
        const navigate = this.props.navigation.state;
        if (navigate.params) {
            this.setState({
                shopName: navigate.params.name
            })
        }
    }    

    render () {
        return (
            <View>
                <Text>创建</Text>
            </View>
        )
    }
}