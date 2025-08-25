export default function TransactionList(props) {
  return (
    <div className="transactionlist border-[1px] border-[#EEEEEE] rounded-[12px] px-[16px] pt-[12px] pb-[16px] flex-1">
      <div className="head relative border-b-[1px] border-[#EEEEEE] pb-[28px] mb-[24px]">
        <a className="inline-block" href="#">
          <h6 className="text-[14px] leading-[16px] font-semibold text-[#999999] mb-[8px]">{props.name}</h6>
          <h4 className="text-[20px] leading-[20px] font-semibold text-[#252525] mb-[8px]">₹1,23,816.19</h4>
        </a>
      </div>
      <div className="content">
        <ul>
          <li className="flex justify-between items-center mb-[16px]">
            <div className="name-time">
              <h4 className="text-[20px] leading-[20px] font-semibold text-[#252525] mb-[8px]">Ibrahim</h4>
              <h6 className="text-[20px] leading-[20px] font-medium text-[#999999]">23 Oct, 09:15 AM</h6>
            </div>
            <h3 className="text-[20px] leading-[20px] font-semibold text-[#252525]">+₹90</h3>
          </li>
          <li className="flex justify-between items-center mb-[16px]">
            <div className="name-time">
              <h4 className="text-[20px] leading-[20px] font-semibold text-[#252525] mb-[8px]">Ibrahim</h4>
              <h6 className="text-[20px] leading-[20px] font-medium text-[#999999]">23 Oct, 09:15 AM</h6>
            </div>
            <h3 className="text-[20px] leading-[20px] font-semibold text-[#252525]">+₹90</h3>
          </li>
          <li className="flex justify-between items-center mb-[16px]">
            <div className="name-time">
              <h4 className="text-[20px] leading-[20px] font-semibold text-[#252525] mb-[8px]">Ibrahim</h4>
              <h6 className="text-[20px] leading-[20px] font-medium text-[#999999]">23 Oct, 09:15 AM</h6>
            </div>
            <h3 className="text-[20px] leading-[20px] font-semibold text-[#252525]">+₹90</h3>
          </li>
        </ul>
        <a className="text-[20px] leading-[20px] font-medium text-[#FFFFFF] py-[16px] inline-block text-center w-full bg-[#42794A] rounded-[12px] mt-[8px]" href="#">{props.btntext}</a>
      </div>
    </div>
  );
}
