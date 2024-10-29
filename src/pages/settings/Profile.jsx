import { Warning } from "@mui/icons-material"
import { Button, ButtonGroup, Checkbox, DialogContent, DialogTitle, FormControl, Input, Modal, ModalDialog, Option, Select, Stack, Typography, Divider, DialogActions } from "@mui/joy"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNameGender } from "../../store/slices/userSlice"

const genres = ['Mujer', 'Hombre', 'No binario', 'Otro']

const Texto = ({ children }) => <Typography ml={0} mb={1} level='body-sm' sx={{ color: 'var(--joy-palette-text-tertiary)', fontWeight: 600 }}>{children}</Typography>

const Profile = () => {
    const { name, gender } = useSelector(state => state.user)
    const [userGender, setUserGender] = useState(gender)
    const [userName, setUserName] = useState(name)

    const dispatch = useDispatch()
    // console.log(userGender, userName, userEmail, isIll);

    const isDisabled = userGender !== gender || userName !== name;

    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        dispatch(setNameGender({ name: userName, gender: userGender }))
        setOpen(false)
    }

    return (
        <>
            <Stack spacing={2}>
                <FormControl>
                    <Texto>Nombre</Texto>
                    <Input placeholder='Nombre' defaultValue={name} onChange={(e) => setUserName(e.target.value)} />
                </FormControl>
                <FormControl>
                    <Texto>Género</Texto>
                    <Select
                        placeholder="Selecciona tu género"
                        defaultValue={gender}
                        onChange={(e) => setUserGender(e.target.textContent)}
                    >
                        {
                            genres.map((genre) => (
                                <Option key={genre} value={genre}>{genre}</Option>
                            ))
                        }
                    </Select>
                </FormControl>
                <FormControl>
                    <Texto>Introduce tu contraseña para guardar los cambios</Texto>
                    <Input placeholder='Contraseña' type={showPassword ? 'text' : 'password'} sx={{ mb: 1 }} onChange={(e) => setPassword(e.target.value)} disabled={!isDisabled} />
                    <Checkbox label='Mostrar contraseña' checked={showPassword} onChange={() => setShowPassword(!showPassword)} disabled={!isDisabled} />
                </FormControl>
                <Stack direction='row' spacing={1} display={'flex'} justifyContent={'flex-end'}>
                    <Button disabled={!isDisabled || password.length === 0} onClick={() => setOpen(true)}>Guardar</Button>
                </Stack>
            </Stack>
            <Modal open={open} onClose={() => setOpen(false)} disableEscapeKeyDown>
                <ModalDialog variant="outlined" role="alertdialog">
                    <DialogTitle>
                        <Warning />
                        Confirmación
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                        ¿Estás seguro de que deseas guardar los cambios?
                    </DialogContent>
                    <DialogActions>
                        <Button variant="solid" color="danger" onClick={handleClick}>
                            Guardar
                        </Button>
                        <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
                            Cancelar
                        </Button>
                    </DialogActions>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default Profile
