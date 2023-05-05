import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// hooks
import useAuth from '../hooks/useAuth';

// route
import routes from './Routes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    // console.log(localStorage.token, 'localStorage');
    const token = localStorage.token;
    const routing = useRoutes(routes(token));
    return <>{routing}</>;
    // return useRoutes([LoginRoutes, MainRoutes]);
}
