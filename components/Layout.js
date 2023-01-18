import Header from "./Header";


export default function Layout({ children }) {
  return (
    <>
      <div className="px-[117px]">
      <Header />
      <main>{children}</main>
      </div>
    </>
  )
}