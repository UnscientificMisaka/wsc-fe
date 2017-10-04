import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import px from '../../common/px2dp';

export default class Country extends Component {

    static navigationOptions = {
        title: '选择国家或地区'
    };

    state = {
        // 暂时放这边
        data: [
            { title: 'A', data: ['阿根廷 + 54', '爱尔兰 +353', '澳大利亚 +61', '中国澳门 +853'] },
            { title: 'B', data: ['巴基斯坦 +92', '巴拿马 +507', '巴西 +52', '比利时 +32']},
            { title: 'D', data: ['丹麦 +45'] }
        ]
    }

    renderItem = (data) => {
        return (
            <Text 
                key={data.index}
                style={styles.item}
            >
                {data.item}
            </Text>
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
        borderBottomWidth: 1,
        borderBottomColor: '#999',
        fontSize: 20,
        height: px(40),
        lineHeight: px(30),
        paddingLeft: px(10),
        backgroundColor: '#fff'
    }
})