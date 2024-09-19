import { useEffect, useState } from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import { tabClasses } from '@mui/joy/Tab';
import { House, Leaf, Microphone } from '@phosphor-icons/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { NavBarTab } from './NavBarTab';
import { useLocation } from 'react-router-dom';


export default function NavBar() {
    const { pathname } = useLocation()
    const [ index, setIndex ] = useState(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const iconSize = isMobile ? 28 : 24;
    const tabs = [
        {
            name: 'Inicio',
            icon: <House size={iconSize} />,
            selected: <House weight='duotone' size={iconSize} />,
            color: 'primary',
            link: '/'
        },
        {
            name: 'Ejercicios',
            icon: <Leaf size={iconSize} />,
            selected: <Leaf weight='duotone' size={iconSize} />,
            color: 'success',
            link: '/ejercicios'
        },
        {
            name: 'Diagnóstico',
            icon: <Microphone size={iconSize} />,
            selected: <Microphone weight='duotone' size={iconSize} />,
            color: 'warning',
            link: '/diagnostico'
        }
    ]

    useEffect(() => {        
        if(pathname === '/') setIndex(0);
        else if(pathname.startsWith('/ejercicios')) setIndex(1);
        else if(pathname.startsWith('/diagnostico')) setIndex(2);
    }, [ pathname ])


    return (
        <Tabs
            size="lg"
            aria-label="Bottom Navigation"
            value={ index }
            variant='soft'
            sx={() => ({
                p: 1,
                borderRadius: 40,
                maxWidth: 550,
                mx: 'auto',
                [`& .${tabClasses.root}`]: {
                    py: 1,
                    flex: 1,
                    transition: '0.3s',
                    fontWeight: 'md',
                    fontSize: 'md',
                    [`&:not(.${tabClasses.selected}):not(:hover)`]: {
                        opacity: 0.7,
                    },
                },
            })}
        >
            <TabList
                variant="plain"
                size="md"
                disableUnderline
                sx={{ borderRadius: 'lg', gap: 2, px: 2 }}
            >
                {
                    tabs.map((tab, i) => (
                        <NavBarTab isSelected={index === i} {...tab} key={i} />
                    ))
                }
            </TabList>
        </Tabs>
    );
}
