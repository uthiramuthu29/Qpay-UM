export default function PayOne(props) {
  return (
    <div className="payone flex mb-[20px]">
      <div className="payone-content py-[28px] ps-[40px]">
        <h1 className='text-white text-[40px] leading-[48px] font-semibold mb-[10px]'>
          Pay <span className='font-extrabold'>₹1/month*</span> for the <span className='font-extrabold'>QPay POS Device</span>
        </h1>
        <p className='text-[16px] leading-[24px] font-medium mb-[20px]'>One device for accepting all modes of payments</p>
        <a className='text-[14px] leading-[14px] font-medium px-[24px] py-[12px] bg-white text-[#42794A] rounded-[8px]' href="#">Download App Now!</a>
      </div>
      <div className="payone-img bg-white">
        <img className='max-w-[271px]' src={props.image} alt={props.image} />
      </div>
    </div>
  );
}
