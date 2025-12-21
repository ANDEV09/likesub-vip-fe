import UserSubHeader from "../layout/UserSubHeader"
import { 
    Award,
    Check,
    CircleCheck,
    Crown,
    Info,
    Star,
    Tag,
    Trophy,
    User,
    Wallet
} from "lucide-react";

function ServicePricingPage() {
    const titlePage = "bảng giá dịch vụ";

    return (
        <div>
            {/* Sub Header */}
            <UserSubHeader titlePage={titlePage} />

            {/* Main Content */}
            <div className="p-6 flex flex-col">
                {/* Services Pricing Card */}
                <div className="flex items-start justify-between gap-6">
                    {/* Item 1 */}
                    <div className="flex flex-col h-full w-full bg-white shadow-sm rounded-xl p-4 gap-4 hover:scale-105 transition-all duration-400 ease-in-out cursor-pointer border hover:border-blue-400">
                        {/* Icon Service */}
                        <div className="flex items-center justify-center relative">
                            <div className="p-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-500">
                                <User className="text-white w-10 h-10" />
                            </div>
                            <div className="absolute top-0 right-0 flex bg-black items-center justify-center gap-2 py-1.5 px-3 rounded-xl z-10">
                                <Check className="text-white w-3 h-3" />
                                <span className="uppercase text-xs text-slate-200 font-bold">
                                    Hiện tại
                                </span>
                            </div>
                        </div>

                        {/* Title Service */}
                        <div className="flex items-center justify-center flex-col text-center gap-2">
                            <span className="font-bold text-blue-500 text-xl">
                                Khách lẻ
                            </span>
                            <span className="text-gray-400 font-medium text-sm">
                                Cấp bậc mặc định cho tất cả khách hàng
                            </span>
                        </div>

                        {/* Content Service */}
                        <div className="flex flex-col items-center gap-4">
                            {/* Content Item 1 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md">
                                <div className="bg-[#12cad8] p-2 rounded-md">
                                    <Tag className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Giá bán lẻ
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Áp dụng giá tiêu chuẩn
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 2 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md">
                                <div className="bg-[#ffa403] p-2 rounded-md">
                                    <Wallet className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Không yêu cầu nạp tối thiểu
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Dễ dàng bắt đầu
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col h-full w-full bg-white shadow-sm rounded-xl p-4 gap-4 hover:scale-105 transition-all duration-400 ease-in-out cursor-pointer border hover:border-blue-400">
                        {/* Icon Service */}
                        <div className="flex items-center justify-center">
                            <div className="p-6 rounded-full bg-slate-100 shadow-slate-600">
                                <Award className="text-gray-500 w-10 h-10" />
                            </div>
                        </div>

                        {/* Title Service */}
                        <div className="flex items-center justify-center flex-col text-center gap-2">
                            <span className="font-bold text-slate-500 text-xl">
                                Cộng tác viên
                            </span>
                            <span className="text-gray-400 font-medium text-sm">
                                Cấp bậc đặc biệt với ưu đãi hấp dẫn
                            </span>
                        </div>

                        {/* Content Service */}
                        <div className="flex flex-col items-start gap-4">
                            {/* Content Item 1 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#ffa403] p-2 rounded-md">
                                    <Tag className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Giá Cộng tác viên
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Ưu đãi đặc biệt
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 2 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#ffa403] p-2 rounded-md">
                                    <Wallet className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Nạp tối thiểu
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        $19.23
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 3 */}
                            <div className="w-full bg-amber-100 flex flex-col items-start p-2 rounded-sm gap-2">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-2">
                                        <Info className="w-3 h-3 text-amber-500" />
                                        <span className="font-bold text-amber-500 text-xs">
                                            Còn thiếu
                                        </span>
                                    </div>
                                    <span className="font-bold text-amber-500 text-xs">
                                        $19.23
                                    </span>
                                </div>
                                <div className="w-full h-1 rounded-lg bg-slate-200" />
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col h-full w-full bg-white shadow-sm rounded-xl p-4 gap-4 hover:scale-105 transition-all duration-400 ease-in-out cursor-pointer border hover:border-blue-400">
                        {/* Icon Service */}
                        <div className="flex items-center justify-center">
                            <div className="p-6 rounded-full bg-slate-100 shadow-slate-600">
                                <Trophy className="text-gray-500 w-10 h-10" />
                            </div>
                        </div>

                        {/* Title Service */}
                        <div className="flex items-center justify-center flex-col text-center gap-2">
                            <span className="font-bold text-slate-500 text-xl">
                                Giá Đại lý
                            </span>
                            <span className="text-gray-400 font-medium text-sm">
                                Cấp bậc đặc biệt với ưu đãi hấp dẫn
                            </span>
                        </div>

                        {/* Content Service */}
                        <div className="flex flex-col items-start gap-4">
                            {/* Content Item 1 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#FFA403] p-2 rounded-md">
                                    <Tag className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Giá Đại lý
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Ưu đãi đặc biệt
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 2 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#fd6610] p-2 rounded-md">
                                    <CircleCheck className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Hỗ trợ tạo website con
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Chi phí gia hạn 100.000đ / tháng
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 3 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#FFA403] p-2 rounded-md">
                                    <Wallet className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Nạp tối thiểu
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        $1.923.08
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 4 */}
                            <div className="w-full bg-amber-100 flex flex-col items-start p-2 rounded-sm gap-2">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-2">
                                        <Info className="w-3 h-3 text-amber-500" />
                                        <span className="font-bold text-amber-500 text-xs">
                                            Còn thiếu
                                        </span>
                                    </div>
                                    <span className="font-bold text-amber-500 text-xs">
                                        $1.923.08
                                    </span>
                                </div>
                                <div className="w-full h-1 rounded-lg bg-slate-200" />
                            </div>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="flex flex-col h-full w-full bg-white shadow-sm rounded-xl p-4 gap-4 hover:scale-105 transition-all duration-400 ease-in-out cursor-pointer border hover:border-blue-400">
                        {/* Icon Service */}
                        <div className="flex items-center justify-center">
                            <div className="p-6 rounded-full bg-slate-100 shadow-slate-600">
                                <Star className="text-gray-500 w-10 h-10" />
                            </div>
                        </div>

                        {/* Title Service */}
                        <div className="flex items-center justify-center flex-col text-center gap-2">
                            <span className="font-bold text-slate-500 text-xl">
                                Nhà phân phối
                            </span>
                            <span className="text-gray-400 font-medium text-sm">
                                Cấp bậc đặc biệt với ưu đãi hấp dẫn
                            </span>
                        </div>

                        {/* Content Service */}
                        <div className="flex flex-col items-start gap-4">
                            {/* Content Item 1 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#FD6610] p-2 rounded-md">
                                    <Tag className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Giá Nhà phân phối
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Ưu đãi đặc biệt
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 2 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#FD6610] p-2 rounded-md">
                                    <CircleCheck className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Hỗ trợ tạo website con
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Chi phí gia hạn 100.000đ / tháng
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 3 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#FFA403] p-2 rounded-md">
                                    <Crown className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Dịch vụ độc quyền
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Dịch vụ độc quyền chỉ dành riêng cho khách hàng VIP
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 4 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#3023c3] p-2 rounded-md">
                                    <CircleCheck className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Hỗ trợ riêng 24/7
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Chúng tôi sẽ luôn sẵn sàng giúp đỡ bạn mọi lúc, mọi nơi
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 5 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#FD6610] p-2 rounded-md">
                                    <Wallet className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Nạp tối thiểu
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        $19.230.77
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 6 */}
                            <div className="w-full bg-amber-100 flex flex-col items-start p-2 rounded-sm gap-2">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-2">
                                        <Info className="w-3 h-3 text-amber-500" />
                                        <span className="font-bold text-amber-500 text-xs">
                                            Còn thiếu
                                        </span>
                                    </div>
                                    <span className="font-bold text-amber-500 text-xs">
                                        $19.230.77
                                    </span>
                                </div>
                                <div className="w-full h-1 rounded-lg bg-slate-200" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Pricing Table */}
                <div></div>
            </div>
        </div>
    )
}

export default ServicePricingPage