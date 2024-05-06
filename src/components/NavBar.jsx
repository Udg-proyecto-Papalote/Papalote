import { useState } from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import { tabClasses } from '@mui/joy/Tab';
import { House, Leaf, Microphone } from '@phosphor-icons/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { NavBarTab } from './NavBarTab';


export default function NavBar() {
    const [index, setIndex] = useState(0);

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

    return (
        <Tabs
            size="lg"
            aria-label="Bottom Navigation"
            value={index}
            onChange={(event, value) => setIndex(value)}
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
                        <NavBarTab isSelected={i === index} {...tab} key={i} />
                    ))
                }
            </TabList>
        </Tabs>
    );
}
