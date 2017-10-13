import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TextInput, Alert, TouchableNativeFeedback } from 'react-native';
import { Button, Input, Icon, ShopList } from '../../components';
import px from '../../common/px2dp';

export default class Choose extends Component {

    static navigationOptions = ({ navigation, screenProps}) => ({
        
        title: '选择店铺',
        headerRight: (
            <View style={{
                marginRight: px(10)
            }}
            >
                <Button
                    onPress = {() => navigation.navigate('Create')}
                    style={{
                        fontSize: 30,
                    }}
                    href
                >
                    创建
                </Button>
            </View>
        ),
        headerLeft: (
            <Icon 
                type="close" 
                marginLeft={px(10)} 
                onPress={() => {
                    Alert.alert('', '确定要登出',[{ text: '取消' }, {
                        text: '登出',
                        onPress: () => navigation.navigate('Signin')
                    }])}
                }
            />
        )

    });

    state = {
        data: [
            { logo: '', name: '零售特工队', id: 0 },
            { logo: '', name: '零售特工队', id: 1 },
            { logo: '', name: '零售特工队', id: 2 },
            { logo: '', name: '零售特工队', id: 3 },
            { logo: '', name: '零售特工队', id: 4 },
            { logo: '', name: '零售特工队', id: 5 },
            { logo: '', name: '零售特工队', id: 6 },
        ]
    }

    close = () => {
        return Alert.alert('', '确定要登出',[{ text: '取消' }, {
            text: '登出',
            // onPress: () => console.log('logout')
            // onPress: () => console.log('OK Pressed!')
        }])
    }

    onChoose = (data) => {
        this.props.navigation.navigate('Shop', {name: data.item.name})
    }



    render () {
        const { data } = this.state;
        return (
            <View>
                <Text style={styles.text}>我管理的店铺</Text>
                <ShopList 
                    data={data}
                    onChoose={this.onChoose}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        height: px(40),
        marginLeft: px(10),
        lineHeight: px(28)
    }
})