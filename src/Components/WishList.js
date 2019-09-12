
import React,{Component} from 'react';
import {
 
  View,FlatList,
  Text,Image,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import ListItem from './wishListItem';
import {delete_wishlist_item} from '../../actions/wishlist'

import {update_wishStatus} from '../../actions/wishlist';
import {edit_item} from '../../actions/wishlist';
import {edit_item_wishlist} from '../../actions/wishlist';

 class WishList extends Component{

    state = {
        
        wishList: [], editItemId:'',editItemName:''
      }
_ondeleteWishListitem=(id)=>{
  console.log("item from wishlist to delete",id)
  this.props.updateStatus(id);

this.props.delete(id);
}
databackFunction = (childData) => {
  // this.setState({message: childData})
  console.log("INSIDE databackFunction FUNCTION**",childData);
  console.log("INSIDE databackFunction FUNCTION  IDID**",this.state.editItemId);

  this.setState({editItemName:childData},()=>{
    console.log("ITEM updated",this.state.editItemName)
    this._editHandler();

  })


}
_editItem=(id)=>{
  console.log("*****ID ITEM TO BE EDITED",id)
this.setState({editItemId:id},()=>{
  console.log("CHANGED ID",this.state.editItemId)
})
}
_editHandler=()=>{
  console.log("inside edit handler",this.state.editItemId,this.state.editItemName)
  
  // if(this.state.editItemName.trim() === '') {
  //   alert('Enter product name')
  // }else{
  //   console.log("ITEM TO BE EDITED",this.state.editItemId+"---Name"+this.state.editItemName)

    this.props.editWishListItem(this.state.editItemId,this.state.editItemName);
    this.props.editProduct(this.state.editItemId,this.state.editItemName);

    // this.props.navigation.setParams({wishList:[]});


    // this.setState({editItemName:''})

  // }
}
    render(){
      console.log("DATA--",this.props.names)

let wishContent=null;


console.log("WISHLIST CONTENT",this.props.wishList.length)

if(this.props.wishList.length==0){
wishContent=(
  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<Image  source={require('../../assets/no_item.png')} style={{height:200,width:200}}></Image>
<Text>
  NO ITEMS FOUND
</Text>

  </View>
);
}
else{


  wishContent=(
    <FlatList
    data = { this.props.wishList}
    keyExtractor={(item, index) => index.toString()}
    keyboardShouldPersistTaps="always"

    renderItem = { info => (
<ListItem
name={info.item.value}
onDeleteItem={()=>this._ondeleteWishListitem(info.item.id)}

upValue={this.databackFunction}
onEditItem={()=>this._editItem(info.item.id)}
/>
    )}
    extraData={this.state}
  />
  );
}

        return(
          <View style={{flex:1}}>
           {wishContent}

          </View>
        );
    }

}

const mapStateToProps = state => {
    return {
        wishList: state.wishList.wishList
    }
  }
 
  const mapDispatchToProps=dispatch=>{

return{
  delete:(id)=>{
    dispatch(delete_wishlist_item(id))
  },
  updateStatus:(id)=>{
    dispatch(update_wishStatus(id))
  },editProduct:(id,item)=>{
    dispatch(edit_item(id,item))
  },editWishListItem:(id,item)=>{
    dispatch(edit_item_wishlist(id,item))
  }
}

  }

  export default connect(mapStateToProps,mapDispatchToProps)(WishList)
