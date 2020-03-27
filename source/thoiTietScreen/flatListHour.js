import React, { Component } from "react";
import {
    View,
    Text,
    Dimensions,
    FlatList,
    StyleSheet,
} from 'react-native'
import {Image} from 'react-native-elements'
import { dataDay, dataHour } from './../data/dataThoiTiet';
import s from './style';

export default class FlatListHorizontalHour extends Component {
    constructor() {
        super()
        this.state = {
            itemHour: "null"
        }
    }
    componentWillMount() {
        this.setState({itemHour:this.props.item}) 
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 70,
                    margin: 5,
                    marginVertical:10
                }}>
                <Text style={style.whiteText14m}>{this.state.itemHour.Hour}</Text>
                <View style={{ width: 60, height: 20, borderRadius: 4, backgroundColor: '#FF881B' }}>
                    <Text style={{color: '#FFFFFF',}}>{this.state.itemHour.Bui}</Text>
                </View>
                <Image style={{ width: 20, height: 20 }} source={require('./../data/icon/sunny.png')}></Image>
                <Text  style={style.whiteText14m}>{this.state.itemHour.NhietDo}º</Text>
                <Text style={style.whiteText14m}>{this.state.itemHour.Gio}km/h</Text>
                <Text style={style.whiteText14m}>{this.state.itemHour.DoAm}%</Text>
            </View>
        )
    }
}
const style = StyleSheet.create({
    whiteText14m: {
        fontSize: 15,
        color: '#FFFFFF',
        margin:5
    },
});