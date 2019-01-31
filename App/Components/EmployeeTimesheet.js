import React, { Component } from "react";
import {View, ScrollView, FlatList,ListView } from 'react-native'
import { Content,Text, Row, Col, Card, CardItem, Left,Right, Body, Thumbnail } from "native-base";
import GridView from 'react-native-super-grid'
 export default class EmployeeTimeSheet extends Component {
 
 
    constructor(props) {
    super(props);
    this.state = {
      
    };
  }

 
  
  render() {
      const item = this.props.data
    return(
        <View>
        <Row>
            <Col style={{ backgroundColor: '#635DB7', height: 20}}><Text>{item.id}</Text></Col>
        </Row>
        <Row>  
           <Col style={{ backgroundColor: '#00CE9F', height: 20 }}><Text>{item.checkinTime} </Text></Col>
        </Row>
        <Row>
         <Col style={{ backgroundColor: '#00CE9F', height: 20 }}><Text>{item.checkoutTime} </Text></Col>
        </Row>
        <Row>
         <Col style={{ backgroundColor: '#00CE9F', height: 20 }}><Text>{item.profileFirstName} </Text></Col>
        </Row>
        <Row>    
            <Col style={{ backgroundColor: '#00CE9F', height: 20 }}><Text>{item.shopShopName} </Text></Col>
        </Row>
        </View>
  
        )
  }
}
