import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header";

const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <main style={{padding: '8rem 0'}}>
        <Outlet />
      </main>
    </>
  );
};

export default PrimaryLayout;