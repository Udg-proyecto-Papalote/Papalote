import { Button, ButtonGroup, Checkbox, FormControl, Input, Option, Select, Stack, Typography } from "@mui/joy"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

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

    const handleClick = () => {
    }
    
    return (
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
                <Button disabled={!isDisabled}>Guardar</Button>
            </Stack>
        </Stack>
    )
}

export default Profile
