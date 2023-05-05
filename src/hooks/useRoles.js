import { useContext } from 'react';
import RolesContext from '../context/rolesContext';

const useRoles = () => {
    return useContext(RolesContext);
};

export default useRoles;
