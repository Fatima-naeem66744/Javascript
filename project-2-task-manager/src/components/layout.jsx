import Header from "./header";
import Sidebar from "./sidebar";
import MainContent from "./maincontent";

function Layout({ children }) {
  return (
    <div>
      <Header />

      <div>
        <Sidebar />

        <MainContent>
          {children}
        </MainContent>
      </div>
    </div>
  );
}

export default Layout;