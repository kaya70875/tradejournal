import { Calendar } from "lucide-react";
import Tag from "./Tag";
import TradeCardActions from "./TradeCardActions";
import { TradeCard as TradeCardType } from "./DashboardClient"; // Renamed to avoid conflict

interface TrandeCardProps {
    trade: TradeCardType; // Pass the entire trade object
    onEdit: (trade: TradeCardType) => void;
    onViewDetails: (trade: TradeCardType) => void; // New prop for viewing details
}

export default function TradeCard({ trade, onEdit, onViewDetails }: TrandeCardProps) {

    return (
        <div
            className="flex flex-col gap-4 p-4 rounded-lg border border-gray-200 w-full max-w-2xl cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onViewDetails(trade)} // Make the entire card clickable
        >
            <section className="flex flex-col gap-2">
                <header className="flex items-center w-full justify-between">
                    <h3>{trade.pair}</h3>
                    <div onClick={(e) => e.stopPropagation()}> {/* Prevent modal from opening when clicking actions */}
                        <TradeCardActions cardId={trade.id} onEdit={() => onEdit(trade)} />
                    </div>
                </header>

                <div className="date flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">{new Date(trade.created_at).toLocaleDateString()}</span>
                </div>
            </section>

            <div className="description max-h-12">
                <p className="text-gray-700 line-clamp-3">{trade.reason}</p>
            </div>

            <div className="tags flex items-center gap-2">
                {trade.tags.map((tag, idx) => (
                    <Tag name={tag} key={idx} />
                ))}
            </div>
        </div>
    )
}