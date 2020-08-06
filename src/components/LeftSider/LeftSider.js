import React, { useState } from "react";

import {
  SaveOutlined,
  NotificationOutlined,
  HomeOutlined,
  UserOutlined,
  MoreOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Menu, Layout } from "antd";

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
      <div className="logo">Mukh</div>
      <Menu theme="" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<NotificationOutlined />}>
          Explore
        </Menu.Item>
        <Menu.Item key="3" icon={<NotificationOutlined />}>
          Notifications
        </Menu.Item>
        <Menu.Item key="4" icon={<MailOutlined />}>
          Message
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="6" icon={<SaveOutlined />}>
          Bookmarks
        </Menu.Item>
        <Menu.Item key="7" icon={<MoreOutlined />}>
          More
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default LeftSider;
