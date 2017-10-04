import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import Icon from '../icon';
import px from '../../common/px2dp';


export default class Input extends Component {

    constructor (props) {
        super(props)
        this.state = {
            secureTextEntry: false
        }
    }

    static propTypes = {
        placeholder: PropTypes.string,
    }


    componentDidMount () {
        if (this.props.type === 'password') {
            this.setState({
                secureTextEntry: true
            })
        }
    }

    showPassword = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }

    render () {
        const { placeholder,label, onChange, type, editable } = this.props;
        const { secureTextEntry  } = this.state;
        
        return (
            <View style={styles.container}>
                <Text
                    style={styles.text}
                >
                    {label}
                </Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={placeholder}
                    onChange={onChange}
                    secureTextEntry={secureTextEntry}
                    editable={editable}
                />
                {
                    type && type === 'password' ?
                    <View 
                        style={styles.icon}
                    >
                        <Icon 
                            type='attention_light'
                            color='#999'
                            onPress={this.showPassword}
                        />
                    </View>
                    : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#999'
    },
    icon: {
        marginRight: px(20),
        marginTop: px(10)
    },
    text: {
        flex: 1,
        fontSize: 20,
        paddingLeft: px(10),
        height: px(40),
        lineHeight: px(29),
    },
    input: {
        flex: 12,
        fontSize: 20,
        lineHeight: px(30),
    }
})