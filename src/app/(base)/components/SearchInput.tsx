import { SearchIcon } from "lucide-react";

export default function SearchInput() {
    return (
        <div className="input-field relative">
            <SearchIcon className="w-5 h-5 text-gray-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
                className="w-full pl-10 pr-2 py-2 border border-gray-200 rounded-lg"
                type="text"
                placeholder="Search trades by pair"
            />
        </div>
    );
}
