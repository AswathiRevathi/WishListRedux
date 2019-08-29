
import React ,{Component}from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Button,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ListItem extends Component{
    constructor(props){
        super(props);

console.log("props in ListItem",this.props);

    this.state={
        iconColor:"#D5D4D4"
    }
    }
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

            return(
                <View style = { styles.listItem }>
                <View style={{width:'10%'}}>
                <Image source={require('../../assets/item.png')} style={{height:30,width:30}}></Image>
    
                </View>
                <View  style={{width:'60%'}}>
                <Text style={{margin:5,fontSize:14}}>{this.props.name }</Text>
    
                </View>
            <View style={{ width:'30%',flexDirection:'row',justifyContent:'flex-end'}}>
{iconItem}
            {/* <Icon name="ios-heart" size={25} style={{margin:10,color:this.state.iconColor }} onPress= 
           {()=>{this.func(),this.props.onAddWishList()}}>
            </Icon> */}
<Icon name="ios-create" size={25} style={{margin:10,color:'#000'}} onPress={()=>this.props.onEditItem()}></Icon>           
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

