"use client";

import { useState } from "react";
import UserSubHeader from "@/layouts/client/client-panel/UserSubHeader";
import type { DateRange } from "react-day-picker";
import OrderStatusCards from "@/components/client/client-panel/OrderStatusCards";
import OrderFilters from "@/components/client/client-panel/OrderFilters";
import OrderPaginationControls from "@/components/client/client-panel/OrderPaginationControls";
import OrderHistoriesTable from "@/components/client/client-panel/OrderHistoriesTable";
import OrderRevenueSummary from "@/components/client/client-panel/OrderRevenueSummary";

interface OrderItem {
    id: string;
    orderCode: string;
    datetime: string;
    serviceId: string;
    serviceName: string;
    link: string;
    comment: string;
    status: "Hoàn thành" | "Đang chờ" | "Đã hủy" | "Đang chạy";
    payment: number;
    quantity: number;
    revenue: number;
    remaining: number;
    updated: string;
}

const MOCK_ORDERS: OrderItem[] = [
    {
        id: "1",
        orderCode: "T74948019268",
        datetime: "2025-06-09 21:52:03",
        serviceId: "5843",
        serviceName: "S2 Like clone nhoạnh(CARE)",
        link: "https://www.facebook.com/...aaaaaaaaaaaaaaaaaaaaaaaa",
        comment: "Không có",
        status: "Hoàn thành",
        payment: 1,
        quantity: 50,
        revenue: 696,
        remaining: 0,
        updated: "2025-06-15 17:16:53",
    },
    {
        id: "2",
        orderCode: "T74948069602",
        datetime: "2025-06-09 21:51:45",
        serviceId: "8746",
        serviceName: "S3 Like clone xin like",
        link: "https://www.facebook.com/...",
        comment: "Không có",
        status: "Hoàn thành",
        payment: 1,
        quantity: 50,
        revenue: 3479,
        remaining: 0,
        updated: "2025-06-15 17:16:53",
    },
    {
        id: "3",
        orderCode: "T74947913382",
        datetime: "2025-06-09 21:25:17",
        serviceId: "8547",
        serviceName: "S2 Like clone nhoạnh(ANGRY)",
        link: "https://www.facebook.com/...",
        comment: "Không có",
        status: "Hoàn thành",
        payment: 1,
        quantity: 50,
        revenue: 696,
        remaining: 0,
        updated: "2025-06-15 17:16:53",
    },
    {
        id: "4",
        orderCode: "T74947089406",
        datetime: "2025-06-09 21:24:53",
        serviceId: "8746",
        serviceName: "S3 Like clone xin like",
        link: "https://www.facebook.com/...",
        comment: "Không có",
        status: "Hoàn thành",
        payment: 1,
        quantity: 50,
        revenue: 3479,
        remaining: 0,
        updated: "2025-06-09 21:24:53",
    },
    {
        id: "5",
        orderCode: "T74944044841",
        datetime: "2025-06-09 00:41:28",
        serviceId: "8757",
        serviceName: "S1 Like bám tay wow",
        link: "https://www.facebook.com/...",
        comment: "Không có",
        status: "Hoàn thành",
        payment: 2000,
        quantity: 50,
        revenue: 1948,
        remaining: 0,
        updated: "2025-06-09 13:53:07",
    },
    {
        id: "6",
        orderCode: "T74939699951",
        datetime: "2025-06-08 22:36:39",
        serviceId: "8338",
        serviceName: "Follow clone sale",
        link: "https://www.facebook.com/...",
        comment: "Không có",
        status: "Đang chờ",
        payment: 3999999,
        quantity: 100,
        revenue: 1559,
        remaining: 50,
        updated: "2025-06-08 22:36:39",
    },
];

