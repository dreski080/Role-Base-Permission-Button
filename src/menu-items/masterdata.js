// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// import Roles from 'datajson/Roles';

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const masterdata = {
    id: 'masterdata',
    title: 'Master Data',
    type: 'group',
    children: [
        {
            id: 'product1',
            title: 'Product 1',
            type: 'item',
            url: '/app/product',
            icon: icons.LoginOutlined
        },
        {
            id: 'module1',
            title: 'Module 1',
            type: 'item',
            url: '/app/module1',
            icon: icons.LoginOutlined
        },
        {
            id: 'module2',
            title: 'Module 2',
            type: 'item',
            url: '/app/module2',
            icon: icons.LoginOutlined
        },
        {
            id: 'module3',
            title: 'Module 3',
            type: 'item',
            url: '/app/module3',
            icon: icons.LoginOutlined
        }
    ]
};

export default masterdata;
