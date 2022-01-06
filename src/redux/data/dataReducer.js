const initialState = {
  loading: false,
  name: '',
  totalSupply: 0,
  cost: 0.045,
  saleActive: false,
  presaleActive: false,
  maxSupply: 3000,
  error: false,
  errorMsg: '',
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: '',
      };
    case 'CHECK_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        name: action.payload.name,
        totalSupply: action.payload.totalSupply,
        cost: action.payload.cost,
        maxSupply: action.payload.maxSupply,
        saleActive: action.payload.saleActive,
        presaleActive: action.payload.presaleActive,
        error: false,
        errorMsg: '',
      };
    case 'CHECK_DATA_FAILED':
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
