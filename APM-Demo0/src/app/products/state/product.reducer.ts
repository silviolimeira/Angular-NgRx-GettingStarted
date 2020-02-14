import { Product } from '../product';

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[];
}

export function reducer(state, action) {
    switch (action.type) {

        case 'TOGGLE_PRODUCT_CODE':

            // console.log('existing state: ' + JSON.stringify(state));
            // console.log('payload: ' + action.payload);

            return {
                ...state,
                showProductCode: action.payload
            }
        default:
            return state;
    }
}