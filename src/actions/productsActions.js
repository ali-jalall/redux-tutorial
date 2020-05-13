export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchStart = () => ({ type: FETCH_START })
export const fetchSuccess = data => ({ type: FETCH_SUCCESS, payload: { data } })
export const fetchError = error => ({ type: FETCH_ERROR, payload: { error } })


export function fetchProducts () {
  return dispatch => {
    dispatch(fetchStart());
    return fetch('/products')
      .then(res => res.json())
      .then(json => {
        dispatch(fetchSuccess(json.data));
        return json.data
      })
      .catch(err => dispatch(fetchError(err)))
  }
}