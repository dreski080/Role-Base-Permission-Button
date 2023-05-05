import React, { useEffect, useState } from 'react';
import useStyles from './styles';

// material-ui
import { Card, Typography, Stack, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

// APIs
import RoleAPI from '../../services/roleServices';

// Hooks
import useRoles from '../../hooks/useRoles';

function Products() {
    const classes = useStyles();
    const { dataMenu } = useRoles();

    const [dataPermission, setDataPermission] = useState(null);

    const getPermission = () => {
        const filterData = dataMenu ? dataMenu[0]?.menu.filter((x) => x.title === 'Master Data')[0] : null;
        const filterFitur = filterData?.children.filter((x) => x.title === 'Product 1');
        setDataPermission(filterFitur[0]?.permissions);
        console.log(filterFitur[0]?.permissions, 'filterFitur');
    };

    const Type = localStorage.getItem('type').replace(/"/g, '');

    const [dataRole, setDataRole] = useState(null);

    useEffect(() => {
        getPermission();
        RoleAPI.getRoles({ params: { Type: Type } })
            .then((res) => {
                const data = res.data.data[0];
                setDataRole(data?.permissions);
                // console.log(res.data, 'respon');
            })
            .catch((err) => {
                console.log('err', err);
            });
    }, []);

    return (
        <div>
            <Typography className={classes.title}>Product 1</Typography>
            <Card className={classes.card}>
                {dataPermission?.indexOf('add-product1') !== -1 && (
                    <Stack direction="row" justifyContent="flex-start" alignItems="flex-start">
                        <Button>Tambah</Button>
                    </Stack>
                )}

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nama Barang</TableCell>
                            <TableCell align="right">Kategori</TableCell>
                            <TableCell align="right">Harga</TableCell>
                            <TableCell align="right">Jumlah</TableCell>
                            <TableCell align="right">Aksi</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Barang 1</TableCell>
                            <TableCell align="right">Baju</TableCell>
                            <TableCell align="right">100.000</TableCell>
                            <TableCell align="right">100</TableCell>
                            <TableCell align="right">
                                <Button>Detail</Button>
                                {dataPermission?.indexOf('edit-product1') !== -1 && <Button>Edit</Button>}
                                {dataPermission?.indexOf('delete-product1') !== -1 && <Button>Delete</Button>}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}

export default Products;
