import React, { Component } from "react";
import {View, ScrollView, FlatList} from 'react-native'
import { Content,Text, Row, Col, Card, CardItem, Left,Right, Body, Thumbnail } from "native-base";
import { Colors,  Images } from "../../../Themes";
import styles from './styles/dailyChecksStyles';


export default class DailyTimesheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  
      
    

 
render(){
    const item = this.props.data;
    console.tron.log("hhhhhh", item)
    return(
        <View>
        <ScrollView>
        <Card>
            <CardItem>
            <Left>
                 <Text note>{item.profileFirstName}</Text>
            </Left>
            <Body>
                <CardItem>
                <Col>
                <Text style={{color: Colors.violet}}>Check In</Text>
                <Text note>{item.checkinTime}</Text>
                </Col>
                <Col></Col>
                <Col>
                <Text style={{color: Colors.violet}}>Check In</Text>
                <Text note>{item.checkOutTime}</Text>
                </Col>
                </CardItem>
                </Body>
            <Right>
                <View style={styles.total}>
                 
                <Text style={styles.totalText}>{item.regularHoursWorked}</Text>
                </View>
            </Right>
         </CardItem>
        </Card>
        
        </ScrollView>
        </View>
    )
}





}