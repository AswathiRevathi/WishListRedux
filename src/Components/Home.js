import React,{Component} from 'react';
import {View,Text,TouchableOpacity,FlatList,TextInput,Image,Button,AsyncStorage} from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { connect } from 'react-redux';
import {add_item} from '../../actions/wishlist';
import {add_to_wishList} from '../../actions/wishlist'
import {update_wishStatus} from '../../actions/wishlist';

import {delete_product} from '../../actions/wishlist'
import {delete_wishlist_item} from '../../actions/wishlist';
import {edit_item} from '../../actions/wishlist';
import {edit_item_wishlist} from '../../actions/wishlist';






import Icon from 'react-native-vector-icons/Ionicons';
import ListItem from './ListItem';






  class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      popUpVisible:false,productName:'',products:[],wishList:[],id:1,k:'',iconColor:'black',editItemName:'',editPopVisibility:false,editItemId:'',present:'false'
  }
  }
  componentWillMount() {
    this.props.navigation.setParams({title:"AMMUI", header: false,wishList:this.props.wishList});
  }
  
  componentDidUpdate(prevProps) {
    //    Typical usage (don't forget to compare props):
          if (this.props.wishList !== prevProps.wishList) {
            this._sendingNavParams();
          }
        }

 
  _sendingNavParams=()=>{
    console.log("INSIDE _sendingNavParams");
    this.props.navigation.setParams({title:'to wish list',wishList:this.props.wishList});

  }

componentDidMount(){
    
  this.setState({
    k:this.props.wishList.length
  })
    console.log("--uiiooo---",this.state.k)
  }
  _onss=()=>{
console.log("upo",9);
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
console.log("----PARAMS0-----",params && params.wishList)
var title =params &&params.title;
var size =params &&params.wishList.length;
console.log("----size-----",size)
if(size>0){
  return {
    headerTitle:'WishList',
    headerRight: (

        
              <View style={{height:50,width:50,marginTop:10,marginRight:20}}>
                         {/* <Icon  name='ios-heart'  size={30} color="#D10202"  style={{margin:20}}/> */}
              <Icon name="ios-egg"  size={15} color="black" style={{position:'absolute',alignSelf:'flex-end'}}></Icon>
             <Icon name="ios-heart"   onPress={() =>  navigation.navigate('WishListScreen')}   size={35} color="#D10202" style={{alignSelf:'flex-end',margin:4}} ></Icon>
            
                </View>
            
            ),
   };
}else{
  return {
    headerTitle:'WishList',
    headerRight: (

        
              <View style={{height:50,width:50,marginTop:10,marginRight:20}}>
                         {/* <Icon  name='ios-heart'  size={30} color="#D10202"  style={{margin:20}}/> */}


                         
             <Icon name="ios-heart"    onPress={() =>  navigation.navigate('WishListScreen')}   size={35} color="#D10202" style={{alignSelf:'flex-end',margin:4}} ></Icon>
            
                </View>
            
            ),

}
}

   
  };

//   static navigationOptions = ({ navigation ,screenProps,props }) => {
// console.log("propsyPROPS",);
//     return {
      
//       headerTitle: 'WishList',
     
//       headerRight: (

        
//         <View style={{height:50,width:50,marginTop:10,marginRight:20}}>
//                    {/* <Icon  name='ios-heart'  size={30} color="#D10202"  style={{margin:20}}/> */}
//         <Icon name="ios-egg"  size={15} color="white" style={{position:'absolute',alignSelf:'flex-end'}}></Icon>
//        <Icon name="ios-heart"   onPress={() =>  navigation.navigate('WishListScreen')}   size={35} color="#D10202" style={{alignSelf:'flex-end',margin:4}} ></Icon>
      
//           </View>
      
//       ),
      