export default function OrderHistoriesClient() {
    const titlePage = "đơn hàng đã đặt";

    const [orders, setOrders] = useState<OrderItem[]>(MOCK_ORDERS);
    const [searchOrderCode, setSearchOrderCode] = useState("");
    const [searchServiceId, setSearchServiceId] = useState("");
    const [searchServiceName, setSearchServiceName] = useState("");
    const [searchLink, setSearchLink] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [sortBy, setSortBy] = useState("default");
    const [statusFilter, setStatusFilter] = useState("all");
    const [dateRange, setDateRange] = useState<DateRange | undefined>(
        undefined
    );

    const filteredOrders = orders.filter((order) => {
        const matchCode = order.orderCode
            .toLowerCase()
            .includes(searchOrderCode.toLowerCase());
        const matchServiceId = order.serviceId
            .toLowerCase()
            .includes(searchServiceId.toLowerCase());
        const matchServiceName = order.serviceName
            .toLowerCase()
            .includes(searchServiceName.toLowerCase());
        const matchLink = order.link
            .toLowerCase()
            .includes(searchLink.toLowerCase());
        const matchStatus =
            statusFilter === "all" || order.status === statusFilter;

        const orderTime = new Date(order.datetime).getTime();
        const fromTime = dateRange?.from ? dateRange.from.getTime() : null;
        const toTime = dateRange?.to
            ? new Date(dateRange.to).setHours(23, 59, 59, 999)
            : null;
        const matchDateFrom = fromTime ? orderTime >= fromTime : true;
        const matchDateTo = toTime ? orderTime <= toTime : true;

        return (
            matchCode &&
            matchServiceId &&
            matchServiceName &&
            matchLink &&
            matchStatus &&
            matchDateFrom &&
            matchDateTo
        );
    });

    const sortedOrders = [...filteredOrders].sort((a, b) => {
        if (sortBy === "newest") {
            return (
                new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
            );
        }
        if (sortBy === "oldest") {
            return (
                new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
            );
        }
        return 0;
    });

    const statusSummary = {
        completed: filteredOrders.filter((o) => o.status === "Hoàn thành")
            .length,
        pending: filteredOrders.filter((o) => o.status === "Đang chờ").length,
        cancelled: filteredOrders.filter((o) => o.status === "Đã hủy").length,
        running: filteredOrders.filter((o) => o.status === "Đang chạy").length,
    };

    const handleClearFilters = () => {
        setSearchOrderCode("");
        setSearchServiceId("");
        setSearchServiceName("");
        setSearchLink("");
        setStatusFilter("all");
        setDateRange(undefined);
        setSortBy("default");
    };

    const handleDelete = (id: string) => {
        setOrders(orders.filter((o) => o.id !== id));
    };

    const totalRevenue = sortedOrders.reduce(
        (sum, order) => sum + order.revenue,
        0
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <UserSubHeader titlePage={titlePage} />

            <div className="max-w-full mx-auto px-6 py-6">
                <OrderStatusCards statusSummary={statusSummary} />

                <div className="bg-white rounded  border border-gray-200 shadow-sm mb-6">
                    <OrderFilters
                        searchOrderCode={searchOrderCode}
                        searchServiceId={searchServiceId}
                        searchServiceName={searchServiceName}
                        searchLink={searchLink}
                        statusFilter={statusFilter}
                        dateRange={dateRange}
                        onSearchOrderCodeChange={setSearchOrderCode}
                        onSearchServiceIdChange={setSearchServiceId}
                        onSearchServiceNameChange={setSearchServiceName}
                        onSearchLinkChange={setSearchLink}
                        onStatusFilterChange={setStatusFilter}
                        onDateRangeChange={setDateRange}
                        onClearFilters={handleClearFilters}
                    />

                    <OrderPaginationControls
                        itemsPerPage={itemsPerPage}
                        sortBy={sortBy}
                        onItemsPerPageChange={setItemsPerPage}
                        onSortByChange={setSortBy}
                    />

                    <div className="overflow-x-auto max-h-200 overflow-y-auto">
                        <OrderHistoriesTable
                            orders={sortedOrders}
                            itemsPerPage={itemsPerPage}
                        />
                    </div>

                    <OrderRevenueSummary totalRevenue={totalRevenue} />
                </div>
            </div>
        </div>
    );
}
