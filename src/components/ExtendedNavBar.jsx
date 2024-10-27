import { Stack } from "@mui/joy"
import NavBar from "./NavBar"
import ModeToggle from "./ToggleTheme"
import { Logo } from "./Logo"
import { useMediaQuery } from "@mui/material"
import { useState } from "react"
import Settings from "../pages/Settings"


export const ExtendedNavBar = () => {
    const isNotMobile  = useMediaQuery('(min-width: 400px)')
    const [open, setOpen] = useState(false)
    return (
        <>
        <Stack direction='row' alignItems='center' justifyContent='space-between' gap='10px' my='20px' mx={ isNotMobile && '20px' }>
            { isNotMobile && <Logo onOpen={() => setOpen(true)}/> }
            <NavBar />
            { isNotMobile && <ModeToggle /> }
        </Stack>
        <Settings open={open} onClose={() => setOpen(false)} />
        </>
    )
}
