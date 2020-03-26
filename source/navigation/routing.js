import React,{Component} from 'react'
import { View, Text,Button } from 'react-native';
import {createStackNavigator ,createAppContainer} from 'react-navigation'
import ThoiTietScreen from '../thoiTietScreen/ThoiTietScreen';
class Routing extends Component{
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
              title="Go to Thời tiết"
              onPress={() => {
                this.props.navigation.navigate('ThoiTietScreen');
              }}
            />
          </View>
        )
    }
}

const AppNavigator=createStackNavigator(
    {
        Home:Routing,
        ThoiTietScreen:ThoiTietScreen
    },
    {
        initialRouteName:"ThoiTietScreen",
    }
)
export default createAppContainer(AppNavigator);