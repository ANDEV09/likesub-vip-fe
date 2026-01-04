import Badge from "@/components/shared/ui/badge";

import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../shared/ui/product-table";
import {
    LogIn,
    SquarePen,
    Trash
} from "lucide-react";

interface User {
    id: number;
    user: {
        image: string;
        name: string;
        role: string;
    };
    email: string;
    balance: string;
    totalDeposit: string;
    discount: string;
    isAdmin: boolean;
    status: "Active" | "Pending" | "Cancel";
}

function UserTable() {

    const tableData: User[] = [
        {
            id: 54,
            user: {
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                name: "hapr2011243",
                role: "Thành viên",
            },
            email: "hapr2011243@gmail.com",
            balance: "0đ",
            totalDeposit: "0đ",
            discount: "0%",
            isAdmin: false,
            status: "Active",
        },
        {
            id: 53,
            user: {
                image: "https://randomuser.me/api/portraits/men/45.jpg",
                name: "truong123316",
                role: "Thành viên",
            },
            email: "truong123316@gmail.com",
            balance: "50.000đ",
            totalDeposit: "200.000đ",
            discount: "2%",
            isAdmin: false,
            status: "Pending",
        },
        {
            id: 48,
            user: {
                image: "https://randomuser.me/api/portraits/men/19.jpg",
                name: "maitlunghau",
                role: "Admin",
            },
            email: "tchunhau2006@gmail.com",
            balance: "1.200.000đ",
            totalDeposit: "5.000.000đ",
            discount: "10%",
            isAdmin: true,
            status: "Active",
        },
        {
            id: 47,
            user: {
                image: "https://randomuser.me/api/portraits/women/21.jpg",
                name: "linhnguyen",
                role: "Thành viên",
            },
            email: "linhnguyen@gmail.com",
            balance: "120.000đ",
            totalDeposit: "800.000đ",
            discount: "3%",
            isAdmin: false,
            status: "Active",
        },
        {
            id: 46,
            user: {
                image: "https://randomuser.me/api/portraits/men/12.jpg",
                name: "hoangdev",
                role: "Moderator",
            },
            email: "hoangdev@gmail.com",
            balance: "300.000đ",
            totalDeposit: "1.500.000đ",
            discount: "5%",
            isAdmin: false,
            status: "Active",
        },
        {
            id: 45,
            user: {
                image: "https://randomuser.me/api/portraits/women/45.jpg",
                name: "thutrang",
                role: "Thành viên",
            },
            email: "thutrang@gmail.com",
            balance: "0đ",
            totalDeposit: "0đ",
            discount: "0%",
            isAdmin: false,
            status: "Cancel",
        },
        {
            id: 44,
            user: {
                image: "https://randomuser.me/api/portraits/men/8.jpg",
                name: "phucit",
                role: "Thành viên",
            },
            email: "phucit@gmail.com",
            balance: "20.000đ",
            totalDeposit: "100.000đ",
            discount: "1%",
            isAdmin: false,
            status: "Pending",
        },
        {
            id: 43,
            user: {
                image: "https://randomuser.me/api/portraits/men/67.jpg",
                name: "admin02",
                role: "Admin",
            },
            email: "admin02@gmail.com",
            balance: "5.000.000đ",
            totalDeposit: "20.000.000đ",
            discount: "15%",
            isAdmin: true,
            status: "Active",
        },
        {
            id: 42,
            user: {
                image: "https://randomuser.me/api/portraits/women/12.jpg",
                name: "ngocanh",
                role: "Thành viên",
            },
            email: "ngocanh@gmail.com",
            balance: "75.000đ",
            totalDeposit: "500.000đ",
            discount: "2%",
            isAdmin: false,
            status: "Active",
        },
        {
            id: 41,
            user: {
                image: "https://randomuser.me/api/portraits/men/90.jpg",
                name: "tester01",
                role: "Tester",
            },
            email: "tester01@gmail.com",
            balance: "10.000đ",
            totalDeposit: "50.000đ",
            discount: "0%",
            isAdmin: false,
            status: "Pending",
        },
    ];

    return (
        <div className="overflow-hidden bg-white dark:divide-white/5 dark:bg-white/3">
            <div className="max-w-full overflow-x-auto">
                <div className="w-full">
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-b border-gray-200 dark:divide-white/5 bg-slate bg-slate-100">
                            <TableRow>
                                {/* Username */}
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Username
                                </TableCell>

                                {/* Email */}
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Email
                                </TableCell>

                                {/* Balance */}
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Số dư
                                </TableCell>

                                {/* Total Deposit */}
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Tổng nạp
                                </TableCell>

                                {/* Role */}
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Vai trò
                                </TableCell>

                                {/* Discount */}
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Chiết khấu
                                </TableCell>

                                {/* Status */}
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Trạng thái
                                </TableCell>

                                {/* Actions */}
                                <TableCell
                                    isHeader
                                    className="px-5 py-4 font-bold text-gray-500 text-start text-[13px] dark:text-gray-400"
                                >
                                    Thao tác
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-200 dark:divide-white/5">
                            {tableData.map((order) => (
                                <TableRow
                                    key={order.id}
                                    className="
                                        transition-colors
                                        hover:bg-gray-100
                                        dark:hover:bg-white/1
                                    "
                                >
                                    {/* Username */}
                                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 overflow-hidden rounded-full">
                                                <img
                                                    width={40}
                                                    height={40}
                                                    src={order.user.image}
                                                    alt={order.user.name}
                                                />
                                            </div>
                                            <div>
                                                <span className="block font-bold text-gray-800 text-sm dark:text-white/90 hover:underline cursor-pointer">
                                                    {order.user.name}
                                                </span>
                                                <span className="block text-gray-500 text-xs dark:text-gray-400">
                                                    #{order.id}
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>

                                    {/* Email */}
                                    <TableCell className="px-4 py-3 text-gray-600 text-start text-sm dark:text-gray-400 font-medium">
                                        {order.email}
                                    </TableCell>

                                    {/* Balance */}
                                    <TableCell className="px-4 py-3 text-blue-600 text-start text-sm font-medium">
                                        {order.balance}
                                    </TableCell>

                                    {/* Total Deposit */}
                                    <TableCell className="px-4 py-3 text-red-500 text-start text-sm font-medium">
                                        {order.totalDeposit}
                                    </TableCell>

                                    {/* Role */}
                                    <TableCell className="px-4 py-3 text-gray-600 text-start text-xs dark:text-gray-400 font-medium">
                                        {order.user.role}
                                    </TableCell>

                                    {/* Discount */}
                                    <TableCell className="px-4 py-3 text-gray-500 text-sm dark:text-gray-400">
                                        {order.discount}
                                    </TableCell>

                                    {/* Status */}
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-sm dark:text-gray-400">
                                        <Badge
                                            size="xs"
                                            color={
                                                order.status === "Active"
                                                    ? "success"
                                                    : order.status === "Pending"
                                                        ? "warning"
                                                        : "error"
                                            }
                                        >
                                            {order.status}
                                        </Badge>
                                    </TableCell>

                                    {/* Actions */}
                                    <TableCell className="py-3 text-gray-500 text-start text-sm dark:text-gray-400">
                                        <div className="flex items-center justify-between px-4 py-0 gap-2">
                                            {/* View Button */}
                                            <button className="flex items-center gap-1 p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                                                <SquarePen className="w-4 h-4" />
                                                <span className="text-xs font-bold">
                                                    Edit
                                                </span>
                                            </button>

                                            {/* Edit Button */}
                                            <button className="flex items-center gap-1 p-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                                                <Trash className="w-4 h-4" />
                                                <span className="text-xs font-bold">
                                                    Delete
                                                </span>
                                            </button>

                                            {/* Delete Button */}
                                            <button className="flex items-center gap-1 p-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
                                                <LogIn className="w-4 h-4" />
                                                <span className="text-xs font-bold">
                                                    Login
                                                </span>
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default UserTable;