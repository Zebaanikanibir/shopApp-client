import axios from "axios"
import { GET_DELETE_SHOP, GET_SHOP_FAILED, GET_SHOP_REQUEST, GET_SHOP_SUCCESS } from "../Constant/Constant"




export const listShops = () => {


    return async (dispatch) => {


        try {
            dispatch({


                type: GET_SHOP_REQUEST
            })
            const { data } = await axios.get('http://localhost:5002/shop')
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
    fetch(`http://localhost:5002/${id}`, {
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
