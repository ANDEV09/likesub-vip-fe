import { Search, CalendarIcon, Trash2 } from "lucide-react";
import { Calendar } from "@/components/shared/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/shared/ui/popover";
import { Button } from "@/components/shared/ui/button";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import type { DateRange } from "react-day-picker";

interface OrderFiltersProps {
    searchOrderCode: string;
    searchServiceId: string;
    searchServiceName: string;
    searchLink: string;
    statusFilter: string;
    dateRange: DateRange | undefined;
    onSearchOrderCodeChange: (value: string) => void;
    onSearchServiceIdChange: (value: string) => void;
    onSearchServiceNameChange: (value: string) => void;
    onSearchLinkChange: (value: string) => void;
    onStatusFilterChange: (value: string) => void;
    onDateRangeChange: (range: DateRange | undefined) => void;
    onClearFilters: () => void;
}

export default function OrderFilters({
    searchOrderCode,
    searchServiceId,
    searchServiceName,
    searchLink,
    statusFilter,
    dateRange,
    onSearchOrderCodeChange,
    onSearchServiceIdChange,
    onSearchServiceNameChange,
    onSearchLinkChange,
    onStatusFilterChange,
    onDateRangeChange,
    onClearFilters,
}: OrderFiltersProps) {
    return (
        <div className="bg-white rounded border border-gray-200 shadow-sm mb-6">
            <div className="grid grid-cols-1 px-4 mt-6 md:grid-cols-4 gap-4 ">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Mã đơn hàng"
                        value={searchOrderCode}
                        onChange={(e) =>
                            onSearchOrderCodeChange(e.target.value)
                        }
                        className="w-full h-8 px-3 border border-gray-300 bg-gray-100 rounded focus:outline-none"
                    />
                </div>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="ID dịch vụ"
                        value={searchServiceId}
                        onChange={(e) =>
                            onSearchServiceIdChange(e.target.value)
                        }
                        className="w-full h-8 px-3 border border-gray-300 bg-gray-100 rounded focus:outline-none"
                    />
                </div>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Tên dịch vụ"
                        value={searchServiceName}
                        onChange={(e) =>
                            onSearchServiceNameChange(e.target.value)
                        }
                        className="w-full h-8 px-3 border border-gray-300 bg-gray-100 rounded focus:outline-none"
                    />
                </div>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Liên kết"
                        value={searchLink}
                        onChange={(e) => onSearchLinkChange(e.target.value)}
                        className="w-full h-8 px-3 border border-gray-300 bg-gray-100 rounded focus:outline-none"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 p-4 gap-4 mb-4">
                <div className="relative">
                    <select
                        value={statusFilter}
                        onChange={(e) => onStatusFilterChange(e.target.value)}
                        className="w-full h-8.5 px-3 border border-gray-300 bg-gray-100 rounded focus:outline-none"
                    >
                        <option value="all">-- Trạng thái --</option>
                        <option value="Hoàn thành">Hoàn thành</option>
                        <option value="Đang chờ">Đang chờ</option>
                        <option value="Đã hủy">Đã hủy</option>
                        <option value="Đang chạy">Đang chạy</option>
                    </select>
                </div>

                <div className="relative">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className="w-full justify-start text-left font-normal bg-gray-100 border-gray-300 hover:bg-gray-100 text-sm px-3 h-8.5"
                            >
                                <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
                                {dateRange?.from ? (
                                    dateRange.to ? (
                                        <span className="truncate">
                                            {format(dateRange.from, "dd/MM", {
                                                locale: vi,
                                            })}
                                            {" - "}
                                            {format(dateRange.to, "dd/MM", {
                                                locale: vi,
                                            })}
                                        </span>
                                    ) : (
                                        <span className="truncate">
                                            {format(
                                                dateRange.from,
                                                "dd/MM/yy",
                                                {
                                                    locale: vi,
                                                }
                                            )}
                                        </span>
                                    )
                                ) : (
                                    <span className="text-gray-500 text-xs">
                                        Chọn thời gian cần tìm
                                    </span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="range"
                                selected={dateRange}
                                onSelect={onDateRangeChange}
                                numberOfMonths={2}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="md:col-span-3 flex gap-2">
                    <button
                        className="bg-gray-900 text-white h-8.5 px-4 rounded hover:bg-gray-800 flex items-center gap-2 whitespace-nowrap"
                        type="button"
                    >
                        <Search size={16} />
                        Tìm kiếm
                    </button>
                    <button
                        onClick={onClearFilters}
                        className="bg-white text-black h-8.5 px-4 rounded border border-gray-300 hover:bg-gray-00 flex items-center gap-2 whitespace-nowrap"
                        type="button"
                    >
                        <Trash2 size={16} />
                        Bỏ lọc
                    </button>
                </div>
            </div>
        </div>
    );
}
