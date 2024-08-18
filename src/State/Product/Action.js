import {api} from '../../config/apiConfig';
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST,FIND_PRODUCTS_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({type: FIND_PRODUCTS_REQUEST})
    const {
        colors,
        sizes,
        minPrice,
        maxPrice,
        minDiscount,
        category,
        stock,
        sort,
        pageNumber,
        pageSize,
    } = reqData;
    try {
        // Construct the query string properly
        const queryParams = new URLSearchParams();
        queryParams.append("color", colors);
        queryParams.append("size", sizes);
        queryParams.append("minPrice", minPrice);
        queryParams.append("maxPrice", maxPrice);
        queryParams.append("minDiscount", minDiscount);
         queryParams.append("stock", stock);
        queryParams.append("sort", sort);
        queryParams.append("pageNumber", pageNumber);
        queryParams.append("pageSize", pageSize);
        queryParams.append("category",category)

        const queryString = queryParams.toString();
        const { data } = await api.get(`/api/products?${queryString}`);
        console.log("query string:",queryString)
        console.log("product data da vao duoc day:", data)
        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: FIND_PRODUCTS_FAILURE, payload: error.message
        })
    }
};



export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    const {productId} = reqData;
    try {
        const { data } = await api.get(`/api/products/id/${productId}`)

        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.massage
        })
    }
};