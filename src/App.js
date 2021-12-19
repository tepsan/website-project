import React, { useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  extendTheme
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Headers } from './components';
import { Home, About, Team } from './pages';
import Fonts from './Fonts';
import { connect } from './redux/blockchain/blockchainActions';
import { fetchData } from './redux/data/dataActions';

const extendedThemes = extendTheme({
  ...theme,
  fonts: {
    heading: 'Gotham Rounded Bold',
    body: 'Gotham Rounded Medium',
  },
  colors: {
    ...theme.colors,
    pinkBtn: '#fb6878',
    yellowBtn: '#f8d859',
  },
});

const { REACT_APP_CONTRACT_ADDRESS } = process.env;

function App() {
  const blockchain = useSelector(state => state.blockchain);
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();
  const { account, loading, smartContract } = blockchain;

  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const handleConnect = () => {
    dispatch(connect());
    getData();
  };

  useEffect(() => {
    if (!blockchain.account && !blockchain.smartContract) {
      handleConnect();
    } else {
      getData();
    }
  }, [blockchain.account]);

  useEffect(() => {
    if (blockchain.errorMsg) {
      toast.error(blockchain.errorMsg);
    }
    if (data.errorMsg) {
      toast.error(data.errorMsg);
    }
  }, [blockchain.errorMsg, data.errorMsg]);

  const claimNFTs = (count, cost) => {
    if (count <= 0) {
      return;
    }

    toast.info('Preparing your NFT...');
    const value = blockchain.web3.utils.toWei((cost * count).toString(), 'ether');

    smartContract.methods
      .mint(count)
      .send({
        gasLimit: '285000',
        to: REACT_APP_CONTRACT_ADDRESS,
        from: account,
        value,
      })
      .once('error', err => {
        toast.error('It seems the transaction was cancelled.');
      })
      .then(receipt => {
        toast.success('Woohoo! Doodcat minted successfully!');
        dispatch(fetchData(account));
      });
  };


  return (
    <ChakraProvider theme={extendedThemes}>
      <Fonts />
      <Box
        backgroundImage={`${process.env.PUBLIC_URL}/images/bg.svg`}
        backgroundPosition="center"
        backgroundSize="cover"
        className="main"
        objectFit="cover"
      >
        <Headers account={account} onConnect={handleConnect} />
        <Home
          data={data}
          account={account}
          loading={loading}
          onMint={claimNFTs}
        />
        <About />
        <Team />
        <ToastContainer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
