import Header from './Header';

export default function Layout({ children, symbol, handleSymbol }) {
  return (
    <>
      <div className="px-[101px] flex min-h-screen flex-col pb-[100px]">
        <Header symbol={symbol} handleSymbol={handleSymbol} />
        <main className="py-[80px] h-full">{children}</main>
      </div>
    </>
  );
}
