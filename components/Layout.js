import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <div className="px-[101px] flex h-screen flex-col">
        <Header />
        <main className="py-[80px] h-full">{children}</main>
      </div>
    </>
  );
}
