import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Dashboard } from "@/components/custom-component/Dashboard"
export const Pdrs = (() => {
    return (
        <div>
            <Dashboard screenTitle="Preventive Disaster Management System">
                <div className="px-4 w-full">
                    <div className=" mb-3 py-3 text-xl font-semibold">Account to Use</div>
                    <div className="lg:flex flex-row justify-evenly items-center lg:space-x-5 ">
                        <div className="mb-3 flex flex-row justify-center items-center space-x-5">
                            <Label>Username</Label>
                            <Input></Input>
                        </div>
                        <div className="mb-3 flex flex-row justify-center items-center space-x-5">
                            <Label>Password</Label>
                            <Input></Input>
                        </div>
                        <div className="mb-3 flex flex-row justify-center items-center space-x-5">
                            <Label>Tweet Count</Label>
                            <Input></Input>
                        </div>
                        <div className="">
                            <Button className=" mb-3 px-5 w-full">Run</Button>
                        </div>
                    </div>
                    {/* <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Invoice</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right">$250.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table> */}

                </div>
            </Dashboard>
        </div>
    )
})