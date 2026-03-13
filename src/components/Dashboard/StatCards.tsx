import { TrendingDown, TrendingUp } from "lucide-react";

const cards: cardType[] = [
    {
        title: "Gross Revenue",
        value: "$120,054.24",
        pillText: "2.75%",
        trend: "up",
        period: "From Jan 1st – Jul 31st",
    },
    {
        title: "Avg Order",
        value: "$27.97",
        pillText: "1.01%",
        trend: "down",
        period: "From Jan 1st – Jul 31st",
    },
    {
        title: "Trailing Year",
        value: "$278,054.24",
        pillText: "60.75%",
        trend: "up",
        period: "Previous 365 days",
    },
];

const StatCards = () => {
    return (
        <>
            {
                cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        value={card.value}
                        pillText={card.pillText}
                        trend={card.trend}
                        period={card.period}
                    />
                ))
            }
        </>
    )
}

export default StatCards

interface cardType {
    title: string;
    value: string;
    pillText: string;
    trend: 'up' | 'down';
    period: string
}

const Card = ({ title, value, pillText, trend, period }: cardType) => {
    return (
        <div className="p-4 col-span-4 rounded border border-stone-300">
            <div className="flex mb-8 items-start justify-between">
                <div>
                    <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
                    <p className="text-3xl font-semibold">{value}</p>
                </div>
                <span className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded-2xl
                    ${trend === 'up'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                    {trend === 'up' ? <TrendingUp /> : <TrendingDown />}
                    {pillText}
                </span>
            </div>
            <p className="text-xs text-stone-500">{period}</p>
        </div>
    )
}