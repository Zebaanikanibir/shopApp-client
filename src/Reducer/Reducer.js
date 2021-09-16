import { GET_DELETE_SHOP, GET_SHOP_FAILED, GET_SHOP_REQUEST, GET_SHOP_SUCCESS } from "../Constant/Constant"


export const shopListReducer = (state = {

    loading: true,
    shops: [],
    shop: {}
}, action) => {

    switch (action.type) {


        case GET_SHOP_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_SHOP_SUCCESS:
            return {
                ...state,
                loading: false,
                shops: action.payload

            }
            case GET_DELETE_SHOP:
                return {

                    ...state,
                    shops: state.shops.filter(shop => shop !== action.payload)
                }

        case GET_SHOP_FAILED:
            return {
                ...state,
                loading: false,
                shops: [],
                error: action.payload
            }
        
        default: return state
    }

}