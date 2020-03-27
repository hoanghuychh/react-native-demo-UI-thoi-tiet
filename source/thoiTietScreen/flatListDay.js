import React, { Component } from "react";
import {
    View,
    Text,
    Dimensions,
    FlatList,
    StyleSheet,
    ScrollView
} from 'react-native'
import { Image } from 'react-native-elements'
import { dataDay, dataHour } from './../data/dataThoiTiet';
import FlatListHorizontalHour from './flatListHour'
import s from './style'

export default class FlatListDay extends Component {
    constructor() {
        super()
        this.state = {
            itemDay: "null",
            TouchDown: false
        }
    }
    componentWillMount() {

        this.setState({ itemDay: this.props.item });
        var pathIcon = this.state.itemDay.IconWeather;
    }
    render() {
        console.log("color item"+this.state.itemDay.Color)

        console.log("icon"+this.state.itemDay.IconWeather);
        return (
            <View style={{ width: '100%', margin: 5 }} >
                <View style={this.state.TouchDown ? s.TouchUp : s.TouchDownThu}
                    onTouchEndCapture={() => {
                        this.setState({ TouchDown: !this.state.TouchDown })
                    }}>
                    <View style={this.state.TouchDown ? s.TouchUp :{ width: '50%' }} >
                        <Text style={this.state.TouchDown ? s.TouchUp :s.whiteText16}>{this.state.itemDay.Thu}</Text>
                        <Text style={this.state.TouchDown ? s.TouchUp :s.whiteText14}>{this.state.itemDay.ThoiTiet}</Text>
                    </View>
                    <View style={this.state.TouchDown ? s.TouchUp :{ width: '20%',justifyContent:'center' }}>
                        <View style={this.state.TouchDown ? s.TouchUp :{ width: 54, height: 20, borderRadius: 4, backgroundColor:'#FF881B' }}>
                            <Text style={this.state.TouchDown ? s.TouchUp :s.whiteText14}>{this.state.itemDay.Bui}</Text>
                        </View>
                    </View>
                    <View style={this.state.TouchDown ? s.TouchUp :{ width: '30%', flexDirection: 'row' }}>
                        {/* <Image style={{ width: 24, height: 24, marginLeft: 40 }} source={require('./../data/icon/sunny.png')}></Image> */}
                        <Image style={this.state.TouchDown ? s.TouchUp :{ width: 24, height: 24, marginRight: 5 }} source={require('./../data/icon/cloud.png')} />
                        <Text style={this.state.TouchDown ? s.TouchUp :s.whiteText16}>{this.state.itemDay.NhietDoTB}</Text>
                    </View>
                </View>
                <View style={this.state.TouchDown ? s.TouchDownChiTiet : s.TouchUp}>

                    <View style={{ width: '100%', height: 30, flexDirection: 'row' }} 
                        onTouchEndCapture={() => {
                        this.setState({ TouchDown: !this.state.TouchDown })
                    }}>
                        <View style={{width:'80%'}}>
                            <Text style={s.whiteText16}>{this.state.itemDay.Thu}</Text>
                        </View>
                        <View style={{}}>
                            <Text style={s.whiteText16}>ºC/ºF</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#2c2c2cc2 ' }}></View>
                    <View style={{ widht: '100%', height: 170 }}>
                        {<FlatList style={{ flex: 1 }}
                            data={dataHour}
                            horizontal={true}
                            renderItem={({ item }) => {
                                return (
                                    <FlatListHorizontalHour
                                        item={item}
                                    />
                                )
                            }}
                        />}
                    </View>
                </View>
                <View style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#2c2c2cc2 ' }}></View>
            </View>

        )
    }
}

{/* <ScrollView horizontal={true}
                        >
                        {
                            dataHour.map(el=>{
                                return (
                                    <FlatListHorizontalHour
                                        item={el}
                                    />
                                )
                            })
                        }
                        </ScrollView> */}