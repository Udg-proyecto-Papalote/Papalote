import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import { MoonStars, Sun } from '@phosphor-icons/react';

const useEnhancedEffect =
    typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

function ModeSwitcher() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <Button
            variant="soft"
            color="neutral"
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        >
            {mode === 'dark' ? <Sun size={32} /> : <MoonStars size={32} />}
        </Button>
    );
}

export default function ModeToggle() {
    // the `node` is used for attaching CSS variables to this demo,
    // you might not need it in your application.
    const [node, setNode] = React.useState<HTMLElement | null>(null);
    useEnhancedEffect(() => {
        setNode(document.getElementById('mode-toggle'));
    }, []);

    return (
        <CssVarsProvider
            // the props below are specific to this demo,
            // you might not need them in your app.
            //
            // the element to apply [data-joy-color-scheme] attribute.
            colorSchemeNode={node || null}
            //
            // the selector to apply the CSS theme variables stylesheet.
            colorSchemeSelector="#mode-toggle"
            //
            // the local storage key to use.
            modeStorageKey="mode-toggle-demo"
        >
            <Box
                id="mode-toggle"
                sx={{
                    textAlign: 'center',
                    flexGrow: 1,
                    mt: 2,
                    borderRadius: [0, 'sm'],
                    top: 0,
                    position: 'fixed',
                }}
            >
                <ModeSwitcher />
            </Box>
        </CssVarsProvider>
    );
}