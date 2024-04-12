import { Table, TableBody,  TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Helmet } from 'react-helmet-async'
import { OrderTableRow } from './order-table-row'
import { OrderTableFilter } from './order-table-filter'
import { Pagination } from '@/components/pagination'

export function Orders() {
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
                            { Array.from({ length: 10 }).map((_, i) => {
                                return (
                                <OrderTableRow key={i}/>
                                )
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
