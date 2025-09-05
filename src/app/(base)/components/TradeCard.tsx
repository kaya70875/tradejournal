import { Calendar } from "lucide-react";
import Tag from "./Tag";
import TradeCardActions from "./TradeCardActions";

interface TrandeCardProps {
    id: number;
    pair: string;
    reason: string;
    date: string;
    tags: string[];
    onEdit: () => void;
}

export default function TradeCard({ id, pair, reason, date, tags, onEdit }: TrandeCardProps) {

    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg border border-gray-200 w-full max-w-2xl">
            <section className="flex flex-col gap-2">
                <header className="flex items-center w-full justify-between">
                    <h3>{pair}</h3>
                    <TradeCardActions cardId={id} onEdit={onEdit} />
                </header>

                <div className="date flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">{date}</span>
                </div>
            </section>

            <div className="description max-h-12">
                <p className="text-gray-700 line-clamp-2">{reason}</p>
            </div>

            <div className="tags flex items-center gap-2">
                {tags.map((tag, idx) => (
                    <Tag name={tag} key={idx} />
                ))}
            </div>
        </div>
    )
}