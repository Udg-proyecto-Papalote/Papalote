import { Chip, Grid, Typography } from '@mui/joy'
import React from 'react'

const Title = ({ title = 'title', theme = 'theme' }) => {
    return (
        <Grid container
            direction="row"
            gap={1}
            sx={{
                alignItems: 'center',
            }}>
            <Typography level='h2'>{title}</Typography>
            <Chip variant="soft" color="primary" size="lg" sx={{ mt: 1 }}>{theme.toUpperCase()}</Chip>
        </Grid>
    )
}

export default Title
