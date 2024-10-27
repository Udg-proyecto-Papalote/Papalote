import { DialogContent, Modal, ModalDialog, Typography, Tabs, Tab, TabList, TabPanel } from "@mui/joy"
import Profile from "./settings/Profile"

const Settings = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <ModalDialog size='lg' minWidth={'30%'}>
                <Typography level='h2'>⚙️ Configuración</Typography>
                <DialogContent>
                    <Tabs
                        aria-label="Vertical tabs"
                        orientation="vertical"
                        sx={{ width: 600, height: 400 , pt:-1}}
                    >
                        <TabList>
                            <Tab color="primary">Perfil</Tab>
                            <Tab>Ejercicios</Tab>
                        </TabList>
                        <TabPanel value={0} sx={{mt:-2}}>
                            <Profile />
                        </TabPanel>
                        <TabPanel value={1} sx={{mt:-2}}>
                            <b>Second</b> tab panel
                        </TabPanel>
                    </Tabs>
                </DialogContent>
            </ModalDialog>
        </Modal>
    )
}
export default Settings
