import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image, TouchableNativeFeedback, ViewPagerAndroid } from 'react-native';
import { Button, Swiper } from '../../components';
import px from '../../common/px2dp';

// @TODO add different animations and images

const Header = function (props) {
    return (
        <View 
            style={{
                flex: 1,
                alignItems: 'center',
                marginTop: px(50)
            }}
        >
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: '900'
                }}
            >
            {props.title}
            </Text>
            <Text 
                style={{
                    fontSize: 20,
                    color: '#999',
                    marginTop: px(10)
                }}
            >
            {props.subTitle}
            </Text>
        </View>
    )
}
const Banner1 = (
    <View key={1}>
        <Header 
            title="有赞微商城 在手机上做生意" 
            subTitle="网上开店 网上营销 网上获取订单"
        />
        <View 
            style={{ 
                flex: 1,
                marginTop: -px(300),
                flexDirection:'row',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                justifyContent:'space-around'
            }}
        >
            <Image source={require('../../Images/logo1.png')}/>
            <Image source={require('../../Images/logo2.jpg')}/>
            <Image source={require('../../Images/logo3.png')}/>
            <Image source={require('../../Images/logo4.jpg')}/>
            <Image source={require('../../Images/logo5.jpg')}/>
        </View>
    </View>
)

const Banner2 = (
    <View key={2}>
        <Header 
            title="拍照即可上架商品" 
            subTitle="手机拍照，再设置价格即可开卖"
        />
    </View>
)

const Banner3 = (
    <View key={3}>
        <Header 
            title="发送给你的粉丝们" 
            subTitle="在微信、朋友圈、微博、QQ空间上出售"
        />
    </View>
)

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
                <ViewPagerAndroid
                    style={styles.page}
                    initialPage={0}
                    pageMargin={10}
                >
                    {[Banner1, Banner2, Banner3]}
                </ViewPagerAndroid>
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
        backgroundColor: '#fff'
    },
    page: {
        height: px(580),
    },
    title: {
        fontSize: 30,
    },
    footer: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent:'space-around'
    }
})