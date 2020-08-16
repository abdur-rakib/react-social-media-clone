import React, { useState } from "react";

import {
  SaveOutlined,
  NotificationOutlined,
  HomeOutlined,
  UserOutlined,
  MailOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const LeftSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      className="site-layout-background"
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      breakpoint="md"
    >
      <div className="logo">
        <span className="font-italic">MB</span>
      </div>

      <Menu theme="" mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<AreaChartOutlined />}>
          <Link to="/explore">Explore</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<NotificationOutlined />}>
          <Link to="/notifications"> Notifications</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<MailOutlined />}>
          <Link to="/message"> Message</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          <Link to="/profile"> Profile</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<SaveOutlined />}>
          <Link to="/bookmarks"> Bookmarks</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default LeftSider;
