import {ADD_TO_WISH} from '../actions/types';
import {DELETE_WISHLIST_ITEM} from '../actions/types';
import {EDIT_ITEM_WISHLIST} from '../actions/types';


import {AsyncStorage} from 'react-native'

const initialState={
 wishList:[]

}
storeData = async () => {
    try {
      await AsyncStorage.setItem('wish', 'true');
      console.log("DATA SAVED IN ASYNCSTORAGE")
    } catch (e) {

      // saving error
    }
  }

const wishListReducer=(state=initialState,action)=>{
    console.log("state  IS",state)
    console.log("DATA  iN WISHLIST",action.payload)
    switch(action.type){
        
        case ADD_TO_WISH:
                console.log("state IN ADDING WISHLIST",state)

                if(action.payload3==false){
                    console.log("need to add item",state)

                    if(state.wishList.some(item=>item.id===action.payload2)){
                        console.log("item already present",action.payload2)
                    
                    }else{
                        console.log("item not present",action.payload2)
                        this.storeData();

                    return{
                                        
                                    
                    
                        wishList:state.wishList.concat({
                        value:action.payload,id:action.payload2
                    })}
                    



                    }

                }
                else{
                    console.log("item already there ",state)


                    return        {
                        wishList :state.wishList.filter((element, index, array) => {
                            //filter 'em elements
                            console.log("element",element);


                            console.log("inside reducer item is",element.id);
            
                            if(element.id!=action.payload2){
                                return element;
                            }
                          
            
            
                        })}
            

                }



                
                    
            
            case DELETE_WISHLIST_ITEM:
                    console.log("DATA  IS item",action.payload)
                    console.log("DATA  IS id",action.payload2)
    
                     return        {
                        wishList :state.wishList.filter((element, index, array) => {
                            //filter 'em elements
                            console.log("element",element);


                            console.log("inside reducer item is",element.id);
            
                            if(element.id!=action.payload){
                                return element;
                            }
                          
            
            
                        })}
            
case EDIT_ITEM_WISHLIST:
        return {
            wishList :state.wishList.filter((element, index, array) => {
                //filter 'em elements
            console.log("inside reducer item is",element.id);
            if(element.id==action.payload){
            console.log("imatching items",element.id);
            element.value=action.payload2
                }
              return state;


        })
        }
            default :return state;

    }


}
export default wishListReducer;