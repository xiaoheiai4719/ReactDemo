import React, { Component } from 'react';
import { Text,View,StyleSheet,TextInput,ListView,AppRegistry} from 'react-native';
class TuJiaRoomRate extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      });
      this.state={ 
        dataSource: ds,
        data:this.props.rateListArray,

      }
  }

  render() {
    return (
      <ListView  dataSource={this.state.dataSource.cloneWithRows(this.state.data)}  
        renderRow={this._renderRow} />
    );
  }
  _renderRow(rowData: Object, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
    

    if (rowID==0) {
      return(
        <View style={styles.rateListHeadCell}>
        <Text style={styles.rateListHeadCellRateText}>¥{rowData.totalFee}</Text>
        <Text style={styles.rateListHeadCellNameText}>{rowData.houseName}</Text>
        </View>
    );
   }else{
    return(
      <View style={styles.rateListCell}>
      <View>
      <Text  style={styles.rateListDateText}>{rowData.priceDate}</Text>
      <Text  style={styles.rateListWeekendText}>{rowData.priceWeekend}</Text>
      </View>
      <View  style={styles.rateListRateView}>
      <Text  style={styles.rateListRateFrame}>
      <Text style={styles.rateTextMoney}>¥</Text>
      <Text style={styles.rateListRateText}>{rowData.priceAmount}</Text>
      <Text style={styles.rateTextMultiply}>×</Text>
      <Text style={styles.rateTextRoomCount}> {rowData.roomCount}套</Text>
      </Text>
      </View>
      </View>
    );


    }
  }
}

const styles = StyleSheet.create({
  rateListHeadCell:{
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#F7FAFA',

  },
  rateListHeadCellRateText:{
      color:'#ff6600',
      fontSize:45,
      textAlign:'center',
      marginTop:50,


  },
  rateListHeadCellNameText:{
      color:'#555555',
      fontSize:15,
      textAlign:'center',
      marginTop:25,
      marginBottom:50,
      marginLeft:40,
      marginRight:40,

   },
   rateListCell:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:0.5,
    borderBottomColor:'#CACACA'

   },
   rateListDateText:{
    color:'#333333',
    marginTop:20,
    marginLeft:30,
    fontSize:18,
  },
  rateListWeekendText:{
    color:'#888888',
    marginTop:20,
    marginLeft:30,
    marginBottom:20,
    fontSize:14,
  },
  rateListRateView:{
      alignItems:'center',
      justifyContent:'center',

 },

 rateListRateFrame:{
    marginRight:30,
    alignItems:'center',



 },
  rateListRateText:{
    color:'#ff6600',
    fontSize:24,
  },
  rateTextMoney:{
    color:'#ff6600',
    fontSize:10,
  },
  rateTextMultiply:{
    color:'#ff6600',
    fontSize:10,
  },
  rateTextRoomCount:{
    color:'#ff6600',
    fontSize:15,
  },

});
AppRegistry.registerComponent('TuJiaRoomRate', () => TuJiaRoomRate);