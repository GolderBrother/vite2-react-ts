import React, { ReactElement } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
interface MenuItem {
  key: string;
  to: string;
  children: string | ReactElement;
}
const menuItemList: MenuItem[] = [
  {
    key: "home",
    to: "/home",
    children: "home",
  },
  {
    key: "user",
    to: "/user",
    children: "user",
  },
];
export const Layout: React.FC = () => {
  return (
    <Menu mode="horizontal">
      {menuItemList.map((menuItem: MenuItem) => (
        <Menu.Item key={menuItem.key}>
          <Link to={menuItem.to}>{menuItem.children}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
