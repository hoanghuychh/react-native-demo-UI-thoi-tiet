import React, { Component } from 'react'
import { View, Image, FlatList, Text, ActivityIndicator } from 'react-native'
import { Input } from 'react-native-elements'
import {Location} from '../data/dataThoiTiet'
import _ from 'lodash';

export default class SearchScreen extends Component {
    static navigationOptions={ 
        headerTransparent: true,
        title:'Thêm địa điểm',
        headerTintColor: 'gray',
    }
    constructor(props){
        super(props)
        this.state={
            data:"",
            fullData:"",
            loading:false,
            query:''
        }
    }
    componentWillMount(){
        this.setState({
            fullData:Location,
            data:Location,
        })

    }
    componentDidMount(){
        this.setState({
            loading:true
        })
    }
    _renderItem=({item,index})=>{
        console.log("this is item "+item+" index"+index);
        return(
            <View style={{
                width:'100%',
                flexDirection:'row',
                borderWidth:0.5,
                borderColor:'#E0E0E0',
                alignItems:'center',
                paddingVertical:10
            }}>
                <Image style={{width:40,height:40,marginHorizontal:20}}  source ={require('../data/icon/myLocation.png')}/>
        <Text style={{fontSize:18,color:'black'}}>{item.Name}</Text>
            </View>
        )
    }
        renderFooter=()=>{
            if(!this.state.loading) return null
            return(
                <View style={{paddingVertical:20,borderTopWidth:1,borderColor:'#CED0CE'}}>
                    <ActivityIndicator animating size="large"/>
                </View>
            )
        }
        handleSearch=(text)=>{
            const formatedQuery=text.toLowerCase()
            const data=_.filter(this.state.fullData,photo=>{
                if(photo.Name.includes(formatedQuery)){
                    return true
                }
                return false
            })
            this.setState({data,query:text})
        }
    render() {
        return (
            <View style={{ flex: 1,top:60, alignItems: 'center' }}>
                <View style={
                    {
                        width: '90%',
                        height: 50,
                        borderWidth:1,
                        borderColor:'gray',
                        borderRadius:5,marginBottom:10
                    }}>
                    <Input style={
                        {
                            flex: 1,
                        }}
                        placeholder='Nhập địa điểm'
                        inputContainerStyle={{
                            borderBottomWidth:0
                        }}
                        onChangeText={this.handleSearch}
                    />
                    <Image style={{ width: 20, height: 20,right:10}} source={require('./../data/icon/search.png')} />
                </View>
                <FlatList
                    style={{width:'100%',}}
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={(item,index)=>index.toString()}
                    ListFooterComponent={this.renderFooter}
                    />
            </View>
        )
    }
}