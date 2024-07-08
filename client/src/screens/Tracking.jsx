import { Dashboard } from "@/components/custom-component/Dashboard";
import { Button } from "@/components/ui/button";
import { RequestFromCampPopUp } from "@/components/custom-component/RequestFromCampPopUp";
import { MdDelete } from "react-icons/md";
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
import { DonationFromPublicPopUp } from "@/components/custom-component/DonationFromPublicPopUp";
const goods = [
    {
        SNO : "1",
        Name: "Camp 1",
        GoodsNeeded: "apples",
        Quantity : 10, 
    },
    {
        SNO : "2",
        Name: "Camp 1",
        GoodsNeeded: "apples",
        Quantity : 10,
    },
    {
        SNO : "3",
        Name: "Camp 1",
        GoodsNeeded: "apples",
        Quantity : 10,
    },
    {
        SNO : "4",
        Name: "Camp 1",
        GoodsNeeded: "apples",
        Quantity : 10,
    },
    {
        SNO : "5",
        Name: "Camp 1",
        GoodsNeeded: "apples",
        Quantity : 10,
    },
    {
        SNO : "6",
        Name: "Camp 1",
        GoodsNeeded: "apples",
        Quantity : 10,
    },
    {
        SNO : "7",
        Name: "Camp 1",
        GoodsNeeded: "apples",
        Quantity : 10,
    },
]
const goodsReceived = [
    {
        SNO : "1",
        Name: "Prasanth",
        GoodsNeeded: "apples",
        Quantity : 10, 
    },
    {
        SNO : "2",
        Name: "Prasanth",
        GoodsNeeded: "apples",
        Quantity : 10,
    },
    {
        SNO : "3",
        Name: "Prasanth",
        GoodsNeeded: "apples",
        Quantity : 10,
    },
    {
        SNO : "4",
        Name: "Prasanth",
        GoodsNeeded: "apples",
        Quantity : 10,
    },
    {
        SNO : "5",
        Name: "Prasanth",
        GoodsNeeded: "apples",
        Quantity : 10,
    },
    {
        SNO : "6",
        Name: "Prasanth",
        GoodsNeeded: "apples",
        Quantity : 10,
    },
    {
        SNO : "7",
        Name: "Prasanth",
        GoodsNeeded: "apples",
        Quantity : 10,
    },
]

export function Tracking() {
    return (
        <div>
            <Dashboard screenTitle="Tracking">
                <div className="w-full">
                    <div className="flex px-5 mt-5">
                        <h2 className=" font-semibold text-xl">Requests from Camps</h2>
                    </div>
                    <div className="px-10 w-full mt-4 h-[220px] overflow-y-auto scrollBar">
                        <Table>
                            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">SNO</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Goods Needed</TableHead>
                                    <TableHead >Quantity</TableHead>
                                    <TableHead className="text-right">Review</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {goods.map((item,key) => (
                                    <TableRow key={item.SNO}>
                                        <TableCell className="font-medium">{item.SNO}</TableCell>
                                        <TableCell>{item.Name}</TableCell>
                                        <TableCell>{item.GoodsNeeded}</TableCell>
                                        <TableCell>{item.Quantity}</TableCell>
                                        <TableCell className="text-right"><RequestFromCampPopUp /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            {/* <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={3}>Total</TableCell>
                                    <TableCell className="text-right">$2,500.00</TableCell>
                                </TableRow>
                            </TableFooter> */}
                        </Table>
                    </div>
                    <div className="flex px-5 mt-5">
                        <h2 className=" font-semibold text-xl">Donations from Public</h2>
                    </div>
                    <div className="px-10 w-full mt-4 h-[220px] overflow-y-auto scrollBar">
                        <Table>
                            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">SNO</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Goods Received</TableHead>
                                    <TableHead >Quantity</TableHead>
                                    <TableHead className="text-right">Review</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {goodsReceived.map((item,key) => (
                                    <TableRow key={item.SNO}>
                                        <TableCell className="font-medium">{item.SNO}</TableCell>
                                        <TableCell>{item.Name}</TableCell>
                                        <TableCell>{item.GoodsNeeded}</TableCell>
                                        <TableCell>{item.Quantity}</TableCell>
                                        <TableCell className="text-right"><DonationFromPublicPopUp/></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            {/* <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={3}>Total</TableCell>
                                    <TableCell className="text-right">$2,500.00</TableCell>
                                </TableRow>
                            </TableFooter> */}
                        </Table>
                    </div>
                </div>

            </Dashboard>
        </div>
    )
}