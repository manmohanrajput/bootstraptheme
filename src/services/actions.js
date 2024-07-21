export const SET_CATEGORY = 'SET_CATEGORY';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_SINGLE_USER_SUCCESS = 'FETCH_SINGLE_USER_SUCCESS';
export const FETCH_DATA_RESOURCE = 'FETCH_DATA_RESOURCE';
export const FETCH_SINGLE_RESOURCE_SUCCESS = 'FETCH_SINGLE_RESOURCE_SUCCESS';
export const CREATE_USER_SUCCESS='CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE='CREATE_USER_FAILURE';


export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchSingleUserSuccess = (data) => ({
  type: FETCH_SINGLE_USER_SUCCESS,
  payload: data,
});

export const fetchDataresource = (data) => ({
  type: FETCH_DATA_RESOURCE,
  payload: data,
});

export const fetchDataSingleresource = (data) => ({
  type: FETCH_SINGLE_RESOURCE_SUCCESS,
  payload: data,
});

export const createUserSuccess = (user) => ({
  type: CREATE_USER_SUCCESS,
  payload: user,
});

export const createUserFailure = (error) => ({
  type: CREATE_USER_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const data = await response.json();
      
      const categories = ['admin', 'landing', 'business', 'portfolio', 'ecommerce'];
      const enrichedData = data.data.map((item, index) => ({
        ...item,
        category: categories[index % categories.length],
      }));

      dispatch(fetchDataSuccess(enrichedData));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};

export const fetchSingleUser = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${userId}`);
      const data = await response.json();
      dispatch(fetchSingleUserSuccess(data.data));
    } catch (error) {
      console.error('Error fetching single user:', error);
    }
  };
};

export const fetchResource = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://reqres.in/api/unknown');
      const data = await response.json();
      dispatch(fetchDataresource(data.data));
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };
};

export const fetchSingleReasource = (resourceId ) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://reqres.in/api/unknown/${resourceId}`);
      const data = await response.json();
      dispatch(fetchDataSingleresource(data.data));
    } catch (error) {
      console.error('Error fetching  user:', error);
    }
  };
};


export const createUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      dispatch(createUserSuccess(data));
    } catch (error) {
      dispatch(createUserFailure(error.message));
    }
  };
};
