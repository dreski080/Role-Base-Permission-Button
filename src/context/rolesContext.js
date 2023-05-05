import React, { useState, createContext, useEffect } from 'react';

import Roles from 'datajson/Roles';

const RolesContext = createContext({});

export const RolesProvider = (props) => {
    const [dataMenu, setDataMenu] = useState(null);

    const getDataMenu = () => {
        const dataFilter = Roles.filter((x) => x.role === localStorage.type?.replace(/"/g, ''));
        setDataMenu(dataFilter);
    };
    useEffect(() => {
        getDataMenu();
    }, []);

    return <RolesContext.Provider value={{ dataMenu, getDataMenu }} {...props} />;
};

export default RolesContext;
