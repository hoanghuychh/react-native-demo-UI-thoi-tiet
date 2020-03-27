import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions,
    FlatList,
    StyleSheet
} from 'react-native'
import { Icon, Image } from 'react-native-elements';
import s from './style'
export default class HeaderThoiTiet extends Component {
    constructor() {
        super()
        this.state = {
            isMapDown: false,
            isSearch: false,
        }
    }
    componentWillMount(){
    }
    render() {
        let day = new Date().getDay() + 1;
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();

        const {navigation}=this.props;
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
                                navigation.navigate('SearchScreen');
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
                                this.setState({isMapDown:!this.state.isMapDown})
                            }}
                        />
                    </View>
                </View>
                <View style={this.state.isMapDown ? style.mapDown : { alignItems: 'center' }}>
                    <View style={this.isMapDown ? style.mapUp : { width: '100%', height: 20,alignItems:'center' }}>
                        <Text style={this.isMapDown ? style.mapUp :s.whiteText16}>Thứ {day},{date}/{month}/{year}</Text>
                    </View>
                    <View style={this.isMapDown?style.mapDown:style.mapUp}>

                    </View>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    mapDown: {
        width: '100%',
        height: '70%',
        position: 'absolute',
        backgroundColor:'gray',
        zIndex: 1000
    },
    mapUp: {
        width:0,
        height:0,
    }
})