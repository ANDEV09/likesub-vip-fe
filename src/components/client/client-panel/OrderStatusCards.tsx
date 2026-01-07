import { CirclePlay, CircleX, Clock3, LaptopMinimalCheck } from "lucide-react";

interface StatusSummary {
    completed: number;
    pending: number;
    cancelled: number;
    running: number;
}

interface OrderStatusCardsProps {
    statusSummary: StatusSummary;
}

export default function OrderStatusCards({
    statusSummary,
}: OrderStatusCardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <LaptopMinimalCheck />
                    </div>
                    <div className="pl-4">
                        <p className="text-xl font-semibold text-gray-900">
                            {statusSummary.completed}
                        </p>
                        <p className="text-sm text-gray-600">
                            Đơn hàng hoàn tốt
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Clock3 />
                    </div>
                    <div className="pl-4">
                        <p className="text-xl font-semibold text-gray-900">
                            {statusSummary.pending}
                        </p>
                        <p className="text-sm text-gray-600">
                            Đơn hàng đang chờ xử lý
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <CircleX />
                    </div>
                    <div className="pl-4">
                        <p className="text-xl font-semibold text-gray-900">
                            {statusSummary.cancelled}
                        </p>
                        <p className="text-sm text-gray-600">Đơn hàng bị hủy</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <CirclePlay />
                    </div>
                    <div className="pl-4">
                        <p className="text-xl font-semibold text-gray-900">
                            {statusSummary.running}
                        </p>
                        <p className="text-sm text-gray-600">
                            Đơn hàng đang chạy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
