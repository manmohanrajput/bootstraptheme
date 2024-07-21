import { SET_CATEGORY, FETCH_DATA_SUCCESS, FETCH_SINGLE_USER_SUCCESS,FETCH_DATA_RESOURCE,FETCH_SINGLE_RESOURCE_SUCCESS,CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from './actions';

const initialState = {
  category: '',
  images: [],
  singleUser: null,
  resource:[],
  singleReasource:null,
  createdUser: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        images: action.payload,
      };
    case FETCH_SINGLE_USER_SUCCESS:
      return {
        ...state,
        singleUser: action.payload,
      };
      case FETCH_DATA_RESOURCE:
        return {
          ...state,
          resource: action.payload,
        };

        case FETCH_SINGLE_RESOURCE_SUCCESS:
          return {
            ...state,
            singleReasource: action.payload,
          };

          case CREATE_USER_SUCCESS:
      return {
        ...state,
        createdUser: action.payload,
        error: null,
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        createdUser: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
