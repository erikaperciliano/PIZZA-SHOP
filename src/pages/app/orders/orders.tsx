import { Table, TableBody,  TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Helmet } from 'react-helmet-async'
import { OrderTableRow } from './order-table-row'
import { OrderTableFilter } from './order-table-filter'
import { Pagination } from '@/components/pagination'
import { useQuery } from '@tanstack/react-query'
import { getOrders } from '@/api/get-orders'

export function Orders() {
    const { data: result } = useQuery({
        queryKey: ['orders'],
        queryFn: getOrders
    })

    return (
        <>
            <Helmet title='Requests'/>
            <div className='flex  flex-col gap-4'>
                <h1 className='text-3xl font-bold tracking-tight'>Requests</h1>

                <div className='space-y-2.5'>
                    <OrderTableFilter />

                    <div className="border rounded-md">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className='w-[64px]'></TableHead>
                                    <TableHead className='w-[140px]'>Identifier</TableHead>
                                    <TableHead className='w-[180px]'>Done there</TableHead>
                                    <TableHead className='w-[140px]'>Status</TableHead>
                                    <TableHead>Client</TableHead>
                                    <TableHead className='w-[140px]'>Total order</TableHead>
                                    <TableHead className='w-[164px]'></TableHead>
                                    <TableHead className='w-[132px]'></TableHead>
                                </TableRow> 
                            </TableHeader>

                            <TableBody>
                                {result && result.orders.map(order => {
                                    return <OrderTableRow key={order.orderId} order={order}/>
                                })}
                            </TableBody>
                        </Table>
                    </div>

                    <Pagination pageIndex={0} totalCount={105} perPage={10}/>
                </div>
            </div>
        </>
    )
}
