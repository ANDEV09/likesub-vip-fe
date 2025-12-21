import { 
    Check,
    Clock,
    HouseHeart,
    Ticket
} from "lucide-react";
import UserSubHeader from "../layout/UserSubHeader"

function SupportRequestPage() {
    const titlePage = "yêu cầu hỗ trợ";

    return (
        <div>
            {/* Sub Header */}
            <UserSubHeader titlePage={titlePage} />

            {/* Main Content */}
            <div className="p-6">
                {/* Statistic Cards */}
                <div className="flex items-center justify-between gap-6">
                    {/* Card 1 */}
                    <div className="flex items-start gap-5 bg-white shadow-sm p-4 rounded-sm h-20 w-full">
                        <div className="bg-[#e4e1f4] p-4 rounded-sm border border-gray-300">
                            <Ticket className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col items-start justify-between h-full">
                            <span className="font-medium text-slate-800">
                                1
                            </span>
                            <span className="font-medium text-gray-400 text-[13px]">
                                Tổng tickets
                            </span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-start gap-5 bg-white shadow-sm p-4 rounded-sm h-20 w-full">
                        <div className="bg-[#dff0fa] p-4 rounded-sm border border-gray-300">
                            <HouseHeart className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="flex flex-col items-start justify-between h-full">
                            <span className="font-medium text-slate-800">
                                1
                            </span>
                            <span className="font-medium text-gray-400 text-[13px]">
                                Đang mở
                            </span>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-start gap-5 bg-white shadow-sm p-4 rounded-sm h-20 w-full">
                        <div className="bg-[#fff5db] p-4 rounded-sm border border-gray-300">
                            <Clock className="w-4 h-4 text-amber-400" />
                        </div>
                        <div className="flex flex-col items-start justify-between h-full">
                            <span className="font-medium text-slate-800">
                                1
                            </span>
                            <span className="font-medium text-gray-400 text-[13px]">
                                Chờ xử lý
                            </span>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex items-start gap-5 bg-white shadow-sm p-4 rounded-sm h-20 w-full">
                        <div className="bg-[#e3f7ed] p-4 rounded-sm border border-gray-300">
                            <Check className="w-4 h-4 text-green-400" />
                        </div>
                        <div className="flex flex-col items-start justify-between h-full">
                            <span className="font-medium text-slate-800">
                                1
                            </span>
                            <span className="font-medium text-gray-400 text-[13px]">
                                Đã trả lời
                            </span>
                        </div>
                    </div>
                </div>

                {/* Tickets List */}
                <div></div>
            </div>
        </div>
    )
}

export default SupportRequestPage