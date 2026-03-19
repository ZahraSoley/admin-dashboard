import ReactECharts from "echarts-for-react";

const UsageRadar = () => {
    const option = {
        legend: {
            bottom: 0,
            textStyle: {
                color: "#57534e", // stone-600
            },
        },
        radar: {
            indicator: [
                { name: "Sales", max: 6500 },
                { name: "Administration", max: 16000 },
                { name: "Information Technology", max: 30000 },
                { name: "Customer Support", max: 38000 },
                { name: "Development", max: 52000 },
                { name: "Marketing", max: 25000 },
            ],
            axisName: {
                color: "#57534e", // stone-600
                fontSize: 12,
            },
            axisLine: {
                lineStyle: {
                    color: "#d6d3d1", // stone-300
                },
            },
            splitLine: {
                lineStyle: {
                    color: "#e7e5e4", // stone-200
                },
            },
            splitArea: {
                areaStyle: {
                    color: ["#fafaf9", "#f5f5f4"], // stone-50 / stone-100
                },
            },
        },
        series: [
            {
                name: "Budget vs spending",
                type: "radar",
                data: [
                    {
                        value: [4200, 3000, 20000, 35000, 50000, 18000],
                        name: "Allocated Budget",
                        lineStyle: {
                            color: "#0369a1", // sky-700
                            width: 2,
                        },
                        itemStyle: {
                            color: "#0369a1", // sky-700
                        },
                        areaStyle: {
                            color: "#0ea5e9", // sky-500
                            opacity: 0.18,
                        },
                    },
                    {
                        value: [5000, 14000, 28000, 26000, 42000, 21000],
                        name: "Actual Spending",
                        lineStyle: {
                            color: "#1c1917", // stone-900
                            width: 2,
                        },
                        itemStyle: {
                            color: "#1c1917", // stone-900
                        },
                        areaStyle: {
                            color: "#57534e", // stone-600
                            opacity: 0.1,
                        },
                    },
                ],
            },
        ],
    };

    return (
        <div className="col-span-4 overflow-hidden rounded-md border border-stone-300 bg-white">
            <div className="h-72 w-full p-4">
                <ReactECharts option={option} className="h-full w-full" />
            </div>
        </div>
    );
};

export default UsageRadar;




// bare version 

// import ReactECharts from "echarts-for-react";
// const UsageRadar = () => {
//     const option = {
//         title: {
//             text: "Basic Radar Chart",
//         },
//         legend: {
//             data: ["Allocated Budget", "Actual Spending"],
//         },
//         radar: {
//             indicator: [
//                 { name: "Sales", max: 6500 },
//                 { name: "Administration", max: 16000 },
//                 { name: "Information Technology", max: 30000 },
//                 { name: "Customer Support", max: 38000 },
//                 { name: "Development", max: 52000 },
//                 { name: "Marketing", max: 25000 },
//             ],
//         },
//         series: [
//             {
//                 type: "radar",
//                 data: [
//                     {
//                         value: [4200, 3000, 20000, 35000, 50000, 18000],
//                         name: "Allocated Budget",
//                     },
//                     {
//                         value: [5000, 14000, 28000, 26000, 42000, 21000],
//                         name: "Actual Spending",
//                     },
//                 ],
//             },
//         ],
//     };
//     return (
//         <div className="h-72 w-full">
//             <ReactECharts option={option} />
//         </div>
//     );
// };

// export default UsageRadar;

