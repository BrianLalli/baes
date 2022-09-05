import React, {useState} from 'react';
import Style from '../Navbar/Navbar.module.scss';
import Toggler from "../Toggler/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";

const links = [
    {
        name: "Bae/s",
        // type: 'icon',
        to: '/',
        active: 'home'
    },
    {
        name: 'Home',
        to: '/home',
        active: 'home'
    },
    {
        name: 'Login',
        to: '/login',
        active: 'login'
    },
    {
        name: 'Get Started',
        to: '/',
        active: 'getStarted'
    },
    // {
    //     name: 'Profile',
    //     to: '/profile',
    //     active: 'resume'
    // },
    // {
    //     name: 'Admin',
    //     to: '/admin',
    //     active: 'admin'
    // },
]

export default function Navbar({darkMode, handleClick}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));


    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                        //  sx={{borderImageSource: info.gradient}}
                >
                        <Link to={link.to} onClick={() => {
                           setActive(link.active)
                        }}>
                            {!link.type && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
            </Box>
        </Box>
    )
}




