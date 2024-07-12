import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import { useEffect, useState } from "react"
import { CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { useToast } from "@/components/ui/use-toast"

export function SetupGoods() {
    const { toast } = useToast();
    const [goodName, setGoodName] = useState("")
    const [goodQuantity, setGoodQuantity] = useState("")
    const [goodType, setGoodType] = useState("")
    const addGoodHandler = async () => {
        try {

            console.log('reaches')
            const res = await axios.post('http://localhost:3000/goods/addgood', {
                "name": goodName,
                "quantity": parseInt(goodQuantity),
                "type": goodType,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}` 
                }
            })
            if (res.statusText === 'OK') {
                console.log('reached')
                toast({
                    title: "Good Added",
                    description: `${goodQuantity} ${goodName} has been added to the inventory`,
                })
            } else {
                toast({
                    title: "Failed to add Good",
                    description: `The specified good cannot be added due to some reason`,
                })
            }
        }
        catch (error) {
            console.log(error)
            toast({
                title: "Failed to add Good",
                description: `Internal Server Error`,
            })
        }
        finally{
            setGoodName("")
            setGoodQuantity("")
            setGoodType("")
        }
    }
    return (
        <Dialog className="w-[400px]">
            <DialogTrigger className="text-md font-semibold">
                <CardTitle> Setup Goods</CardTitle>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Setup Goods</DialogTitle>
                    <DialogDescription>
                        Make sure to fill all the required details
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Good Name
                        </Label>
                        <Input
                            value={goodName}
                            onChange={(e) => setGoodName(e.target.value)}
                            id="goodName"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Type
                        </Label>
                        <Input
                            value={goodType}
                            onChange={(e) => setGoodType(e.target.value)}
                            id="type"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Quantity
                        </Label>
                        <Input
                            value={goodQuantity}
                            onChange={(e) => setGoodQuantity(e.target.value)}
                            id="quantity"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={() => addGoodHandler()} type="submit">Add Good</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>)
}
