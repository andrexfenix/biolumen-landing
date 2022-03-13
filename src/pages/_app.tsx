import { Web3ReactProvider } from '@web3-react/core';
import { AppProps } from 'next/app';

import { getLibrary } from '../../config/web3';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Component {...pageProps} />
  </Web3ReactProvider>
);

export default MyApp;
