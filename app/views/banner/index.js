import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';
import { Button, Swiper } from '../../components';
import px2dp from '../../common/px2dp';

export default class Banner extends Component {

    static navigationOptions = {
        header: null,
    };

    goSignin =  () => {
        this.props.navigation.navigate('Signin');
    }

    goSignup =  () => {
        this.props.navigation.navigate('Signup');
    }

    render () {
        return (
            <View style={styles.container}>
                <Swiper texts={[
                    '有赞微商城 在手机上做生意',
                    '拍照即可上架商品'
                ]}/>
                <View style={styles.footer}>
                    <Button
                        type="primary"
                        onPress={this.goSignin}
                    >
                        登录
                    </Button>
                    <Button
                        onPress={this.goSignup}
                    >
                        免费注册
                    </Button>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent:'space-around'
    }
})