import { User } from "lucide-react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption } from "echarts";

type ActivityPoint = {
    month: string;
    current: number;
    previous: number;
};

const data: ActivityPoint[] = [
    { month: "Jan", current: 280, previous: 20 },
    { month: "Feb", current: 620, previous: 90 },
    { month: "Mar", current: 200, previous: 190 },
    { month: "Apr", current: 500, previous: 40 },
    { month: "May", current: 360, previous: 400 },
    { month: "Jun", current: 900, previous: 200 },
    { month: "Jul", current: 700, previous: 210 },
];

export default function ActivityGraph() {
    const option: EChartsOption = {
        tooltip: {
            trigger: "axis",
            backgroundColor: "#fff",
            borderColor: "#e7e5e4",
            textStyle: {
                color: "#292524",
            },
        },
        grid: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 0,
            containLabel: true,
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: data.map((item) => item.month),
            axisLine: {
                lineStyle: {
                    color: "#d6d3d1",
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: "#57534e",
                fontSize: 12,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#e7e5e4",
                },
            },
        },
        yAxis: {
            type: "value",
            min: 0,
            max: 1000,
            interval: 250,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: "#57534e",
                fontSize: 12,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#e7e5e4",
                },
            },
        },
        series: [
            {
                name: "Current",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 8,
                data: data.map((item) => item.current),
                lineStyle: {
                    width: 2,
                    color: "#0369a1",
                },
                itemStyle: {
                    color: "#0369a1",
                    borderColor: "#0369a1",
                },
            },
            {
                name: "Previous",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 8,
                data: data.map((item) => item.previous),
                lineStyle: {
                    width: 2,
                    color: "#1c1917",
                },
                itemStyle: {
                    color: "#1c1917",
                    borderColor: "#1c1917",
                },
            },
        ],
    };

    return (
        <div className="col-span-8 overflow-hidden rounded-md border border-stone-300 bg-white">
            <div className="p-4">
                <h3 className="flex items-center gap-2 text-lg font-medium text-stone-900">
                    <User className="size-4" />
                    Activity
                </h3>
            </div>

            <div className="h-64 w-full px-4">
                <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
            </div>
        </div>
    );
}