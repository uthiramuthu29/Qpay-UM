export default function ProfileCards(props) {
  return (
    <div className="profile-card bg-[#EEF8F2] p-[24px] rounded-[14px]">
        <a className="relative" href="#">
            <img className="mb-[14px]" width={64} src={props.image} alt={props.image} />
            <h4 className="text-[24px] leading-[24px] text-[#42794A] font-semibold mb-[8px]">{props.title}</h4>
            <p className="text-[20px] leading-[20px] text-[#999999] font-medium">{props.description}</p>
        </a>
    </div>
  )
}
