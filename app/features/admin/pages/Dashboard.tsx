import MetricsCards from "../components/products/MetricsCards";
import MonthlySalesChart from '../components/products/MonthlySalesChart/index';
import MonthlyTarget from '../components/products/MonthlyTarget/index';
import StatisticsChart from '../components/products/StatisticsChart/index';

export default function Dashboard() {
    return (
        <div className="p-6 grid grid-cols-12 gap-4 md:gap-6">
            {/* Card & Pie, Bar Chart */}
            <div className="col-span-12 space-y-6 lg:col-span-7">
                <MetricsCards />
                <MonthlySalesChart />
            </div>

            {/* Analytics Bar */}
            <div className="col-span-12 lg:col-span-5">
                <MonthlyTarget />
            </div>

            {/* Statistics Chart */}
            <div className="col-span-12">
                <StatisticsChart />
            </div>

            {/* Map Chart */}
            <div>

            </div>

            {/* Table Data */}
            <div></div>
        </div>
    )
}
