interface TagProps {
    name: string;
}

export default function Tag({name} : TagProps) {
    return (
        <div className="flex items-center justify-center rounded-xl bg-blue-200 text-gray-800 cursor-pointer font-medium text-sm w-12">
            {name}
        </div>
    )
}