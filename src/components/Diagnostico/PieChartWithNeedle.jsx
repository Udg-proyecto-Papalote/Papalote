
import { Card, Stack, Typography } from '@mui/joy';
import { CardContent } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';
import DiagnosticLegend from './DiagnosticLegend';

const RADIAN = Math.PI / 180;
const data = [
    { name: 'Grave', value: 1, color: '#86efac' },
    { name: 'Moderado', value: 1, color: '#22c55e' },
    { name: 'Agudo', value: 1, color: '#15803d' },
];
const cx = 100;
const cy = 120;
const iR = 50;
const oR = 100;
const tono = {
    'agudo': 2.5,
    'moderado': 1.5,
    'grave': 0.5
}

const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
        total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
        <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" key='circle' />,
        <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} key='path'/>,
    ];
};

const PieChartWithNeedle = ({ value = 'grave', title = <></> }) => {
    return (
        <Card>
            {title}
            <Typography mb={-3} level='body-lg' fontStyle='italic' textAlign='center'>
                El tono es la altura de la voz.
            </Typography>
            <Stack direction='row' spacing={4} alignItems='center' mb={-3}>
                <CardContent>
                    <PieChart width={200} height={150} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                        <Pie
                            dataKey="value"
                            startAngle={180}
                            endAngle={0}
                            data={data}
                            cx={cx}
                            cy={cy}
                            innerRadius={iR}
                            outerRadius={oR}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} radius={100} />
                            ))}
                        </Pie>
                        {needle(tono[value], data, cx, cy, iR, oR, 'var(--joy-palette-text-primary)')}
                    </PieChart>
                </CardContent>
                <DiagnosticLegend data={data} />
            </Stack>
            <Typography textAlign='center'>
                <Typography level='h4' >Tu tono es </Typography>
                <Typography level='h4' sx={{ textDecoration: 'underline', textDecorationThickness: 3, textDecorationColor: (value === 'agudo' ? '#15803d' : value === 'moderado' ? '#22c55e' : '#86efac') }}
                    textAlign='center'>{value}</Typography>
                    .
            </Typography>
        </Card>
    )
}

export default PieChartWithNeedle
