export default function ManageBusiness(props) {
  return (
    <div className="manage-business">
        <div className="img-cont p-[18px] bg-white rounded-[16px] mb-[8px]">
            <img className="mx-auto" width={44} src={props.image} alt={props.image} />
        </div>
        <p className="text-[14px] leading-[14px] text-[#252525] font-medium text-center max-w-[80px]">{props.title}</p>
    </div>
  )
}