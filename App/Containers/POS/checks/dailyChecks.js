import React, { Component } from "react";
import {View, ScrollView, FlatList } from 'react-native'
import { Content,Text, Row, Col, Card, CardItem, Left,Right, Body, Thumbnail } from "native-base";
import { Colors,  Images } from "../../../Themes";
import styles from './styles/dailyChecksStyles';
export default class DailyChecks extends Component {
 
 
    constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  _renderdata = (item) =>{
       return(
       <ScrollView>
        <Card>
        <CardItem>
        <Left>
            <Thumbnail source={Images.logoJhipster} />
            <Text note>{item.id}</Text>
        </Left>
        <Body>
            <CardItem>
            <Col>
            <Text style={{color: Colors.violet}}>Check In</Text>
            <Text note>{item.checkinTime}</Text>
            </Col>
            <Col>
            <Text style={{color: Colors.violet}}>Check In</Text>
            <Text note>{item.checkOutTime}</Text>
            </Col>
            </CardItem>
            </Body>
        <Right>
            <View style={styles.total}>
             
            <Text style={styles.totalText}>{item.overTimeHoursWorked}</Text>
            </View>
        </Right>
     </CardItem>
    </Card>
    </ScrollView>

       )
  }
  
  render() {
      console.tron.log('maxaa dhacay',this.props.data)
    return (
    <View>
      <FlatList
        data={this.props.data}
        renderItem={(item)=>this._renderdata(item)}
        keyExtractor={item => item.id}
        />

        
    </View>
    );
  }
}