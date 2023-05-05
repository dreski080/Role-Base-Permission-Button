import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// material-ui
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// APIs
import ApiAuth from '../../../services/authServices';

// Hooks
import useAuth from '../../../hooks/useAuth';
import useRoles from 'hooks/useRoles';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
    const [checked, setChecked] = React.useState(false);

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // ===================================================
    const navigate = useNavigate();
    const { setAuth } = useAuth();
    const { getDataMenu } = useRoles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const dataPost = {
            name: username,
            password
        };
        // console.log('postData', dataPost);
        ApiAuth.login(dataPost)
            .then((res) => {
                // console.log('berhasil login', res);
                if (res.data.token) {
                    const token = res.data.token;
                    const user = res.data.user;
                    const role = user.roles;
                    // console.log(res.data, 'respon');
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('type', JSON.stringify(user.type));
                    localStorage.setItem('rights', JSON.stringify(role));
                    // console.log(localStorage);
                    setAuth({ token, role, user });
                    navigate('/app/dashboard');
                    getDataMenu();
                    // if (user.type === 'USER') {
                    //     navigate('/app/dashboard');
                    // }
                    // if (user.type === 'ADMIN') {
                    //     navigate('/app/product');
                    // }
                }
            })
            .catch((err) => {
                console.log('err', err);
            });
    };

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="email-login">Email Address</InputLabel>
                        <OutlinedInput
                            id="email-login"
                            type="email"
                            value={username}
                            name="email"
                            // onBlur={handleBlur}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter email address"
                            fullWidth
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="password-login">Password</InputLabel>
                        <OutlinedInput
                            fullWidth
                            id="-password-login"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            name="password"
                            // onBlur={handleBlur}
                            onChange={(e) => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="large"
                                    >
                                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            placeholder="Enter password"
                        />
                    </Stack>
                </Grid>

                <Grid item xs={12} sx={{ mt: -1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={(event) => setChecked(event.target.checked)}
                                    name="checked"
                                    color="primary"
                                    size="small"
                                />
                            }
                            label={<Typography variant="h6">Keep me sign in</Typography>}
                        />
                        <Link variant="h6" component={RouterLink} to="" color="text.primary">
                            Forgot Password?
                        </Link>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <AnimateButton>
                        <Button disableElevation fullWidth size="large" onClick={handleSubmit} variant="contained" color="primary">
                            Login
                        </Button>
                    </AnimateButton>
                </Grid>
                <Grid item xs={12}>
                    <Divider>
                        <Typography variant="caption"> Login with</Typography>
                    </Divider>
                </Grid>
                <Grid item xs={12}>
                    <FirebaseSocial />
                </Grid>
            </Grid>
        </>
    );
};

export default AuthLogin;
