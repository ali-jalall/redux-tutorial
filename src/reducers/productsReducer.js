import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from "../actions/productsActions";

const initialState = {
  loading: false,
  items: [],
  error: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.data,
      };

    case FETCH_ERROR:
      return {
        ...state,
        loading: true,
        error: action.payload.error,
        items: [],
      };

    default:
      return state;
  }
}
