import { DialogContent, Modal, ModalDialog, Typography, Tabs, Tab, TabList, TabPanel, Divider, ModalClose } from "@mui/joy"
import Profile from "./settings/Profile"

const Settings = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose} disableEscapeKeyDown>
            <ModalDialog size='lg' minWidth={'30%'}>
                <ModalClose />
                <Typography level='h2'>⚙️ Configuración</Typography>
                <Divider />
                <DialogContent>
                    <Tabs
                        aria-label="Vertical tabs"
                        orientation="vertical"
                        sx={{ width: 600, height: 350, pt: -1 }}
                    >
                        <TabList>
                            <Tab color="neutral">Perfil</Tab>
                        </TabList>
                        <TabPanel value={0} sx={{ mt: -2 }}>
                            <Profile />
                        </TabPanel>
                    </Tabs>
                </DialogContent>
            </ModalDialog>
        </Modal>
    )
}
export default Settings
