import {ADD_ITEM} from '../actions/types';
import {DELETE_ITEM} from '../actions/types';
import {UPDATE_STATUS} from '../actions/types';
import {EDIT_ITEM} from '../actions/types';



import {ADD_TO_WISH} from '../actions/types';


const initialState={
    productName:'',products:[],wishList:[],id:''

}

const wishReducer=(state=initialState,action)=>{
    console.log("state  IS",state)
    console.log("DATA  iN WISHLIST",action.payload)
    
    switch(action.type){
        
        case ADD_ITEM:
                console.log("state  IS",state)
                console.log("DATA  IS",action.payload)
            return{
                products:state.products.concat({
                value:action.payload,
                id:action.payload2,
                status:false
                    })

                }
        case DELETE_ITEM:
        console.log("INSIDE DELETE",action.payload)
    
        return{


             products :state.products.filter((element, index, array) => {
                //filter 'em elements
                console.log("inside reducer item is",element.id);

                if(element.id!=action.payload){
                    return element;
                }
              


            })}

            case UPDATE_STATUS:
                    console.log("INSIDE UPDATE_STATUS",action.payload)
            
                    return{
                         products :state.products.filter((element, index, array) => {
                            //filter 'em elements
                        console.log("inside reducer item is",element.id);
                        if(element.id==action.payload){
                        console.log("imatching items",element.id);

                            if(element.status==false){
                                element.status=true;

                            }else{
                                element.status=false;

                            }
                            }
                          return state;
            
            
                        })}

                        case EDIT_ITEM:
console.log("INSIDE EDIT")
                        return {
                            products :state.products.filter((element, index, array) => {
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
export default wishReducer;