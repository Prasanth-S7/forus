import { Dashboard } from "@/components/custom-component/Dashboard";
import { useContext, useEffect } from "react";
import { SetupInventory } from "@/components/custom-component/setupInventory";
import { IconContext } from "react-icons";
import { IoIosAdd } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { MdInventory } from "react-icons/md";
import { useNavigate } from "react-router-dom";
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
import { Component } from "@/components/custom-component/pieChart";
import { Card, CardContent, CardHeader, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { SetupGoods } from "@/components/custom-component/setUpGoods";
import axios from "axios";
const goods = [
    {
        ItemId: "1",
        Name: "Biscuits",
        Type: "Grocery",
        Quantity: "10"
    },
    {
        ItemId: "2",
        Name: "Biscuits",
        Type: "Grocery",
        Quantity: "10"
    },
    {
        ItemId: "3",
        Name: "Biscuits",
        Type: "Grocery",
        Quantity: "10"
    },
    {
        ItemId: "4",
        Name: "Biscuits",
        Type: "Grocery",
        Quantity: "10"
    },
    {
        ItemId: "5",
        Name: "Biscuits",
        Type: "Grocery",
        Quantity: "10"
    },
    {
        ItemId: "6",
        Name: "Biscuits",
        Type: "Grocery",
        Quantity: "10"
    },
    {
        ItemId: "7",
        Name: "Biscuits",
        Type: "Grocery",
        Quantity: "10"
    },

]

export function Home() {
    const navigate = useNavigate()
    const [inventoryAccess, setInventoryAccess] = useState(false)
    const token = localStorage.getItem('token')
    useEffect(() => {
        const checkAuth = async () => {
            if (!token) {
                console.log('token not found')
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

    useEffect(() => {
        const checkInventoryAccess = async () => {
            const res = await axios.get(`http://localhost:3000/manager/inventoryaccess/${token}`)
            if (res.data.access) {
                setInventoryAccess(true)
            }
            else {
                setInventoryAccess(false)
            }
        }
        checkInventoryAccess();
    }, [token])

    return (
        <div>
            <Dashboard screenTitle="Home">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-around w-full ">
                        <div className="h-[200px] mt-3  ">
                            <Component goodsTitle="Total Goods" className=""></Component>
                        </div>
                        <div className="h-[200px] mt-3 ">
                            <Component goodsTitle="Required Goods" className=""></Component>
                        </div>
                        <div className="h-[200px] mt-3 ">
                            <Card className="flex items-center justify-evenly h-full">
                                <CardHeader>
                                    {/* <CardTitle>Setup Inventory</CardTitle> */}
                                    <SetupGoods></SetupGoods>
                                    {/* <CardDescription>Card Description</CardDescription> */}
                                </CardHeader>
                                <CardContent className="px-4 py-0  flex items-center justify-center">
                                    <MdInventory size={70} />
                                </CardContent>
                            </Card>
                        </div>
                        {inventoryAccess && (
                            <div className="h-[200px] mt-3 ">
                                <Card className="flex items-center justify-evenly h-full">
                                    <CardHeader>
                                        {/* <CardTitle>Setup Inventory</CardTitle> */}
                                        <SetupInventory></SetupInventory>
                                        {/* <CardDescription>Card Description</CardDescription> */}
                                    </CardHeader>
                                    <CardContent className="px-4 py-0  flex items-center justify-center">
                                        <MdInventory size={70} />
                                    </CardContent>
                                </Card>
                            </div>
                        )
                        }

                    </div>
                    <div className="px-10 mt-4 h-[350px] overflow-y-auto scrollBar">
                        <Table>
                            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">ItemId</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead >Quantity</TableHead>
                                    <TableHead className="text-right">Edit</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {goods.map((item) => (
                                    <TableRow className="h-[50px]" key={item.ItemId}>
                                        <TableCell className="font-medium ">{item.ItemId}</TableCell>
                                        <TableCell>{item.Name}</TableCell>
                                        <TableCell>{item.Type}</TableCell>
                                        <TableCell>{item.Quantity}</TableCell>
                                        <TableCell className="flex gap-x-2 justify-end items-center h-[50px] ">
                                            <IconContext.Provider value={{ className: "Icon" }}>
                                                <IoIosAdd size={20} />
                                            </IconContext.Provider>
                                            <IconContext.Provider value={{ className: "Icon" }}>
                                                <MdDelete size={20} />
                                            </IconContext.Provider>
                                            <IconContext.Provider value={{ className: "Icon" }}>
                                                <IoIosSettings size={20} />
                                            </IconContext.Provider>
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
                </div>


            </Dashboard>

        </div>
    )
}