import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
        <DialogHeader>
            <DialogTitle>Order: 4564sd4545sdf</DialogTitle>
            <DialogDescription>Order details</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
            <Table>
                <TableRow>
                    <TableCell className='text-muted-foreground'>Status</TableCell>
                    <TableCell className='flex justify-end'>
                    <div className="flex items-center gap-2">
                        <span className='h-2 w-2 rounded-full bg-slate-400'/>
                        <span className='font-medium text-muted-foreground'>Pending</span>
                    </div>
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell className='text-muted-foreground'>Client</TableCell>
                    <TableCell className='flex justify-end'>
                        Erika Perciliano
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell className='text-muted-foreground'>Phone</TableCell>
                    <TableCell className='flex justify-end'>
                        (58)265656565
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell className='text-muted-foreground'>E-mail</TableCell>
                    <TableCell className='flex justify-end'>
                        erikaperciliano.developer@gmail.com
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell className='text-muted-foreground'>Done there</TableCell>
                    <TableCell className='flex justify-end'>
                        3 minutes ago
                    </TableCell>
                </TableRow>
            </Table>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead className='text-right'>Qtd.</TableHead>
                        <TableHead className='text-right'>Price</TableHead>
                        <TableHead className='text-right'>Subtotal</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Pepperoni Family Pizza</TableCell>
                        <TableCell className='text-right'>2</TableCell>
                        <TableCell className='text-right'>$ 42.90</TableCell>
                        <TableCell className='text-right'>$ 85.80</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Family Mozzarella Pizza</TableCell>
                        <TableCell className='text-right'>2</TableCell>
                        <TableCell className='text-right'>$ 32.90</TableCell>
                        <TableCell className='text-right'>$ 65.80</TableCell>
                    </TableRow>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total order</TableCell>
                            <TableCell className='text-right font-medium'>$151.60</TableCell>
                        </TableRow>
                    </TableFooter>
                </TableBody>
            </Table>
        </div>
    </DialogContent>
  )
}
