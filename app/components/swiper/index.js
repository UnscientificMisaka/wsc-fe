import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ScrollView, ViewPagerAndroid } from 'react-native';
import px from '../../common/px2dp';

export default class Swiper extends Component {
    static propTypes = {
        texts: PropTypes.array,
    }

    state = {

    }

    onPageScroll () {
        console.log('scroll')
    }

    renderScrollView () {
        return (
            <View style={{flex: 1}}>
            <Text>sdfs</Text>
            </View>
        //     <ViewPagerAndroid
        //         initialPage={0}
        //         onPageScroll={this.onPageScroll}
        //         horizontal={true}
        //         style={styles.swiper}
        //     >
        //         <View style={{flex: 1}}>
        //         {texts.map((item,index) => {
        //             return <Text key={index}>{item}</Text>
        //         })}
        //         </View>
        //    </ViewPagerAndroid>       
        )
    }

    render () {
        const {texts} = this.props;
        return (
            <View style={styles.container}>
                {texts.map((item,index) => {
                    return <Text key={index} style={styles.title}>{item}</Text>
                })}  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        padding: 20
    },
    container: {
        flex: 1,
        marginTop: 60,
        alignItems: 'center'
    },
    title: {
        fontSize: 18
    },
    swiper: {

    }
})