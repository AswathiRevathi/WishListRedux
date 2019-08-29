
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

 class WishList extends Component{

    state = {
        
        wishList: []
      }
_ondeleteWishListitem=(id)=>{
  console.log("item from wishlist to delete",id)
  this.props.updateStatus(id);

this.props.delete(id);
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
    renderItem = { info => (
<ListItem
name={info.item.value}
onDeleteItem={()=>this._ondeleteWishListitem(info.item.id)}
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
  }
}

  }

  export default connect(mapStateToProps,mapDispatchToProps)(WishList)
