import { Dashboard } from "@/components/custom-component/Dashboard";
import { Button } from "@/components/ui/button";
import { TransportPopUp } from "@/components/custom-component/TransportPopUp";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
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
const goods = [
    {
        SNO: "1",
        Name: "Camp 1",
        totalGoods: 100,
        availableGoods: 50,
        totalCapacity: 100,
        availableMembers: 50,
        status: "Transport"
    },
    {
        SNO: "2",
        Name: "Camp 1",
        totalGoods: 100,
        availableGoods: 150,
        totalCapacity: 100,
        availableMembers: 92,
        status: "Transport"

    },
    {
        SNO: "3",
        Name: "Camp 1",
        totalGoods: 200,
        availableGoods: 250,
        totalCapacity: 100,
        availableMembers: 86,
        status: "Onprocess"
    },
    {
        SNO: "4",
        Name: "Camp 1",
        totalGoods: 170,
        availableGoods: 250,
        totalCapacity: 100,
        availableMembers: 75,
        status: "Transport"
    },
    {
        SNO: "5",
        Name: "Camp 1",
        totalGoods: 500,
        availableGoods: 150,
        totalCapacity: 100,
        availableMembers: 50,
        status: "Transport"
    },
    {
        SNO: "6",
        Name: "Camp 1",
        totalGoods: 400,
        availableGoods: 550,
        totalCapacity: 100,
        availableMembers: 100,
        status: "Onprocess"
    },
    {
        SNO: "7",
        Name: "Camp 1",
        totalGoods: 300,
        availableGoods: 250,
        totalCapacity: 100,
        availableMembers: 98,
        status: "Onprocess"
    },

]
export function Transport() {
    const navigate = useNavigate()
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
            } else {
                try {
                    await axios.get('http://localhost:3000/api/v1/dashboard', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                } catch (err) {
                    navigate('/login');
                }
            }
        };
        checkAuth();
    }, [navigate]);
    return (
        <div>
            <Dashboard screenTitle="Transport">
                <div className="px-10 w-full mt-4 overflow-y-auto scrollBar">
                    <Table>
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">SNO</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Goods</TableHead>
                                <TableHead >Capacity</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {goods.map((item) => (
                                <TableRow key={item.SNO}>
                                    <TableCell className="font-medium">{item.SNO}</TableCell>
                                    <TableCell>{item.Name}</TableCell>
                                    <TableCell>{item.availableGoods}/{item.totalGoods}</TableCell>
                                    <TableCell>{item.availableMembers}/{item.totalCapacity}</TableCell>
                                    <TableCell className="text-right">
                                        {/* <Button className = {`${item.status==='Onprocess' ? 'bg-green-600 hover:bg-green-700'  : '' }`}>{item.status}</Button> */}
                                        {
                                            item.status === 'Transport' ? (
                                                <TransportPopUp status={item.status}></TransportPopUp>
                                            ) :
                                                (<Button className="bg-green-600 hover:bg-green-700">{item.status}</Button>)

                                        }
                                    </TableCell>
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
            </Dashboard>
        </div>
    )
}