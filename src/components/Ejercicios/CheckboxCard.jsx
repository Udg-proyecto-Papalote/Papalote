import { HouseOutlined } from "@mui/icons-material"
import { Card, CardContent, Checkbox, Typography } from "@mui/joy"
import { useState } from "react"

const CheckboxCard = ({ icon = <HouseOutlined />, title = "Escucha", coso = <></>, description = '', word = '', setCheckedBoxes, setUncheckedBoxes, checkedBoxes
 }) => {

    const [checked, setChecked] = useState(false)

    return (
        <Card sx={{ flex: 1 }}>
            <CardContent sx={{ flexDirection: 'column', gap: 2, justifyContent: 'center', justifyItems:'center' }}>
                <CardContent orientation="horizontal" sx={{ justifyContent: 'space-between', flex: 1 }}>
                    <CardContent orientation="horizontal" sx={{ gap: 1 }}>
                        {icon}
                        <Typography level="title-lg">{title}</Typography>
                    </CardContent>
                    <Checkbox variant='outlined' color='neutral' checked={checked} size="lg" onChange={(e) => {
                        setChecked(e.target.checked)
                        e.target.checked ? setCheckedBoxes(checkedBoxes + 1) : setUncheckedBoxes(checkedBoxes - 1)
                    }} />
                </CardContent>
                <CardContent sx={{ alignItems: 'center', flex: 2, gap:2 }}>
                    {coso || word}
                    <Typography  fontWeight={600} fontSize={20} textAlign='center' px={4} fontStyle='italic' mx={4}>
                        {description}
                    </Typography>
                </CardContent>
            </CardContent>
        </Card>
    )
}

export default CheckboxCard
