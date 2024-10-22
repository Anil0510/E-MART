import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Badge, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { cartItems } = useCart();
    const navigate = useNavigate();

    const handleDrawerOpen = () => {
        setSidebarOpen(true);
    };

    const handleDrawerClose = () => {
        setSidebarOpen(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false); 
        navigate('/Login'); 
    };

    return (
        <div>
            <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'black' }}>
                <Toolbar>
                    <IconButton edge="start" aria-label="menu" onClick={handleDrawerOpen} sx={{ color: 'black' }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1, color: 'black' }}>
                        E-Mart
                    </Typography>
                    <Box sx={{ flexGrow: 2, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        {isLoggedIn ? (
                            <Button color="inherit" onClick={handleLogout} sx={{ marginRight: 2, color: 'black' }}>
                                Logout
                            </Button>
                        ) : (
                            <>
                                <Button color="inherit" onClick={() => navigate('./Login')} sx={{ marginRight: 2, color: 'black' }}>
                                    Login
                                </Button>
                                <Button color="inherit" onClick={() => navigate('./Signup')} sx={{ marginRight: 2, color: 'black' }}>
                                    Signup
                                </Button>
                            </>
                        )}
                        <Link to="/cart" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
                            <Badge badgeContent={cartItems.length} color="secondary" sx={{ marginLeft: 1 }}>
                                <ShoppingCartIcon />
                            </Badge>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Sidebar open={sidebarOpen} onClose={handleDrawerClose} />
        </div>
    );
};

export default Navbar;
