
import React ,{Component}from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Button,Image,TextInput,TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ListItem extends Component{
    constructor(props){
        super(props);

console.log("props in ListItem",this.props);

    this.state={
        iconColor:"#D5D4D4",
        // firstName: props.navigation.state.params.name
        firstName: this.props.value,present:this.props.show
    }
    }
    _OnCal=()=>{
      this.setState({present:'true'},()=>{
        console.log("_OnCal",this.state.firstName)

      })
    }
    _sendValue=()=>{
      console.log("INSIDE SEND VALUE",this.state.firstName)
      // this.props.onEditItem();

      this.props.upValue(this.state.firstName);

      this.setState({present:'false'},()=>{});
    }
    // _edit=()=>{
    //   console.log("INSIDE SEND VALUE",this.state.firstName)
    //   this.props.upValue(this.state.firstName)

    // }
        func=() =>{
// let unSelect="#D5D4D4";
// let select="#D10202";

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
  render(){

  let iconItem=null;
console.log("status is",this.props.status)
  if(this.props.status==false){
    console.log("inside if",this.props.status)

    iconItem=(
        <Icon name="ios-heart" size={25} style={{margin:10,color:'#D5D4D4' }} onPress= 
        {()=>{this.props.onAddWishList()}}>
         </Icon>
    );
  }
  else{
    iconItem=(
    <Icon name="ios-heart" size={25} style={{margin:10,color:'#D10202' }} onPress= 
    {()=>{this.props.onAddWishList()}}>
    </Icon>);
  }

  let textItem=null;
if(this.state.present=='false'){
  textItem=(
    <View  style={{width:'60%'}}>
                    <Text style={{margin:5,fontSize:14}}>{this.props.name }</Text>
        
                    </View>
      );
}
else{
  textItem=(
    <View  style={{width:'60%'}}>
  <TextInput style = {{height:40,width:120,borderColor:'#ddd',borderWidth:1}}
   underlineColorAndroid = "transparent"
   placeholder = "Student First Name"
   placeholderTextColor = "gray"
   autoCapitalize = "none"
  //  onChangeText = {(text)=>this.setState({firstName:text})}
  onChangeText={ (text)=>this.setState({firstName:text})}
   value={this.state.firstName}
 />
 <TouchableWithoutFeedback  onPress={()=>{this.props.onEditItem(),this._sendValue()}}>

 <View style={{height:30,width:100,backgroundColor:'#97CA36',alignSelf:'center',justifyContent:'center',alignItems:'center',borderRadius:7}}>
 <Text style={{justifyContent:'center',alignContent:'center',color:'#fff',fontWeight:'bold'}}>UPDATE</Text>

</View></TouchableWithoutFeedback >
    </View>

 );
}
  

            return(
                <View style = { styles.listItem }>
                <View style={{width:'10%'}}>
                <Image source={require('../../assets/item.png')} style={{height:30,width:30}}></Image>
    
                </View>
                {textItem}
                {/* <View  style={{width:'60%'}}>
                <Text style={{margin:5,fontSize:14}}>{this.props.name }</Text>
    
                </View> */}
            <View style={{ width:'30%',flexDirection:'row',justifyContent:'flex-end'}}>
{iconItem}
            {/* <Icon name="ios-heart" size={25} style={{margin:10,color:this.state.iconColor }} onPress= 
           {()=>{this.func(),this.props.onAddWishList()}}>
            </Icon> */}
{/* <Icon name="ios-create" size={25} style={{margin:10,color:'#000'}} onPress={()=>this.props.onEditItem()}></Icon>     */}

<Icon name="ios-create" size={25} style={{margin:10,color:'#000'}} onPress={()=>this._OnCal()}></Icon>    


             <Icon name="ios-remove-circle" size={25} style={{margin:10,color:'#97CA36'}} onPress={()=>this.props.onDeleteItem()}>
            </Icon>
    
            </View>
    
               
            </View>
            );
        }
    }

  
// const ListItem = (props) => {
    

//     return (
     
//         <View style = { styles.listItem }>
//             <View style={{width:'10%'}}>
//             <Image source={require('../../assets/item.png')} style={{height:30,width:30}}></Image>

//             </View>
//             <View  style={{width:'60%'}}>
//             <Text style={{margin:5,fontSize:14}}>{ props.name }</Text>

//             </View>
//         <View style={{ width:'30%',flexDirection:'row',justifyContent:'flex-end'}}>
//         <Icon name="ios-heart" size={25} style={{margin:10}}  color={this.state.iconColour} onPress= 
//        {()=>this.func()}>
//         </Icon>
//         <Icon name="ios-trash" size={25} style={{margin:10}}>
//         </Icon>

//         </View>

           
//         </View>
    
//     );
// }

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,margin:5,
    backgroundColor: '#eee',
    flexDirection:'row',
  }
});

