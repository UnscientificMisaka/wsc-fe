import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import Icon from '../icon';
import px from '../../common/px2dp';

export default class Nav extends Component {

    state = {
        type: ''
    }

    componentDidMount () {
        this.setState({
            type: this.props.content[0].icon.type
        })
    }


    redirect = (item, e) => {

        this.setState({
            type: item.icon.type
        })
        this.props.navigation.navigate(item.href);
    }

    render () {
        return (
            <View style={styles.container}>
                {this.props.content.map((item, index) => {
                    return (
                        <TouchableNativeFeedback
                            key={index}
                            onPress={() => this.redirect(item)}
                        >
                            <View style={styles.inner}>
                                <Icon {...item.icon} color={this.state.type === item.icon.type ? 'red' : null}/>
                                <Text style={[styles.text, this.state.type === item.icon.type ? styles.active : '']}>{item.text}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        flexDirection:'row',
        justifyContent:'space-around',
    },
    text: {
        marginTop: px(5),
        textAlign: 'center',
        fontSize: 20,
    },
    active: {
        color: 'red'
    }
})