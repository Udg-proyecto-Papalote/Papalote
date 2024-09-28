import { Card, Grid, Typography } from '@mui/joy'
import { useEffect, useState } from 'react'
import { Bar, BarChart, YAxis } from 'recharts'
import DiagnosticLegend from './DiagnosticLegend';


const dataa = [
    {
        name: 'Modulación',
        Lento: 135,
        Ideal: 25,
        Rápido: 50,
    }
];

const data = [
    { name: 'Lento', color: '#c4b5fd', value: 135 },
    { name: 'Ideal', color: '#a78bfa', value: 25 },
    { name: 'Rápido', color: '#8b5cf6', value: 50 },
    { name: 'Tu modulación', color: '#f43f5e', value: 130 },
];

const Modulacion = ({ title, miModulacion = { 'Tu modulación': 130 } }) => {
    const [chartData, setChartData] = useState(dataa)

    useEffect(() => {
        setChartData([...dataa, miModulacion])
    }, [miModulacion])
    return (
        <Card>
            {title}
            <Typography level='body-lg' fontStyle='italic' textAlign='center' mx={4}>
                La modulación es la variación de la velocidad y el ritmo al hablar.
            </Typography>
            
            <Grid container spacing={4} alignItems='center' mb={-3}>
                <Grid lg={6} md={6} sm={6} xs={6}>
                    <BarChart
                        width={180}
                        height={350}
                        data={chartData}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 25,
                        }}
                    >
                        <YAxis fontSize={12} />
                        {
                            data.map((entry, index) => (
                                <Bar key={`cell-${index}`} dataKey={entry.name} stackId="a" fill={entry.color} radius={5} />
                            ))
                        }
                    </BarChart>
                </Grid>
                <Grid lg={6} md={6} sm={6} xs={6}>
                <Typography level='title-lg' mb={4}>Leíste {miModulacion['Tu modulación']} palabras por minuto.
                </Typography>
                    <DiagnosticLegend data={data} />
                </Grid>
            </Grid>
        </Card>
    )
}

export default Modulacion
