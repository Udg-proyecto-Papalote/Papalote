import { Stack } from "@mui/joy"
import NavBar from "./NavBar"
import ModeToggle from "./ToggleTheme"
import { Logo } from "./Logo"


export const ExtendedNavBar = () => {
    return (
        <Stack direction='row' alignItems='center' justifyContent='space-around' gap='10px' mb='20px' p='30px'>
            <Logo />
            <NavBar />
            <ModeToggle />
        </Stack>
    )
}
