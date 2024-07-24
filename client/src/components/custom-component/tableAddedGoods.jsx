import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  
  export function TableAddedGoods({goods}) {
    console.log(goods)
    return (
      <Table>
        <TableCaption>A list of goods that has been added</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">SNO</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Item Code</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {goods.map((good,index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index+1}</TableCell>
              <TableCell>{good.name}</TableCell>
              <TableCell>{good.itemCode}</TableCell>
              <TableCell className="text-right">{good.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  