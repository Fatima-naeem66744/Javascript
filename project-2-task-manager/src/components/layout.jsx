import Header from "./header";
import Sidebar from "./sidebar";
import MainContent from "./maincontent";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="flex min-h-[calc(100vh-70px)] flex-col md:flex-row">
        <Sidebar />

        <MainContent>
          {children}
        </MainContent>
      </div>
    </div>
  );
}

export default Layout;