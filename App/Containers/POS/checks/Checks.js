import React from 'react';
import { Alert, ScrollView,  TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/checksStyles'
import t from 'tcomb-form-native';
import { Container,Button, Header, Tabs, Row, Tab, Content, List, ListItem, Text,  Left, Body, Right, Switch, Icon } from 'native-base';
import DailyChecks from './dailyChecks';
import WeeklyChecks from './weeklyChecks';
import MonthlyChecks from './monthlyChecks';
import { Colors } from '../../../Themes';
 
 class ChecksScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state={
      account:null
    }
  }



 
 
  render() {

    return (
      <Container>
        <Content>
          <Row style={styles.checksbutton}>
          <Button style={styles.checkin} block >
          <Icon name="alarm-off" type="MaterialIcons" style={styles.icon}/>
            <Text>Check Out</Text>
          </Button>
          <Button style={styles.checkout} block>
            <Icon name="alarm-on" type="MaterialIcons" style={styles.icon}/>
            <Text> Check In</Text>
          </Button>
          </Row>
      <Tabs>
          <Tab heading="Day">
            <DailyChecks />
          </Tab>
          <Tab heading="Week">
            <WeeklyChecks />
          </Tab>
          <Tab heading="Monthly">
            <MonthlyChecks />
          </Tab>
        </Tabs>
        </Content>
    </Container>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ChecksScreen);
