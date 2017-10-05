import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, TouchableNativeFeedback, StyleSheet } from 'react-native';
import Icon from '../icon';
import px from '../../common/px2dp';

export default class ShopList extends Component {

    static propTypes = {
        data: PropTypes.array,
    }
    
    renderItem = (data) => {
        const { onChoose } = this.props
        return (
            <TouchableNativeFeedback
                onPress={() => onChoose(data)}
            >
                <View
                    style={styles.item}
                >
                    <View
                        style={styles.icon}
                    >
                        <Icon type="shoplight" fontSize={40} />
                    </View>
                    <Text style={styles.name}>{data.item.name}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
    
    keyExtractor = item => item.id;

    render () {
        const { data } = this.props;
        return (
            <FlatList 
                data={data}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
            />
        )
    }
}

const styles = StyleSheet.create({
    name: {
        fontSize: 25,
    },
    item: {
        flex: 1,
        paddingTop: px(15),
        paddingLeft: px(10),
        height: px(50),
        borderBottomWidth: 1,
        borderBottomColor: '#999',
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    icon: {
        marginTop: px(-5),
        marginRight: px(20)
    }
})