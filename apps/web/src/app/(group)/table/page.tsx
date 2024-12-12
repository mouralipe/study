import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function TablePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Table</CardTitle>
        <CardDescription>Table component</CardDescription>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right" style={{ width: 80 }}>
                Amount
              </TableHead>
              <TableHead className="text-right" style={{ width: 80 }}>
                Price
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Product_1</TableCell>
              <TableCell className="text-right">10</TableCell>
              <TableCell className="text-right">$100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product_2</TableCell>
              <TableCell className="text-right">20</TableCell>
              <TableCell className="text-right">$200</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell />
              <TableCell className="text-right">Total</TableCell>
              <TableCell className="text-right">$300</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  )
}
