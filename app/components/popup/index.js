import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ART, Dimensions } from 'react-native';
import px from '../../common/px2dp';

const { width, height } = Dimensions.get('window');
let wrapHeight = px(70);
let wrapWidth = px(70);

export default class PopUp extends Component {

    constructor (props) {
        super(props);
        this.state = {
            visible: this.props.visible
        }
        wrapHeight = this.props.wrapHeight || px(70);
        wrapWidth = this.props.wrapWidth || px(100);
    }

    render () {
        return (
            <View style={styles.container}>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.props.show || true}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                <TouchableOpacity>
                    <View
                        style={styles.modal}
                    >
                        <Text style={styles.text}>popup</Text>
                    </View>
                </TouchableOpacity>
                </Modal>
            </View>
        )
    }
}
console.log(wrapHeight, wrapWidth)
const styles = StyleSheet.create({
    container: {
        height,
        width,
    },
    modal: {
        backgroundColor: '#2d2d2d',
        height: 100,
        width: 200,
        position: 'absolute',
        top: 50,
    },
    text: {
        color: '#fff'
    }
})