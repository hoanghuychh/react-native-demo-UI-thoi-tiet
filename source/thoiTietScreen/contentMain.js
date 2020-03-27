import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions,
    FlatList,
    StyleSheet,
    Button
} from 'react-native'
import { Icon, Image } from 'react-native-elements';
import ProgressCircle from 'react-native-progress-circle'
import s from './style'

export default class ContentMain extends Component {
    render() {
        return (
            <View style={{ width: '90%', height: '54%', marginTop: 160, marginBottom: 50, backgroundColor: '#2c2c2c94', borderRadius: 16, alignItems: 'center' }}>
                <View style={{ top: -82, height: 120, }}>
                    <ProgressCircle
                        percent={0}
                        radius={85}
                        borderWidth={10}
                        color="#fff0"
                        shadowColor="#fdfdfd1f"
                        // bgColor="#fff0"
                    >

                        <ProgressCircle
                            percent={57}
                            radius={75}
                            borderWidth={17}
                            color="#FA6767"
                            // bgColor="#fef0f0"
                            shadowColor="#ffffff"
                        >
                            <View style={{ alignItems: 'center', justifyContent: 'center', width: 1000, height: 1000, backgroundColor: '#fef0f0' }}>
                                <Text style={{ fontSize: 33, fontWeight: 'bold', color: '#FA6767' }}>172</Text>
                                <Text style={{ color: '#FA6767' }}>Nguy hại</Text>
                                <Image style={{}} source={require('../data/icon/toxic.png')} />
                            </View>
                        </ProgressCircle>
                    </ProgressCircle>
                </View>
                <View style={{ width: '90%' }}>
                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        <View style={{ width: '50%', left: 0 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={s.whiteText20}>26º</Text>
                                <Image style={{ width: 24, height: 24 }} source={require('./../data/icon/sunny.png')}></Image>
                            </View>
                            <Text style={s.whiteText14}>Nắng, ít mây</Text>
                        </View>
                        <View style={{ width: '50%', right: 0 }}>
                            <View style={{ width: '50%', flexDirection: "row" }}>
                                <Image style={{ width: 24, height: 24, }} source={require('./../data/icon/sun-UV.png')}></Image>
                                <Text style={s.whiteText14}> 2.4</Text>
                                <Image style={{ width: 24, height: 24, marginLeft: 40 }} source={require('./../data/icon/hudimity.png')}></Image>
                                <Text style={s.whiteText14}> 20%</Text>
                            </View>
                            <View style={{ width: '50%', flexDirection: "row" }}>
                                <Image style={{ width: 24, height: 24, }} source={require('./../data/icon/wind.png')}></Image>
                                <Text style={s.whiteText14}> 8km/h</Text>
                                <Image style={{ width: 24, height: 24, marginLeft: 20 }} source={require('./../data/icon/wet.png')}></Image>
                                <Text style={s.whiteText14}> 24ml</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderWidth: 1, borderBottomColor: 'gray', marginTop: 30, width: '100%' }}></View>
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: 60 }}>
                    <Text style={s.whiteText20}>KHUYẾN CÁO</Text>
                </View>
                <View style={{ width: '90%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Image style={{ width: 45, height: 45, marginRight: 15 }} source={require('./../data/icon/mask72.png')} ></Image>
                        <Text style={s.whiteText16}>Đeo khẩu trang khi ra ngoài</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Image style={{ width: 45, height: 45, marginRight: 15 }} source={require('./../data/icon/opened-window-door-of-glasses2.png')} ></Image>
                        <Text style={s.whiteText16}> Đóng cửa sổ</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Image style={{ width: 45, height: 45, marginRight: 15 }} source={require('./../data/icon/runner1.png')} ></Image>
                        <Text style={s.whiteText16}>Hạn chế ra ngoài vận động </Text>
                    </View>
                </View>
            </View>
        )
    }
}   