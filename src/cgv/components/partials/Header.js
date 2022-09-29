import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

const HeaderMovies = () => {
  const { pathname } = useLocation();
  let items = [
    {
      label: <Link to="/up-coming">Up coming</Link>,
      key: "/up-coming",
    }, // up coming
  ];
  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={pathname}
        items={items}
      />
    </Header>
  );
};
export default React.memo(HeaderMovies);
