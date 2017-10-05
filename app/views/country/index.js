import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, SectionList, TouchableNativeFeedback } from 'react-native';
import { Icon } from '../../components';
import px from '../../common/px2dp';

export default class Country extends Component {

    static navigationOptions = {
        title: '选择国家或地区',
    };

    state = {
        prefix: '',
        // 暂时放这边
        data: [
            { title: 'A', data: ['阿根廷 + 54', '爱尔兰 +353', '澳大利亚 +61', '中国澳门 +853'] },
            { title: 'B', data: ['巴基斯坦 +92', '巴拿马 +507', '巴西 +52', '比利时 +32']},
            { title: 'D', data: ['丹麦 +45'] }
        ]
    }

    keyExtractor = item => item;

    select = (data) => {
        this.setState({
            prefix: data.item
        }, () => {
            return setTimeout(() => {
                this.props.navigation.navigate('Signin', {prefix: data.item})
            }, 1000)
        });
    }

    renderItem = (data) => {
        return (
            <TouchableNativeFeedback
                onPress={() => this.select(data)}
            >
                <View
                    style={styles.container}
                >
                    <Text 
                        key={data.index}
                        style={styles.item}
                    >
                        {data.item}
                    </Text>
                    {
                        this.state.prefix === data.item && 
                        <View style={styles.icon}>
                            <Icon type="check" color="red" fontSize={30} />
                        </View>
                    }
                </View>
            </TouchableNativeFeedback>
        )
    }

    renderSectionHeader = (data) => {
        return (
            <Text
                key={data.index}
                style={styles.header}
            >
                {data.section.title}
            </Text>
        )
    }

    render () {
        return (
            <View>
                <SectionList 
                    sections={this.state.data}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    onSectionSelect={this.select}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        height: px(30),
        fontWeight: '300',
        lineHeight: px(25),
        paddingLeft: px(10),
    },
    item: {
        flex:1,
        fontSize: 20,
        height: px(40),
        lineHeight: px(30),
        paddingLeft: px(10),
    },
    icon: {
        paddingRight: px(10),
        marginTop: px(10)
    },
    container: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
        flexDirection: 'row',
        backgroundColor: '#fff'
    }
})