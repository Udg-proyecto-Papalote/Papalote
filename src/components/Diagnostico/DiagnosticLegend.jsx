import { Box, CardContent, Typography } from "@mui/joy"


const DiagnosticLegend = ({ data = [
    {
        name: 'Alto',
        color: '#86efac'
    },
    {
        name: 'Moderado',
        color: '#22c55e'
    },
    {
        name: 'Bajo',
        color: '#15803d'
    }
] }) => {
    return (
        <CardContent>
            {
                data.map((entry, index) => (
                    <CardContent key={`cell-${index}`} orientation='horizontal'>
                        <Box sx={{ width: 22, height: 22, bgcolor: entry.color, borderRadius: 5 }} />
                        <Typography level='title-md'>{entry.name}</Typography>
                    </CardContent>
                ))
            }
        </CardContent>

    )
}

export default DiagnosticLegend
