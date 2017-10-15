import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image, TouchableNativeFeedback, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon, Popup } from '../../components';
import Page from '../../components/page';
import px from '../../common/px2dp';

const { width, height } = Dimensions.get('window');
class Dashboard extends Component {
    render () {
        return (
            <LinearGradient 
                style={styles.dashborad}
                colors={['#87CEFA', '#1E90FF']}
            >
                <Text style={styles.title}>今日付款金额（元）</Text>
                <Text style={styles.total}>0.00</Text>
                <View style={styles.statistics}>
                    <View>
                        <Text style={[styles.text, styles.labelText]}>浏览人数</Text>
                        <Text style={[styles.text, styles.numText]}>0</Text>
                    </View>
                    <View>
                        <Text style={[styles.text, styles.labelText]}>待付款订单数</Text>
                        <Text style={[styles.text, styles.numText]}>0</Text>
                    </View>
                    <View>
                        <Text style={[styles.text, styles.lastText]}>付款件数</Text>
                        <Text style={[styles.text, styles.numText]}>0</Text>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

class Notify extends Component {

    state = {
        deliver: 9,
        safegurad: 101,
    }

    render () {
        const { deliver, safegurad } = this.state;
        return (
            <View style={styles.notify}>
                {
                    deliver ? 
                    <View style={styles.block}>
                        <Icon type="info" fontSize={40} color="red" marginRight={px(10)}/>
                        <Text style={styles.blockText}>维权订单</Text>
                        <View style={styles.pop}>
                            <Text style={styles.popText}>{safegurad > 99 ? '99+' : safegurad}</Text>
                        </View>
                    </View>
                    : null
                }
                {
                    this.state.safegurad ? 
                    <View style={styles.block}>
                        <Icon type="info" fontSize={40} color="red" marginRight={px(10)}/>
                        <Text style={styles.blockText}>待发货</Text>
                        <View style={styles.pop}>
                            <Text style={styles.popText}>{deliver > 99 ? '99+' : deliver}</Text>
                        </View>
                    </View>
                    : null
                }
            </View>
        )
    }
}

class Panel extends Component {
    content = [{
        img: '',
        text: '店铺管理',
        link: 'shoplist'
    },{
        img: '',
        text: '商品管理',
        link: 'shoplist'
    },,{
        img: '',
        text: '订单管理',
        link: 'shoplist'
    },,{
        img: '',
        text: '微商城收款',
        link: 'shoplist'
    },,{
        img: '',
        text: '扫码核销',
        link: 'shoplist'
    },,{
        img: '',
        text: '资产',
        link: 'shoplist'
    },,{
        img: '',
        text: '数据统计',
        link: 'shoplist'
    },,{
        img: '',
        text: '经营周报',
        link: 'shoplist'
    }]

    render () {
        return (
            <View style={styles.panel}>
                {this.content.map((item, index) => {
                    return (
                        <TouchableNativeFeedback
                            key={index}
                        >
                            <View style={styles.card}>
                                <Icon type="shop_light" fontSize={40}/>
                                <Text>{item.text}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    )
                })}
            </View>
        )
    }
}
export default class Shop extends Component {

    static navigationOptions = ({ navigation, screenProps}) => ({
        title: navigation.state.params.name,
        headerLeft: (
            <Image 
                style={{
                    marginLeft: px(10),
                    width: 40,
                    height: 40
                }}
                source={require('../../Images/youzan.jpg')}
            />
        ),
        headerRight: (
            <Icon
                marginRight={px(10)}
                type="add_light"
                fontSize={40}
            />
        )
    });

    render () {
        return (
            <Page navigation={this.props.navigation}>
                <Dashboard />
                <Notify />
                <Panel />
            </Page>
        )       
    }
}

const styles = StyleSheet.create({
    dashborad: {
        height: px(180),
    },
    panel: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'flex-start',
    },
    card: {
        alignItems: 'center',
        width: width / 3,
        height: px(95),
    },
    title: {
        marginTop: px(20),
        textAlign: 'center',
        fontSize: 25,
        color: '#fff'
    },
    total: {
        marginTop: px(10),
        fontSize: px(40),
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
    statistics: {
        marginTop: px(15),
        display: 'flex',
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent:'space-around'   
    },
    labelText: {
        width: px(170),
        borderRightWidth: 1,
        borderRightColor: '#fff'
    },
    lastText: {
        width: px(170),
    },
    numText: {
        marginTop: px(10),
        fontWeight: '700'
    },
    notify: {
        marginTop: px(15),
        height: px(50),
        flexDirection:'row',
        backgroundColor: '#fff',
    },
    block: {
        flex: 1,
        justifyContent: 'center',
        borderRightColor: '#eee',
        borderRightWidth: 1,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        flexDirection:'row',
        alignItems: 'center',
    },
    blockText: {
        textAlign: 'center',
        fontSize: 25,
    },
    pop: {
        marginLeft: px(10),
        backgroundColor: 'red',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'red',
        width: 30,
        height: 30,
    },
    popText: {
        textAlign: 'center',
        lineHeight: 25,
        fontSize: 16,
        color: '#fff'
    },
})