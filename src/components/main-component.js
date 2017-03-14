'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class MainComponent extends Component {
	constructor(props) {
	  	super(props);
	
	}
	componentDidMount() {
	  this.props.getWeatherToday();
	}
    render() {
        return ( 
        	<View style={styles.container}>
		        <Text style={styles.welcome}>
		          Welcome to React Native!
		        </Text>
		        <Text style={styles.instructions}>
		          The weather is {this.props.weatherToday}
		        </Text>
		        <Text style={styles.instructions}>
		          Press Cmd+R to reload,{'\n'}
		          Cmd+D or shake for dev menu
		        </Text>
		    </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const mapStateToProps = (state) => {
	return {
		weatherToday: state.currentWeather
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
