// constants
import Web3EthContract from 'web3-eth-contract';
import Web3 from 'web3';
import SmartContract from '../../contracts/ABI.json';
// log
import { fetchData } from '../data/dataActions';

const { REACT_APP_CONTRACT_ADDRESS, REACT_APP_NETWORK_ID, REACT_APP_NETWORK } =
  process.env;

const connectRequest = () => {
  return {
    type: 'CONNECTION_REQUEST',
  };
};

const connectSuccess = payload => {
  return {
    type: 'CONNECTION_SUCCESS',
    payload: payload,
  };
};

const connectFailed = payload => {
  return {
    type: 'CONNECTION_FAILED',
    payload: payload,
  };
};

const updateAccountRequest = payload => {
  return {
    type: 'UPDATE_ACCOUNT',
    payload: payload,
  };
};

export const connect = () => {
  return async dispatch => {
    dispatch(connectRequest());
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    try {
      await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
    } catch (error) {
      console.log(error);
      dispatch(connectFailed('Something went wrong'));
    }
    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(ethereum);
      let web3 = new Web3(ethereum);
      // console.log("web3", web3.eth.getBlock("latest"));
      try {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        });

        const networkId = await ethereum.request({
          method: 'net_version',
        });
        console.log(networkId);
        // const NetworkData = await SmartContract.networks[networkId];
        if (Number(networkId) === Number(REACT_APP_NETWORK_ID)) {
          const SmartContractObj = new Web3EthContract(
            SmartContract,
            REACT_APP_CONTRACT_ADDRESS
          );
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );
          // Add listeners start
          ethereum.on('accountsChanged', accounts => {
            dispatch(updateAccount(accounts[0]));
          });
          ethereum.on('chainChanged', () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch(connectFailed(`Change network to ${REACT_APP_NETWORK}`));
        }
      } catch (err) {
        dispatch(connectFailed('Something went wrong'));
      }
    } else {
      dispatch(connectFailed('Install Metamask'));
    }
  };
};

export const updateAccount = account => {
  return async dispatch => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
