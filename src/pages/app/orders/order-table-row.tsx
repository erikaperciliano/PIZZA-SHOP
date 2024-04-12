import {  TableCell, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { ArrowRight, Search, X } from 'lucide-react'

//export interface OrderTableRowProps {}

export function OrderTableRow() {
  return (
    <TableRow>
        <TableCell>
            <Button variant='outline' size='xs'>
                <Search className='h-3 w-3'/>
                <span className='sr-only'>Order details</span>
            </Button>
        </TableCell>
        <TableCell className='font-mono text-xs font-medium'>adsfasfasfasfasdfsa</TableCell>
        <TableCell className='text-muted-foreground'>15 minutes ago</TableCell>
        <TableCell>
            <div className="flex items-center gap-2">
                <span className='h-2 w-2 rounded-full bg-slate-400'/>
                <span className='font-medium text-muted-foreground'>Pending</span>
            </div>
        </TableCell>
        <TableCell className='font-medium'>Erika Perciliano</TableCell>
        <TableCell className='font-medium'>$ 149.98</TableCell>
        <TableCell>
            <Button variant='outline' size='xs'>
                <ArrowRight  className='mr-2 h-3 w-3'/> 
                To approve  
            </Button>
        </TableCell>
        <TableCell>
            <Button variant='ghost' size='xs'>
                <X  className='mr-2 h-3 w-3'/>   
                Cancel
            </Button>
        </TableCell>
    </TableRow>
  )
}
