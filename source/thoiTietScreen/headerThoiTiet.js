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
import s from './style'
export default class HeaderThoiTiet extends Component {
    constructor() {
        super()
        this.state = {
            isMapDown: false,
            isSearch: false,
        }
    }
    render() {
        let day = new Date().getDay() + 1;
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        return (
            <View style={{ width: '100%', top: 30 }}>
                <View style={{ flexDirection: 'row', width: '100%', }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={s.whiteText17} >Hà Nội</Text>
                    </View>
                    <View style={{ right: 10, position: 'absolute', flexDirection: 'row' }}>
                        <Image
                            style={
                                {
                                    width: 30,
                                    height: 30,
                                    margin: 5
                                }}
                            source={require('./../data/icon/search.png')}
                            onTouchStart={() => {

                            }}
                        />
                        <Image style={
                            {
                                width: 30,
                                height: 30,
                                margin: 5
                            }}
                            source={require('./../data/icon/map.png')}
                            onTouchStart={() => {

                            }}
                        />
                    </View>
                </View>
                <View style={this.state.isMapDown ? {alignItems: 'center'} : style.mapDown}>
                    <Text style={s.whiteText16}>Thứ {day},{date}/{month}/{year}</Text>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    mapDown: {
        width: '100%',
        height: '33%',
        position: 'absolute',
        zIndex: 1
    },
    mapUp: {
        
    }
})