// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    LoginOutlined,
    ProfileOutlined
};

const Roles = [
    {
        role: 'ADMIN',
        menu: [
            {
                id: 'dashboard',
                title: 'Home',
                type: 'group',
                children: [
                    {
                        id: 'dashboard',
                        title: 'Home',
                        type: 'item',
                        url: '/app/dashboard',
                        icon: icons.DashboardOutlined,
                        breadcrumbs: false,
                        permissions: ['export-dashboard', 'import-dashboard']
                    }
                ]
            },
            {
                id: 'masterdata',
                title: 'Master Data',
                type: 'group',
                children: [
                    {
                        id: 'product1',
                        title: 'Product 1',
                        type: 'item',
                        url: '/app/product',
                        icon: icons.LoginOutlined,
                        permissions: ['view-product1', 'detail-product1', 'add-product1', 'edit-product1', 'delete-product1']
                    },
                    {
                        id: 'product2',
                        title: 'Product 2',
                        type: 'item',
                        url: '/app/product',
                        icon: icons.LoginOutlined,
                        permissions: ['view-product1', 'detail-product1', 'add-product1', 'edit-product1', 'delete-product1']
                    }
                ]
            },
            {
                id: 'user',
                title: 'User Data',
                type: 'group',
                children: [
                    {
                        id: 'user',
                        title: 'User',
                        type: 'item',
                        url: '/app/product',
                        icon: icons.LoginOutlined,
                        permissions: ['view-user', 'detail-user', 'add-user', 'edit-user', 'delete-user']
                    }
                ]
            }
        ]
    },
    {
        role: 'USER',
        menu: [
            {
                id: 'dashboard',
                title: 'Home',
                type: 'group',
                children: [
                    {
                        id: 'dashboard',
                        title: 'Home',
                        type: 'item',
                        url: '/app/dashboard',
                        icon: icons.DashboardOutlined,
                        breadcrumbs: false,
                        permissions: ['export-dashboard']
                    }
                ]
            },
            {
                id: 'masterdata',
                title: 'Master Data',
                type: 'group',
                children: [
                    {
                        id: 'product1',
                        title: 'Product 1',
                        type: 'item',
                        url: '/app/product',
                        icon: icons.LoginOutlined,
                        permissions: ['view-product1', 'detail-product1']
                    },
                    {
                        id: 'product2',
                        title: 'Product 2',
                        type: 'item',
                        url: '/app/product',
                        icon: icons.LoginOutlined,
                        permissions: ['view-product1', 'detail-product1']
                    }
                ]
            }
        ]
    }
];
export default Roles;
