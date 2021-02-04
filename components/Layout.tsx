import Header from "components/Header";
import Footer from "components/Footer";

function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="font-sans pt-20 p-2 max-w-screen-sm m-auto">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
