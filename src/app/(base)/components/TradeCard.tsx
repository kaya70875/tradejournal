import { Calendar, SquarePen, Trash } from "lucide-react";
import Tag from "./Tag";

interface TrandeCardProps {
    pair: string;
    reason: string;
    date: string;
    tags: string[];
}

export default function TradeCard({ pair, reason, date, tags }: TrandeCardProps) {
    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg border border-gray-200 w-full max-w-2xl">
            <section className="flex flex-col gap-2">
                <header className="flex items-center w-full justify-between">
                    <h3>{pair}</h3>
                    <div className="icons flex items-center gap-2">
                        <SquarePen className="w-5 h-5 text-gray-400 cursor-pointer" />
                        <Trash className="w-5 h-5 text-gray-400 cursor-pointer" />
                    </div>
                </header>

                <div className="date flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">{date}</span>
                </div>
            </section>

            <div className="description">
                <p className="text-gray-700">{reason}</p>
            </div>

            <div className="tags flex items-center gap-2">
                {tags.map((tag, idx) => (
                    <Tag name={tag} key={idx} />
                ))}
            </div>
        </div>
    )
}