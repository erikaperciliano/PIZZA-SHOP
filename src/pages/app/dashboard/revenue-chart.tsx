import { getDailyRevenueInPeriod } from '@/api/get-daily-revenue-in-period'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts'
import colors from 'tailwindcss/colors'

export function RevenueChart() {
    const { data: dailyRevenueInPeriod } = useQuery({
        queryKey: ['metrics', 'daily-revenue-in-period'],
        queryFn: getDailyRevenueInPeriod
    })
    return (
        <Card className='col-span-6'>
            <CardHeader className='flex-row items-center justify-between pb-8'>
                <div className="space-y-1">
                    <CardTitle className='text-base font-medium'>Revenue in the period</CardTitle>
                    <CardDescription>Daily revenue in the period</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                {dailyRevenueInPeriod && (
                    <>
                <ResponsiveContainer width='100%' height={240}>
                        <LineChart data={dailyRevenueInPeriod} style={{ fontSize: 12 }}>
                            <XAxis 
                                dataKey='date' 
                                axisLine={false} 
                                tickLine={false} 
                                dy={16}
                            />
                            <YAxis 
                                stroke='#888' 
                                axisLine={false} 
                                tickLine={false} 
                                tickFormatter={(value: number) => 
                                    value.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD'
                                    })
                                }
                            />

                            <CartesianGrid vertical={false} className='stroke-muted'/>

                            <Line type='linear' strokeWidth={2} dataKey='receipt' stroke={colors.violet['500']}/>
                        </LineChart>
                    </ResponsiveContainer>
                    </>
                    
                )}
                
            </CardContent>
            
        </Card>
    )
}
