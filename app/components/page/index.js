import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView, TouchableNativeFeedback, StyleSheet } from 'react-native';
import Nav from '../nav';

const content = [{
    icon: {
        type: 'shoplight',
        fontSize: 45,
    },
    text: '店铺',
    href: 'Shop'
}, {
    icon: {
        type: 'peoplelist',
        fontSize: 45,
    },
    text: '客户',
    href: 'Client'
}, {
    icon: {
        type: 'tag',
        fontSize: 45,
    },
    text: '营销',
    href: 'Market'
}, {
    icon: {
        type: 'cascades',
        fontSize: 40,
    },
    text: '更多',
    href: 'More'
}]

export default class Page extends Component {

    render () {
        return (
            <View style={{
               flex: 1
            }}>
                <ScrollView>
                    {this.props.children}
                </ScrollView>
                <Nav navigation={this.props.navigation} content={content}/>
            </View>
        )
    }
}