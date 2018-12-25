import React, { Component } from "react";
import {View, ScrollView } from 'react-native'
import { Content,Text, Row, Col, Card, CardItem, Left,Right, Body, Thumbnail } from "native-base";
import { Colors,  Images } from "../../../Themes";
import styles from './styles/dailyChecksStyles';
export default class DailyChecks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  render() {
    return (
        <View>
            <ScrollView>
        <Card>
            <CardItem>
            <Left>
                <Thumbnail source={Images.logoJhipster} />
                <Text note>Admin</Text>
            </Left>
            <Body>
                <CardItem>
                <Col>
                <Text style={{color: Colors.violet}}>Check In</Text>
                <Text note>8:00 AM</Text>
                </Col>
                <Col>
                <Text style={{color: Colors.violet}}>Check In</Text>
                <Text note>12:00 AM</Text>
                </Col>
                </CardItem>
                </Body>
            <Right>
                <View style={styles.total}>
                 
                <Text style={styles.totalText}>5 Hrs</Text>
                </View>
            </Right>
         </CardItem>
        </Card>
        <Card>
            <CardItem>
            <Left>
                <Thumbnail source={Images.logoJhipster} />
                <Text note>Admin</Text>
            </Left>
            <Body>
                <CardItem>
                <Col>
                <Text style={{color: Colors.violet}}>Check In</Text>
                <Text note>8:00 AM</Text>
                </Col>
                <Col>
                <Text style={{color: Colors.violet}}>Check In</Text>
                <Text note>12:00 AM</Text>
                </Col>
                </CardItem>
                </Body>
            <Right>
                <View style={styles.total}>
                 
                <Text style={styles.totalText}>5 Hrs</Text>
                </View>
            </Right>
         </CardItem>
        </Card>
        <Card>
            <CardItem>
            <Left>
                <Thumbnail source={Images.logoJhipster} />
                <Text note>Admin</Text>
            </Left>
            <Body>
                <CardItem>
                <Col>
                <Text style={{color: Colors.violet}}>Check In</Text>
                <Text note>8:00 AM</Text>
                </Col>
                <Col>
                <Text style={{color: Colors.violet}}>Check In</Text>
                <Text note>12:00 AM</Text>
                </Col>
                </CardItem>
                </Body>
            <Right>
                <View style={styles.total}>
                 
                <Text style={styles.totalText}>5 Hrs</Text>
                </View>
            </Right>
         </CardItem>
        </Card>
         
</ScrollView>
</View>
    );
  }
}