import Header from "components/Header";
import Footer from "components/Footer";

function Layout({ children }) {
  return (
    <>
      <div className="">
        <Header />
        <div className="font-sans pt-16 p-2 max-w-screen-sm m-auto">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
