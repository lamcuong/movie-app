import React, { Fragment, useState } from 'react';
import {
    FileOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MA_NGUOI_DUNG, TOKEN, USER_LOGIN } from '../../util/settings/config';
import _ from 'lodash';

import Avatar from '../../components/Avatar/Avatar';
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

    getItem(<NavLink to='admin/user'>User</NavLink>, '1', <UserOutlined />),

    getItem('Films', 'sub2', <FileOutlined />, [
        getItem(<NavLink to='admin/films'>Phim</NavLink>, '2'),
        getItem(<NavLink to='admin/films/addnew'>Thêm phim mới</NavLink>, '3'),



    ]),



];

const AdminTemplate = () => {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    if (!localStorage.getItem(MA_NGUOI_DUNG)) {

        return <Navigate to='/' replace={true} />;
    }

    const onCollapse = collapsed => {

        setCollapsed(collapsed);
    };

    const operations = <div className=''>
        <Avatar />
    </div>


    return (
        <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo p-5">
                        <NavLink to='/'>
                            <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="..." />
                        </NavLink>

                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}>

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <header className="" style={{ padding: 0, backgroundColor: 'white' }} >
                        <div className=" pr-10 pt-1">{operations}</div>
                    </header>
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