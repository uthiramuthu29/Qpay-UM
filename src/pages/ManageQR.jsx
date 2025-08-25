import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TabQR from "../components/TabQR";

import logo from "../assets/img/logoQpay.png"
import QRcode from "../assets/img/QR-code.png"
import copy from "../assets/img/copy.svg"
import download from "../assets/img/download.svg"
import share from "../assets/img/share.svg"


export default function ManageQR() {
  return (
    <>
      <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 pt-[168px]">
              <aside className="col-span-12 lg:col-span-3">
                <Navbar />
              </aside>
              <section className="col-span-12 lg:col-span-9">
                <h1 className="text-[32px] leading-[38px] text-[#252525] font-bold mb-[16px]">Manage QR/POS</h1>
                <div className="flex gap-[20px]">
                  <div className="qr-code-cont flex-1 border-[1px] border-[#EEEEEE] rounded-[16px] p-[32px]">
                    <div className="logo">
                      <img className="w-[72px] mx-auto mb-[24px]" src={logo} alt={logo} />
                    </div>
                    <div className="qr-code">
                      <img className="w-[426px] mb-[24px]" src={QRcode} alt={QRcode} />
                    </div>
                    <h3 className="text-[20px] leading-[20px] font-bold mb-[8px] text-[#252525] flex gap-[8px] justify-center items-center">UPI ID: 9876543210@qpay <img className="w-[24px]" src={copy} alt={copy} /></h3>
                    <p className="text-[16px] leading-[18px] font-medium mb-[24px] text-[#999999] text-center">Ibrahim Mohammedali</p>
                    <div className="btn-cont flex gap-[16px]">
                      <a className="text-[20px] leading-[20px] font-semibold text-[#252525] bg-[#EEEEEE] flex flex-1 gap-[4px] py-[16px] justify-center items-center rounded-[8px]" href="#"><img src={download} alt={download} />Download</a>
                      <a className="text-[20px] leading-[20px] font-semibold text-[#252525] bg-[#EEEEEE] flex flex-1 gap-[4px] py-[16px] justify-center items-center rounded-[8px]" href="#"><img src={share} alt={share} />Share</a>
                    </div>
                  </div>
                  <div className="tab-cont flex-1">
                    <TabQR />
                  </div>
                </div>
              </section>
            </main>
    </>
  );
}
