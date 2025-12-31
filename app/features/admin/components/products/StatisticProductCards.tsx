function StatisticProductCards() {
    return (
        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg">
            {/* Total Revenue */}
            <div className="w-full flex flex-col gap-1 px-6 py-4 border-r border-gray-200">
                <span className="text-[13px] text-gray-500">
                    Tổng doanh thu
                </span>
                <span className="text-[28px] font-medium text-gray-800">
                    $120.80
                </span>
            </div>

            {/* Total Products */}
            <div className="w-full flex flex-col gap-1 px-6 py-4 border-r border-gray-200">
                <span className="text-[13px] text-gray-500">
                    Số lượng sản phẩm
                </span>
                <span className="text-[28px] font-medium text-gray-800">
                    24
                </span>
            </div>

            {/* Active Products */}
            <div className="w-full flex flex-col gap-1 px-6 py-4 border-r border-gray-200">
                <span className="text-[13px] text-gray-500">
                    Số lượng sản phẩm được bán
                </span>
                <span className="text-[28px] font-medium text-gray-800">
                    18
                </span>
            </div>

            {/* Out of Stock */}
            <div className="w-full flex flex-col gap-1 px-6 py-4">
                <span className="text-[13px] text-gray-500">
                    Số lượng sản phẩm hết hạn
                </span>
                <span className="text-[28px] font-medium text-gray-800">
                    6
                </span>
            </div>
        </div>
    )
}

export default StatisticProductCards