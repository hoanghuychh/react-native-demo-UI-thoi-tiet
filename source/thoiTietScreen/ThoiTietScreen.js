import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions,
    FlatList,
    StyleSheet
} from 'react-native'
import { Icon, Image } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import ProgressCircle from 'react-native-progress-circle'
import DuBaoThoiTiet from './duBaoThoiTiet'
import ContentMain from './contentMain'
import HeaderThoiTiet from './headerThoiTiet'
import s from './style'

export default class ThoiTietScreen extends Component {
    static navigationOptions = {
        headerTransparent: true,
        Top: 200,
    }
    constructor() {
        super()
    }
    componentWillMount() {
    }
    render() {

        let widthScreen = Dimensions.get('window').width;
        let heightScreen = Dimensions.get('window').height;
        return (
            <ScrollView >
                <View style={{ alignItems: 'center' }}>

                    <View style={{ flex: 1, position: "absolute" }}>
                        <Image style={{ width: widthScreen, height: heightScreen }} source={require('./../data/image/bg.png')} />
                        <Image style={{ width: widthScreen, height: heightScreen}} source={require('./../data/image/bg.png')} />
                    </View>
                    <View style={{ flex: 1, width: '100%', height: Dimensions.get('window').height,alignItems: 'center'  }}>
                        <HeaderThoiTiet></HeaderThoiTiet>
                        <ContentMain></ContentMain>
                        <View style={{ width: '100%', marginTop: 20, height: 100, opacity: 0.6, backgroundColor: '#333333', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={s.whiteText24}>DỰ BÁO THỜI TIẾT</Text>
                        </View> 
                    </View>
                    <View style={{ flex: 1, width: '100%', height: Dimensions.get('window').height, opacity: 0.6, backgroundColor: '#333333', alignItems: 'center' }}>

                        <DuBaoThoiTiet></DuBaoThoiTiet>
                    </View>

                </View>

            </ScrollView>
        )
    }

}