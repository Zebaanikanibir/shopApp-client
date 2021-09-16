import axios from "axios"
import { GET_DELETE_SHOP, GET_SHOP_FAILED, GET_SHOP_REQUEST, GET_SHOP_SUCCESS } from "../Constant/Constant"




export const listShops = () => {


    return async (dispatch) => {


        try {
            dispatch({


                type: GET_SHOP_REQUEST
            })
            const { data } = await axios.get('https://evening-dusk-79824.herokuapp.com/shop')
            console.log('data', data)
            dispatch({

                type: GET_SHOP_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: GET_SHOP_FAILED,
                payload: error.message
            })
        }
    }


}
export const deleteShops = id => dispatch => {
    fetch(`https://evening-dusk-79824.herokuapp.com/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(shop =>
        dispatch({
          type: GET_DELETE_SHOP,
          payload: id
        }),
      );
  };
