import React, { useCallback, useEffect } from 'react';

import { useWeb3React } from '@web3-react/core';
import Link from 'next/link';

import { connector } from '../../config/web3';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

function Hero(props: Any): React.ReactNode {
  const { activate, active, deactivate, error, account, chainId } =
    useWeb3React();

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem('previouslyConnected', true);
  });

  const disconnect = () => {
    deactivate();
    localStorage.removeItem('previouslyConnected');
  };

  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true') {
      connect();
    }
  }, [connect]);

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
              <a>GitHub</a>
            </Link>
          </li>
          <li>
            {active ? (
              <div>
                <button
                  onClick={disconnect}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    border: '1px solid red',
                    borderRadius: 10,
                    height: 50,
                    width: 150,
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {`${account?.substring(0, 5)}...${account?.substring(
                    account.length - 4,
                    account.length - 1
                  )}`}{' '}
                  <div
                    style={{
                      marginLeft: 10,
                      marginRight: 10,
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: 'red',
                    }}
                  ></div>
                </button>
              </div>
            ) : (
              <button onClick={connect}>Connect wallet</button>
            )}
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <div
          style={{
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <img src={'/biolumen_main.jpg'} width={1200} height={500} />
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: 'white',
              position: 'absolute',
              top: 320,
            }}
          >
            DAO
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'green',
              position: 'absolute',
              top: 420,
            }}
          >
            A place to build, enjoy, learn and preservate together
          </div>
        </div>
      </Section>
    </Background>
  );
}

export { Hero };
