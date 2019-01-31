import React from 'react';
import { Alert, ScrollView, FlatList,  TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/checksStyles'
import t from 'tcomb-form-native';
import _ from 'lodash'
import { Container,Button, Header, Tabs, Row, Tab, Content, List, ListItem, Text,  Left, Body, Right, Switch, Icon } from 'native-base';
import EmployeeTimesheetReduxActions from '../../../Redux/EmployeeTimesheetRedux';
import DailyTimesheet from '../../../Components/POS/Employeetimesheet/dailytimesheet';
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
    fullProfile:[],
      

  }
 
  componentWillMount(){
    this.props.employeeTimesheetAllRequest()
    const array = this.props.employeeTimesheets ? _.values(this.props.employeeTimesheets.employeeTimesheets) : [];
    this.setState({
      dataSource: array
    })
  }
 
   checkin = ()=>{
     const employeeTimesheet = {
      checkinTime:new Date(),
      checkOutTime:null,
      profileId:this.state.fullProfile.id,
      profileFirstName:this.state.fullProfile.firstName,
      shopId:this.state.fullProfile.shopId,
      shopShopName:this.state.fullProfile.shopShopName,
     }
     this.props.employeeTimesheetCreate(employeeTimesheet)
   }


   _renderitem = ({ item })=> {
     return(
      <DailyTimesheet data={item} />
     )
   }

  render() {
     
    console.tron.log('kkkk', this.state.dataSource)
     return (
      <Container>
        <Content>
          <Row style={styles.checksbutton}>
          
            {this.state.dataSource ?
                (
                <Button style={styles.checkin} block onPress={()=> this.checkin()}
                >
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

           <FlatList 
            data={this.state.dataSource}
            renderItem={this._renderitem}
            keyExtractor={this.keyExtractor}
            initialNumToRender={this.oneScreensWorth}
            onEndThreshold={100}
            ListHeaderComponent={this._renderHeader}
            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={this.renderSeparator}

         />
           
          </Tab>
          <Tab heading="Week">
          <FlatList 
            data={this.props.dataSource}
            renderItem={this._renderitem}
            keyExtractor={this.keyExtractor}
            initialNumToRender={this.oneScreensWorth}
            onEndThreshold={100}
            ListHeaderComponent={this._renderHeader}
            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={this.renderSeparator}

         />
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
  
    fullProfile: state.profiles.fullProfile,
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
