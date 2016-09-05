import React, { Component } from 'react';
import { AppRegistry, Text,View,StyleSheet } from 'react-native';

class ReactDemo extends Component {
  render() {
    return (
    	<View style={styles.container}>
    	<View style={styles.first}/>
		<View style={styles.Second}/>
		<View style={styles.Third}/>
		</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'row',
    flexDirection:'column',
    justifyContent 'space-between',
	},
  first:{
  	flex:1,
  	backgroundColor:'#444444',

  },
  Second:{
  	flex: 4,
  	backgroundColor:'#333333',
	},
  Third:{
  	flex: 3,
  	backgroundColor:'#666666',
	}


});

// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('ReactDemo', () => ReactDemo);