//     };
//   };
  _addToWishList=(item,id,status)=>{
  console.log("----adding to wish list item----",item)
  console.log("----adding to wish list ID----",id)
  console.log("----adding to wish list STATUS----",status)


  if(item.trim() === '') {
    return;
  }

this.props.updateStatus(id);
  this.props.addToWish(item,id,status);
  this.props.navigation.setParams({title:'to wish list',wishList:[]});

}
_deleteItem=(id)=>{
  
  console.log("item on dlete",id)
  this.props.delete(id);
  this.props.deleteWishListItem(id);
  this.props.navigation.setParams({title:'to wish list',wishList:this.props.wishList});
}
_editItem=(id)=>{
  console.log("*****ID ITEM TO BE EDITED",id)
this.setState({editItemId:id},()=>{
  console.log("CHANGED ID",this.state.editItemId)
})
}
callbackFunction = (childData) => {
  // this.setState({message: childData})
  console.log("INSIDE CALLBACK FUNCTION**",childData);
  this.setState({present:childData},()=>{
    console.log("updated")
  })
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
_editHandler=()=>{
  console.log("inside edit handler",this.state.editItemId,this.state.editItemName)
  
  // if(this.state.editItemName.trim() === '') {
  //   alert('Enter product name')
  // }else{
  //   console.log("ITEM TO BE EDITED",this.state.editItemId+"---Name"+this.state.editItemName)

    this.props.editProduct(this.state.editItemId,this.state.editItemName);
    this.props.editWishListItem(this.state.editItemId,this.state.editItemName);
    // this.props.navigation.setParams({wishList:[]});


    // this.setState({editItemName:''})

  // }
}
_addDataHandler = () => {
  console.log("inside add handele")


    if(this.state.productName.trim() === '') {
      alert('Enter product name')
    }else{
      this.setState({id:this.state.id+1,editItemName:this.state.productName})

      console.log("ID IS",this.state.id)
      this.props.add(this.state.productName,this.state.id);

      this.setState({popUpVisible:false,productName:''})

    }
    

}

  render(){

    let productList=null;
    console.log("---STATE---",this.state)

console.log("---WISHLIST---",this.props.wishList)
    if(this.props.products.length==0){
      productList=(

<View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<Image source={require('../../assets/no_products.png')} style={{height:100,width:100}}>

</Image>
<Text>
 ADD PRODUCTS
</Text>


</View>

      );
    }
    else{
productList=(
  
 <FlatList
 data = { this.props.products}
 keyboardShouldPersistTaps="always"

 keyExtractor={(item, index) => index.toString()}
 renderItem = { info => (
   
<ListItem

name={info.item.value}
status={info.item.status}
onAddWishList={()=>this._addToWishList(info.item.value,info.item.id,info.item.status)}
onDeleteItem={()=>this._deleteItem(info.item.id)}
parentCallback = {this.callbackFunction}
upValue={this.databackFunction}
onEditItem={()=>this._editItem(info.item.id)}
show={this.state.present}
onChangeTextValue={ (text) =>
  //  this.setState({editItemName:text})

    this.setState({
      editItemName:text,
}, ()=>{
console.log("new edited item",this.state.editItemName);
})
  
  }
value={this.state.editItemName}
/>
 )}
 extraData={this.state}
/>
);
    }

    return(
      <View style={{flex:1}}>

{productList}
{/* popup ui  */}

         <Dialog
    visible={this.state.popUpVisible}
    onTouchOutside={() => {
      this.setState({ popUpVisible: false });
    }}
  >
    <DialogContent>
 <Text style={{padding:10,fontSize:15,alignSelf:'center'}}>Add Product</Text>
 
 <Image  style={{width: 40, height: 40,alignSelf:'center'}}
          source={require('../../assets/add_product.jpg')}>

 </Image>

 <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1,margin:10,width:120}}
        onChangeText={(productName) => this.setState({productName})}
        value={this.state.productName}
      /> 
      <TouchableOpacity onPress={()=>this._addDataHandler()}>

        <View style={{height:30,width:100,backgroundColor:'#97CA36',alignSelf:'center',justifyContent:'center',alignItems:'center',borderRadius:7}}>
          <Text style={{justifyContent:'center',alignContent:'center',color:'#fff',fontWeight:'bold'}}>Add</Text>

        </View>
      </TouchableOpacity>
    </DialogContent>
  </Dialog>

  <Dialog
    visible={this.state.editPopVisibility}
    onTouchOutside={() => {
      this.setState({ editPopVisibility: false });
    }}
  >
    <DialogContent>
 <Text style={{padding:10,fontSize:15,alignSelf:'center'}}>Edit Product</Text>
 
 <Image  style={{width: 40, height: 40,alignSelf:'center'}}
          source={require('../../assets/edit.png')}>

 </Image>

 <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1,margin:10,width:120}}
        onChangeText={(editItemName) => this.setState({editItemName})}
        value={this.state.editItemName}
      /> 
      <TouchableOpacity onPress={()=>this._editHandler()}>

        <View style={{height:30,width:100,backgroundColor:'#97CA36',alignSelf:'center',justifyContent:'center',alignItems:'center',borderRadius:7}}>
          <Text style={{justifyContent:'center',alignContent:'center',color:'#fff',fontWeight:'bold'}}>EDIT</Text>

        </View>
      </TouchableOpacity>
    </DialogContent>
  </Dialog>


        <TouchableOpacity onPress={()=>{this.setState({popUpVisible:true})}}
         style={{
       alignItems:'center',
       justifyContent:'center',
       position: 'absolute',                                          
       bottom: 10,                                                    
       right: 10,
       height:50,
      
     }} >
       
   <Icon  name='ios-add-circle'  size={50} color="#000" />
</TouchableOpacity>
{/* <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('WishListScreen')}}
         style={{
       alignItems:'center',
       justifyContent:'flex-start',
       position: 'relative',                                          
       bottom: 10,                                                    
       right: 10,
       height:50,
      
     }} >
       
   <Icon  name='ios-heart'  size={50} color="#97CA36" />
</TouchableOpacity> */}
</View>
    );
  }
}

const mapDispatchToProps=dispatch=>{
  console.log("mapDispatchToProps to props");

  return {
    add: (productName,id) => {

      dispatch(add_item(productName,id))
    },
    delete:(id)=>{
      dispatch(delete_product(id))
    },
    addToWish:(item,id,status)=>{
      console.log("inside dispatch item",item)
      console.log("inside dispatch id",id)
      console.log("inside dispatch status",status)



      dispatch(add_to_wishList(item,id,status))
    }
    ,updateStatus:(id)=>{
      dispatch(update_wishStatus(id))
    },deleteWishListItem:(id)=>{
      dispatch(delete_wishlist_item(id))
    },editProduct:(id,item)=>{
      dispatch(edit_item(id,item))
    },editWishListItem:(id,item)=>{
      dispatch(edit_item_wishlist(id,item))
    }
  }
}
const mapStateToProps=state=>{
  console.log("mapStateToProps to props",state.products);
  console.log("mapStateToProps to props wishList",state.wishList);

  return{
    products:state.products.products,
    wishList:state.wishList.wishList
  
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)