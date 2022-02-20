export default function Reset() {
    return (
        <div className="flex justify-center py-4">
            <button className="w-5/6 py-2 rounded text-white text-3xl font-bold bg-blue-500 hover:bg-blue-200 active:bg-blue-400" onClick={() => window.location.reload()}>Reset</button>
        </div>
    )
}