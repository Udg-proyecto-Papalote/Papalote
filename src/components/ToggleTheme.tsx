import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import { MoonStars, Sun } from '@phosphor-icons/react';
import { Button, IconButton } from '@mui/joy';
import { useLocation } from 'react-router-dom';

const useEnhancedEffect =
    typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;


function ModeSwitcher() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    const { pathname } = useLocation();
    const styless = {
        position: 'fixed', top: '0px', left: pathname === '/iniciarsesion' ? '20px' : '', right: pathname === '/registro' ? '20px' : '', zIndex: 1000,
    }
    const [styles, setStyles] = React.useState({})

    React.useEffect(() => {
        setMounted(true);

        if (pathname === '/registro' || pathname === '/iniciarsesion') {
            setStyles(styless)
        } else {
            setStyles({})
        }
    }, []);

    if (!mounted) {
        return null;
    }



    return (
        <Button
            variant="plain"
            sx={{
                borderRadius: '100px', p: 1.5, height: '45px', width: '45px',
                ...styles
            }}
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        >
            {mode === 'dark' ? <Sun size={32} weight='duotone' /> : <MoonStars size={32} weight='duotone' />}
        </Button>
    );
}

export default function ModeToggle() {
    return (
        <CssVarsProvider
            colorSchemeSelector="#mode-toggle"
            modeStorageKey="mode-toggle-demo"
        >
            <ModeSwitcher />
        </CssVarsProvider>
    );
}