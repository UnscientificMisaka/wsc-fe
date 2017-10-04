import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native';
import { Button, Input, Icon, Country } from '../../components';
import px from '../../common/px2dp';

export default class Signin extends Component {

    static navigationOptions = {
        title: '登录',
    };
    
    state = {
        mobile: '',
        password: '',
        prefix: '+86',
        country: false
    }
    
    mobileChange = (e) => {
        console.log(e)
    }

    showCountry = () => {
        this.props.navigation.navigate('Country');
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
                    label="账号"
                    placeholder="请输入手机号"
                />
                <Input 
                    label="国家"
                    placeholder="请输入密码"
                    type="password"
                    onChange={this.mobileChange}
                />
                <View style={styles.btn}>
                    <Button>登录</Button>
                </View>
                <View style={styles.forget}>
                    <Button href="/forget">忘记密码？</Button>
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
        marginTop: px(20),
        height: px(50)
    },
    forget: {
        marginTop: px(10),
        marginLeft: px(10)
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