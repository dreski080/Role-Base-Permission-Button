import { useContext, useEffect } from 'react';
// material-ui
import { Box, Typography } from '@mui/material';

// project import
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

// Data JSON
import Roles from 'datajson/Roles';

// Hooks
import useRoles from '../../../../../hooks/useRoles';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
    const { dataMenu } = useRoles();

    // const menuFilter = Roles.filter((x) => x.role === 'USER');
    // console.log(dataMenu);

    const navGroups = dataMenu
        ? dataMenu[0]?.menu.map((item) => {
              switch (item.type) {
                  case 'group':
                      return <NavGroup key={item.id} item={item} />;
                  default:
                      return (
                          <Typography key={item.id} variant="h6" color="error" align="center">
                              Fix - Navigation Group
                          </Typography>
                      );
              }
          })
        : null;

    return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};

export default Navigation;
