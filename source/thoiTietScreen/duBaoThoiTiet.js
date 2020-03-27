import React, { Component } from "react";
import {
    View,
    Text,
    Dimensions,
    FlatList,
    StyleSheet,
} from 'react-native'
import { dataDay } from './../data/dataThoiTiet';
import Day from './flatListDay';
import s from './style';

export default class DuBaoThoiTiet extends Component {
    render() {
        return (
            <View style={{ width: '96%', marginTop: 20, alignItems: 'center' }}>
                <FlatList
                    data={dataDay}
                    renderItem={({ item }) => {
                        return (
                            <Day
                                item={item}
                                parentFlatList={this}
                            />
                        )
                    }}
                />
            </View>
        )
    }
}