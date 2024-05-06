import { ListItemDecorator, Tab, useTheme, tabClasses } from "@mui/joy"
import { useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";


export const NavBarTab = ({ isSelected, selected, icon, color, name }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Tab
            disableIndicator
            orientation={isMobile ? 'vertical' : 'horizontal'}
            {...(isSelected && { color: color })}
            sx={{
                borderRadius: 45,
                px: 3,
                justifyItems: 'center',
                alignItems: 'center',
                [`&.${tabClasses.selected}`]: {
                    border: '1px solid',
                }
            }}
        >
            <ListItemDecorator sx={{ marginBlockEnd: 0 }}>
                {
                    isSelected ?
                        selected :
                        icon
                }
            </ListItemDecorator>
            {!isMobile && name}
        </Tab>
    )
}


// Props
NavBarTab.propTypes = {
    isSelected: PropTypes.bool,
    selected: PropTypes.node,
    icon: PropTypes.node,
    color: PropTypes.string,
    name: PropTypes.string,
}
