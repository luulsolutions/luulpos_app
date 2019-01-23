import React from 'react';
import { Alert, ScrollView,  TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/checksStyles'
import t from 'tcomb-form-native';
import { Container,Button, Header, Tabs, Row, Tab, Content, List, ListItem, Text,  Left, Body, Right, Switch, Icon } from 'native-base';
import EmployeeTimesheetReduxActions from '../../../Redux/EmployeeTimesheetRedux';
import DailyChecks from './dailyChecks';
import WeeklyChecks from './weeklyChecks';
import MonthlyChecks from './monthlyChecks';
import { Colors } from '../../../Themes';
 
 class ChecksScreen extends React.Component {
   
  constructor(props) {
    super(props);
  }
   
  state = {
    fetchingOne:null,
    fetchingAll:null,
    employeeTimesheet: [],
    employeeTimesheets:[],
    dataSource: [],
    checkin:'',
     

  }
   
  componentDidMount(){
    this.props.employeeTimesheetAllRequest()
    const array = this.props.employeeTimesheets;
    this.setState({
      dataSource: array

    })
  }
 
   Alldata = ()=>{
     const employeeTimesheet = {
      checkinTime:this.state.checkin,
      checkOutTime:new Date(),
      regularHoursWorked:null,
      overTimeHoursWorked:null,
      pay:null,
      profileId:null,
      profileFirstName:null,
      shopId:null,
      shopShopName:null,
     }
     this.props.employeeTimesheetCreate(employeeTimesheet)
   }




  render() {
     
    console.tron.log('kkkk', this.state.dataSource)
     return (
      <Container>
        <Content>
          <Row style={styles.checksbutton}>
          
            {!this.state.checkin ?
                (
                <Button style={styles.checkin} block onPress={()=> this.setState({checkin:new Date()})
                }>
                  <Icon name="alarm-off" type="MaterialIcons" style={styles.icon}/>
                  <Text>Check In</Text>
                </Button>
              ):(
                <Button style={styles.checkout} block onPress={()=> this.Alldata()}>
                <Icon name="alarm-on" type="MaterialIcons" style={styles.icon} />
                <Text> Check Out</Text>
              </Button>
              )
            }
          
          
          
          </Row>
      <Tabs>
          <Tab heading="Day">
            <DailyChecks data={this.state.dataSource.employeeTimesheets} />
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

 

const mapStateToProps = (state) => ({
  
    
    employeeTimesheet: state.employeeTimesheet,
    employeeTimesheets: state.employeeTimesheets
  
})

const mapDispatchToProps = (dispatch) => {
  return {
    employeeTimesheetAllRequest: () => dispatch(EmployeeTimesheetReduxActions.employeeTimesheetAllRequest()),
    employeeTimesheetCreate: (employeeTimesheet) => dispatch(EmployeeTimesheetReduxActions.employeeTimesheetCreate(employeeTimesheet)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChecksScreen);
