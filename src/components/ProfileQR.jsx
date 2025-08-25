export default function ProfileQR(props){
    return(
        <div className="profile-qr border-[1px] border-[#EEEEEE] rounded-[12px] p-[32px] flex-1">
            <h6 className="text-[14px] leading-[16px] font-semibold text-[#999999] uppercase mb-[24px]">{props.heading}</h6>
            <div className="flex gap-[33px] mb-[24px] pb-[24px] border-b-[1px] border-[#EEEEEE]">
                <img width={184} src={props.image} alt={props.image} />
                <div className="complete-profile">
                    <p className="text-[20px] leading-[20px] font-semibold text-[#252525] mb-[16px]">{props.title}</p>
                    <ul className="list-disc list-outside pl-[20px]">
                        <li className="text-[16px] leading-[16px] font-medium text-[#999999] mb-[8px]">{props.li1}</li>
                        <li className="text-[16px] leading-[16px] font-medium text-[#999999] mb-[8px]">{props.li2}</li>
                        <li className="text-[16px] leading-[16px] font-medium text-[#999999] mb-[8px]">{props.li3}</li>
                    </ul>
                </div>
            </div>
            <a className="text-[20px] leading-[20px] font-medium text-[#FFFFFF] py-[16px] inline-block text-center w-full bg-[#42794A] rounded-[12px]" href="/">{props.buttontext}</a>
        </div>
    );
}