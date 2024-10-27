import { Logout, Settings } from "@mui/icons-material"
import { Avatar, Dropdown, IconButton, ListItemDecorator, Menu, MenuButton, MenuItem } from "@mui/joy"
import { useNavigate } from "react-router-dom"

export const Logo = ({ onOpen }) => {
    const navigate = useNavigate()
    return (
        <Dropdown>
            <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { sx: { borderRadius: '0px', width: '35px', height: '35px', mr: '20px', backgroundColor: 'transparent' } } }}
            >
                <Avatar src="/kite.png" size="lg" sx={{ borderRadius: '0px', width: '35px', height: '35px', backgroundColor: 'transparent' }} />
            </MenuButton>
            <Menu placement="bottom-end">
                {/* <MenuItem onClick={() => navigate('/configuracion')}> */}
                <MenuItem onClick={onOpen}>
                    <ListItemDecorator>
                        <Settings />
                    </ListItemDecorator>{' '}
                    Configuración</MenuItem>
                <MenuItem>
                    <ListItemDecorator>
                        <Logout />
                    </ListItemDecorator>{' '}
                    Cerrar Sesión</MenuItem>
            </Menu>
        </Dropdown>
    )
}
