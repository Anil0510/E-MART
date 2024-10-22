import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ProductIcon from '@mui/icons-material/Store';

const Sidebar = ({ open, onClose }) => {
    const menuItems = [
        { text: 'Home', icon: <HomeIcon />, path: '/', sx: { color: 'black' } },
    ];
   
    // const menup = [
    //     { text: 'Products', icon: <ProductIcon />, path: '/product', sx: { color: 'black' } },
    // ];
    const menu = [
        { text: 'About us', icon: <InfoIcon />, path: '/about', sx: { color: 'black' } },
    ];

    return (
        <Drawer open={open} onClose={onClose}>
            <div
                role="presentation"
                onClick={onClose}
                onKeyDown={onClose}
                style={{ width: 250 }}
            >
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem button component={Link} to={item.path} key={index}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} sx={item.sx} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {menu.map((item, index) => (
                        <ListItem button component={Link} to={item.path} key={index}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} sx={item.sx} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {/* {menup.map((item, index) => (
                        <ListItem button component={Link} to={item.path} key={index}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} sx={item.sx} />
                        </ListItem>
                    ))} */}
                </List>
            </div>
        </Drawer>
    );
};

export default Sidebar;
