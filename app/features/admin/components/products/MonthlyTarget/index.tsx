import { useEffect, useState } from "react";

function MonthlyTarget() {
    const [TargetComponent, setTargetComponent] = useState<any>(null);

    useEffect(() => {
        import("./Target").then((mod) => {
            setTargetComponent(() => mod.default);
        });
    }, []);

    if (!TargetComponent) {
        return (
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 sm:px-6 sm:pt-6 h-[250px] flex items-center justify-center">
                <div className="text-gray-400">
                    Loading...
                </div>
            </div>
        );
    }

    return <TargetComponent />;
}

export default MonthlyTarget;