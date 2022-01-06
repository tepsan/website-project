// log
import store from '../store';

const fetchDataRequest = () => {
  return {
    type: 'CHECK_DATA_REQUEST',
  };
};

const fetchDataSuccess = payload => {
  return {
    type: 'CHECK_DATA_SUCCESS',
    payload: payload,
  };
};

const fetchDataFailed = payload => {
  return {
    type: 'CHECK_DATA_FAILED',
    payload: payload,
  };
};

export const fetchData = account => {
  return async dispatch => {
    dispatch(fetchDataRequest());
    try {
      let name = await store
        .getState()
        .blockchain.smartContract.methods.name()
        .call();
      let totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply()
        .call();
      let cost = await store
        .getState()
        .blockchain.smartContract.methods.cost()
        .call();
      let maxSupply = await store
        .getState()
        .blockchain.smartContract.methods.maxSupply()
        .call();
      let saleActive = await store
        .getState()
        .blockchain.smartContract.methods.saleActive()
        .call();
      let presaleActive = await store
        .getState()
        .blockchain.smartContract.methods.presaleActive()
        .call();
      const priceInEth = store.getState().blockchain.web3.utils.fromWei(cost, 'ether');

      dispatch(
        fetchDataSuccess({
          name,
          totalSupply,
          cost: priceInEth,
          maxSupply,
          saleActive,
          presaleActive,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed('Could not load data from contract.'));
    }
  };
};
