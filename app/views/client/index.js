import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native';
import { Button, Icon } from '../../components';
import Page from '../../components/page';
import px from '../../common/px2dp';

export default class Client extends Component {

    static navigationOptions = {
        title: '我的客户',
        headerRight: (
            <View style={{
                flexDirection: 'row'
            }}>
                <Icon
                    marginRight={px(20)}
                    type="search"
                    fontSize={40}
                />
                <Icon
                    marginRight={px(20)}
                    type="service"
                    fontSize={40}
                />
                <Icon
                    marginRight={px(10)}
                    type="settings"
                    fontSize={40}
                />
            </View>
        )
    };
    
    state = {

    }

    render () {
        return (
            <Page navigation={this.props.navigation}>
                <View style={styles.container}>
                    <View style={styles.tip}>
                        <Text style={styles.tipText}>
                            当前自动接入最多50人
                        </Text>
                    </View>
                    <View style={styles.notify}>
                        {/*@todo add image  */}
                        <Text>你必须在线才能接客~</Text>
                    </View>
                </View>
            </Page>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    tip: {
        paddingTop: px(5),
        paddingBottom: px(5),
        backgroundColor: '#fff'
    },
    tipText: {
        fontSize: 15
    },
    notify: {

    }
})