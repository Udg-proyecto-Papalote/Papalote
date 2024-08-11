import { Stack } from "@mui/joy"
import NavBar from "./NavBar"
import ModeToggle from "./ToggleTheme"
import { Logo } from "./Logo"
import { useMediaQuery } from "@mui/material"


export const ExtendedNavBar = () => {
    const isNotMobile  = useMediaQuery('(min-width: 400px)')
    return (
        <Stack direction='row' alignItems='center' justifyContent='space-between' gap='10px' my='20px' mx={ isNotMobile && '20px' }>
            { isNotMobile && <Logo /> }
            <NavBar />
            { isNotMobile && <ModeToggle /> }
        </Stack>
    )
}
