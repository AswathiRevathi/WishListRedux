import {ADD_ITEM} from './types';
import {ADD_TO_WISH} from './types';
import {DELETE_ITEM}  from './types';
import {DELETE_WISHLIST_ITEM}  from './types';
import {UPDATE_STATUS}  from './types';
import {EDIT_ITEM}  from './types';
import {EDIT_ITEM_WISHLIST}  from './types';




export const add_item=(item_Name,id)=>{
    console.log("product name in action",item_Name)
    console.log("id",id)


    return{

        type:ADD_ITEM,
        payload:item_Name,
        payload2:id
    }
}


export const add_to_wishList=(item_Name,id,status)=>{
    console.log("product to wishlist",item_Name)
    console.log(" id product to wishlist",id)
    console.log(" status product to wishlist",status)



    return{

        type:ADD_TO_WISH,
        payload:item_Name,
        payload2:id,
        payload3:status
    }
}
export const delete_product=(id)=>{
    console.log(" id to delete item",id)


    return{

        type:DELETE_ITEM,
        payload:id,
      
    }
}
export const delete_wishlist_item=(id)=>{
    console.log(" id to delete item",id)


    return{

        type:DELETE_WISHLIST_ITEM,
        payload:id,
      
    }
}
export const update_wishStatus=(id)=>{
    console.log(" id to delete item",id)


    return{

        type:UPDATE_STATUS,
        payload:id,
      
    }
}

export const edit_item=(id,item_name) =>
{
    console.log(" id to edit item",id)


    return{

        type:EDIT_ITEM,
        payload:id,
        payload2:item_name
      
    }
}

export const edit_item_wishlist=(id,item_name) =>
{
    console.log(" id to edit item",id)


    return{

        type:EDIT_ITEM_WISHLIST,
        payload:id,
        payload2:item_name
      
    }
}