import React, { Fragment, useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,

} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TOKEN, USER_LOGIN } from '../../util/settings/config';
import _ from 'lodash';
import SubMenu from 'antd/lib/menu/SubMenu';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [

    getItem(<NavLink>User</NavLink>, '1', <UserOutlined />),
    // getItem('User', 'sub1', <UserOutlined />, [
    //     getItem('Tom', '3'),
    //     getItem('Bill', '4'),
    //     getItem('Alex', '5'),
    //   ]),
    getItem('Films', 'sub2', <FileOutlined />, [
        getItem(<NavLink to='admin/films'>Films</NavLink>, '2'),
        getItem(<NavLink to='admin/films/addnew'>Add new film</NavLink>, '3'),



    ]),

    getItem('Showtime', '4', <DesktopOutlined />),

];

const AdminTemplate = () => {
    const onCollapse = collapsed => {
        // console.log(collapsed);
        setCollapsed(collapsed);
    };
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const operations = <Fragment>
        {!_.isEmpty(userLogin) ? <Fragment> <button onClick={() => {
            navigate('profile')
        }}> <div style={{ width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="text-2xl ml-5 rounded-full bg-red-200">{userLogin.taiKhoan.substr(0, 1)}</div>Hello ! {userLogin.taiKhoan}</button> <button onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            navigate('/');
            window.location.reload();
        }} className="text-blue-800">Đăng xuất</button> </Fragment> : ''}
    </Fragment>
    return (
        <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo p-5">
                        <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="..." />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}>

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0, backgroundColor: 'white' }} >
                        <div className="text-right pr-10 pt-1">{operations}</div>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: '85vh' }}>
                            <Outlet />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Fragment>
    );
};
export default AdminTemplate;