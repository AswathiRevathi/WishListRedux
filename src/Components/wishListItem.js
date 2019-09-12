
import React ,{Component}from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Button,Image,TextInput,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class wishListItem extends Component{
    constructor(props){
        super(props);
    this.state={
        iconColor:"#D5D4D4",present:'false',wishlistItemName:''
    }
    }

    componentDidMount(){

        this.setState({wishlistItemName:this.props.name},()=>{
console.log("inside component did mount")
        });
    }
        func=() =>{

            console.warn("changed")

            if(this.state.iconColor=="#D5D4D4"){
                //adding to wishlist

                this.setState({
                    iconColor: "#D10202"
                })
            }
            else{
                                //removing from  wishlist

                this.setState({
                    iconColor: "#D5D4D4"
                })
            }
            
          }


_OnCal=()=>{
    console.log("inside onCal",this.state.present)
    if(this.state.present=='false'){
        this.setState({present:'true'},()=>{
          console.log("_OnCal",this.state.firstName)
  
        })
      }
      else{
        this.setState({present:'false'},()=>{
          console.log("_OnCal",this.state.firstName)
  
        })
      }
}
_sendValue=()=>{
    console.log("INSIDE SEND VALUE",this.state.wishlistItemName)
    // this.props.onEditItem();

    this.props.upValue(this.state.wishlistItemName);

    this.setState({present:'false'},()=>{});
  }

  render(){

let textmodal=null;
    if(this.state.present=='false'){
textmodal=(

    <Text style={{margin:5,fontSize:14}}>{this.props.name}</Text>

);

    }
    else{
        textmodal=(
            <View  style={{width:'60%'}}>
            <TextInput style = {{height:40,width:120,borderColor:'#ddd',borderWidth:1}}
             underlineColorAndroid = "transparent"
             placeholder = "Enter item"
             placeholderTextColor = "gray"
             autoCapitalize = "none"
            //  onChangeText = {(text)=>this.setState({firstName:text})}
            onChangeText={ (text)=>this.setState({wishlistItemName:text})}
             value={this.state.wishlistItemName}
           />
           <TouchableWithoutFeedback   onPress={()=>{this.props.onEditItem(),this._sendValue()}}>
           <View style={{height:30,width:100,backgroundColor:'#97CA36',alignSelf:'center',justifyContent:'center',alignItems:'center',borderRadius:7}}>
           <Text style={{justifyContent:'center',alignContent:'center',color:'#fff',fontWeight:'bold'}}>UPDATE</Text>
          </View>
          </TouchableWithoutFeedback >
          </View>
        );
    }
            return(
                <View style = { styles.listItem }>
                <View style={{width:'10%'}}>
                <Image source={require('../../assets/item.png')} 
                style={{height:30,width:30}}>

                </Image>
    
                </View>
                <View  style={{width:'60%'}}>
                {/* <Text style={{margin:5,fontSize:14}}>{this.props.name }</Text> */}
    {textmodal}
                </View>
            <View style={{ width:'30%',flexDirection:'row',justifyContent:'flex-end'}}>
            <Icon name="ios-create" size={25} style={{margin:10,color:'#000'}} onPress={()=>this._OnCal()}></Icon>    

            <Icon name="ios-remove-circle" size={25} style={{margin:10,color:'#97CA36'}} onPress={()=>this.props.onDeleteItem()}>
            </Icon>
    
            </View>
    
               
            </View>
            );
        }
    }


const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,margin:5,
    backgroundColor: '#eee',
    flexDirection:'row',
  }
});

