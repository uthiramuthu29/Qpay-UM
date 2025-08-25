export default function Stats(props){
    return(
        <div className="stats border-[1px] border-[#EEEEEE] rounded-[12px] flex-1 p-[30px] text-center">
            <h3 className="text-[40px] font-bold text-[#42794A]">{props.number}</h3>
            <p className="text-[20px] font-medium text-[#999999]">{props.title}</p>
        </div>
    );
}