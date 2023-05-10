import { NextUIProvider } from '@nextui-org/react';
import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const [symbol, setSymbol] = useState(<span className="text-slate-900">&#36;</span>);

  const handleSymbol = (e) => {
    if (e === 'EUR') {
      setSymbol(<span className="text-slate-900">&#8364;</span>);
    } else if (e === 'JPY') {
      setSymbol(<span className="text-slate-900">&#165;</span>);
    } else {
      setSymbol(<span className="text-slate-900">&#36;</span>);
    }
  };

  return (
    <NextUIProvider>
      <Layout symbol={symbol} handleSymbol={handleSymbol}>
        <Component {...pageProps} symbol={symbol} />
      </Layout>
    </NextUIProvider>
  );
}
