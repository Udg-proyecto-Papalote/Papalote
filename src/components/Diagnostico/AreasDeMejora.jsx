import { Card, CardContent } from '@mui/joy'
import { Cell, Pie, PieChart } from 'recharts'
import DiagnosticLegend from './DiagnosticLegend';
import { useEffect, useState } from 'react';
const data = [
    { name: 'Dicción', value: 1, color: '#FF8042' },
    { name: 'Modulación', value: 1, color: '#8b5cf6' },
    { name: 'Tono', value: 1, color: '#22c55e' },
];


const AreasDeMejora = ({ title, areasDeMejora = ['Dicción', 'Modulación'] }) => {
    const [areas, setAreas] = useState([])

    useEffect(() => {
        setAreas(data.map((entry) => {
            if (areasDeMejora.includes(entry.name)) {
                return { ...entry, value: 1 }
            } else {
                return { ...entry, value: 0 }
            }
        }))
    }, [areasDeMejora])
    return (
        <Card>
            {title}
            <CardContent orientation='horizontal' sx={{ alignItems: 'center', justifyContent: 'center', gap: 5, pl: 2, pt: 2 }}>
                <PieChart width={200} height={200} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                    <Pie
                        data={areas}
                        innerRadius={60}
                        outerRadius={100}
                        dataKey="value"
                        labelLine={true}
                        cornerRadius={7}
                        paddingAngle={5}
                    >
                        {areas.map((entry, index) => (
                            entry.value > 0 && <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
                <DiagnosticLegend data={areas.filter((entry) => entry.value > 0)} />
            </CardContent>
        </Card>
    )
}

export default AreasDeMejora
