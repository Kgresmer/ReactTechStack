import React, { Component } from 'react';
import { CardSection } from './common';
import { Text } from 'react-native';
import * as actions from '../actions';
import {connect } from 'react-redux';

class ListItem extends Component {
    render() {
        const {titleStyle } = styles;

        return (
            <CardSection>
                <Text style={titleStyle}>
                    {this.props.library.title}
                </Text>
            </CardSection>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

// 97 5:08

export default connect()(ListItem);