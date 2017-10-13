import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TextInput, TouchableNativeFeedback, Alert } from 'react-native';
import { Button, Input, Icon, Country } from '../../components';
import px from '../../common/px2dp';

export default class Signin extends Component {

    static navigationOptions = {
        title: '注册',
        prefix: '',
        mobile: '',
    };
    
    state = {
        mobile: '',
        prefix: '+86',
        country: false
    }

    componentDidMount () {
        const navigate = this.props.navigation.state;
        if (navigate.params) {
            this.setState({
                prefix: navigate.params.prefix
            })
        }
    }
    
    mobileChange = (mobile) => {
        this.setState({
            mobile: mobile.trim()
        })
    }

    passwordChange = (password) => {
        this.setState({
            password: password.trim()
        })
    }

    showCountry = () => {
        this.props.navigation.navigate('Country');
    }

    next = () => {
        if (!this.state.mobile) {
            return Alert.alert('', '注册账号不能为空',[{ text: '知道了' }])
        }
        // this.props.navigation.navigate('Choose');
    }

    render () {
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={this.showCountry}>
                    <View style={styles.countryInput}>
                        <Text style={styles.countryText}>
                            国家 &nbsp;&nbsp;&nbsp;{this.state.prefix}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
                <Input 
                    label="手机号"
                    placeholder="请输入手机号"
                    onChangeText={this.mobileChange}
                />
                <View style={styles.tip}>
                    <Text>手机号即为登录账号，我们将发送验证短信到该号码</Text>
                </View>
                <View style={styles.btn}>
                    <Button onPress={this.next}>下一步</Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: px(30)
    },
    btn: {
        marginTop: px(10),
        height: px(50)
    },
    tip: {
        marginTop: px(10),
        marginLeft: px(10),
    },
    tipText: {
        color: '#999'
    },
    countryInput: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#999'
    },
    countryText: {
        fontSize: 20,
        paddingLeft: px(10),
        height: px(40),
        lineHeight: px(30),
    },
})