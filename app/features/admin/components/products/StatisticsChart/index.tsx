import { useEffect, useState } from "react";

function StatisticsChart() {
    const [LineChartComponent, setLineChartComponent] = useState<any>(null);

    useEffect(() => {
        import("./LineChart").then((mod) => {
            setLineChartComponent(() => mod.default);
        });
    }, []);

    if (!LineChartComponent) {
        return (
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 sm:px-6 sm:pt-6 h-[250px] flex items-center justify-center">
                <div className="text-gray-400">
                    Loading chart...
                </div>
            </div>
        );
    }

    return <LineChartComponent />;
}

export default StatisticsChart;