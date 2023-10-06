import { BsArrowClockwise } from "react-icons/bs";

export default function SearchBarResults({display, loading=false, results=[], fallbackMessage= "No results found.", onClick}:{
    display: boolean;
    loading?: boolean;
    results?: any[];
    fallbackMessage?: string;
    onClick?: (text: string, value?: string) => void;
}){

    function handleClick(text: string, value?: string){
        return onClick ? onClick(text, value) : undefined 
    }

    return(
        <div className={`${display ? "" : "hidden"} absolute bg-slate-600 z-20 rounded-md w-1/2 right-0 mt-2 h-44 shadow-md shadow-black/40 overflow-clip`}>
            <div className="overflow-y-scroll h-44">
                {loading ? 
                (<div className="flex p-3 gap-2 select-none justify-between"> <p>Loading results</p> <BsArrowClockwise className="animate-spin h-6 w-6"/></div>):
                (results.length > 0 && !loading ? results.map(x => <Result text={x.text} value={x.value} onClick={handleClick}/>) : <p className="p-3">No results found.</p>)}
            </div>
        </div>
    )
}

function Result({onClick, value = "", text}:{
    onClick: (text: string, value?: string) => void;
    value?: string;
    text: string;
}){
    return(
        <div className="p-3 hover:bg-slate-900/20 cursor-pointer" onClick={() => onClick(text, value)}>{text}</div>
    )
}