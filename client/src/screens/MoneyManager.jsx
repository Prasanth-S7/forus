import { Dashboard } from "@/components/custom-component/Dashboard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableFooter,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
const camps = [
  {
    SNO : "1",
    camp:"camp 1",
    RequiredAmount : "50000",
    Review : "Send"
  },
  {
    SNO : "2",
    camp:"camp 1",
    RequiredAmount : "50000",
    Review : "Send"
  },
  {
    SNO : "3",
    camp:"camp 1",
    RequiredAmount : "50000",
    Review : "Send"
  },
  {
    SNO : "4",
    camp:"camp 1",
    RequiredAmount : "50000",
    Review : "Send"
  },
  {
    SNO : "5",
    camp:"camp 1",
    RequiredAmount : "50000",
    Review : "Send"
  },
]

export function MoneyManager() {
  const navigate = useNavigate()
    useEffect(() => {
        const checkAuth = async () => {
          console.log('here')
            const token = localStorage.getItem('token');
            console.log(token)
            if (!token) {
                navigate('/login');
            } else {
                try {
                    await axios.get('http://localhost:3000/api/v1/dashboard', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    console.log('no errors')
                } catch (err) {
                    console.log(err)
                    navigate('/login');
                }
            }
        };
        checkAuth();
    }, [navigate]);
  return (
    <div>
      <Dashboard screenTitle="MoneyManager">
        <div className="border-r-[1px] border-white px-3 py-3">
          <Card>
            <CardHeader>
              <CardTitle>Total Money Raised</CardTitle>
            </CardHeader>
            <CardContent>
              <p className=" font-extrabold text-3xl font-sans">
                $&nbsp;12,500,000
              </p>
            </CardContent>
          </Card>
          <Button className="w-full mt-3 ">Request</Button>
          <Button className="w-full mt-3 ">Send</Button>
        </div>
        <div className="w-full px-10">
          <Table className="mt-3 px-5 w-full rounded-md ">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SNO</TableHead>
                <TableHead className="w-[100px]">Camp</TableHead>
                <TableHead className="w-[100px]">RequiredAmount</TableHead>
                <TableHead className="w-[100px] text-right">Review</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {camps.map((camp) => (
                <TableRow key={camp.SNO}>
                  <TableCell className="font-medium ">{camp.SNO}</TableCell>
                  <TableCell className="">{camp.camp}</TableCell>
                  <TableCell>{camp.RequiredAmount}</TableCell>
                  <TableCell className="text-right"><Button>{camp.Review}</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
            
          </Table>
        </div>
      </Dashboard>
    </div>
  )
}