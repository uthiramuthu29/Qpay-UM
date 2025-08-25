import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PayOne from "../components/PayOne";
import ProfileCards from "../components/ProfileCards";
import ManageBusiness from "../components/ManageBusiness";

import posdevice from "../assets/img/pos-device.png";
import bank from "../assets/img/bank.png";
import business from "../assets/img/business-profile.png";
import kyc from "../assets/img/kyc.png";
import shoppingcart from "../assets/img/qr-shoping-cart.png";
import speaker from "../assets/img/smart-speaker.png";
import smallMachine from "../assets/img/pos-machine-small.png";
import settings from "../assets/img/payment-settings.png";
import manageStaff from "../assets/img/manage-staff.png";
import language from "../assets/img/language.png";

export default function Profile() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 pt-[168px]">
        <aside className="col-span-12 lg:col-span-3">
          <Navbar />
        </aside>
        <section className="col-span-12 lg:col-span-9">
          <PayOne image={posdevice} />
          <div className="profile-cards-cont flex gap-[16px] mb-[40px]">
            <ProfileCards
              image={bank}
              title="XXXX 9820"
              description="ICICI Bank | Chennai Egmore Branch"
            />
            <ProfileCards
              image={business}
              title="Business Profile"
              description="View and edit your business details"
            />
            <ProfileCards
              image={kyc}
              title="KYC Verification"
              description="Unlock exclusive benefits with KYC"
            />
            <ProfileCards
              image={shoppingcart}
              title="Order QR"
              description="Get paid, manage & order QRs"
            />
          </div>

          <div className="flex gap-[20px]">
            <div className="business-services border-[1px] border-[#EEEEEE] rounded-[16px] flex-1 py-[24px] px-[32px]">
              <h6 className="text-[14px] leading-[16px] text-[#999999] font-semibold mb-[16px] uppercase">Business Services</h6>
              <div className="flex gap-[30px]">
                <ManageBusiness image={speaker} title="Smart Speaker" />
                <ManageBusiness image={smallMachine} title="POS Machine" />
              </div>
            </div>
            <div className="business-services border-[1px] border-[#EEEEEE] rounded-[16px] flex-1 py-[24px] px-[32px]">
              <h6 className="text-[14px] leading-[16px] text-[#999999] font-semibold mb-[16px] uppercase">Manage Business</h6>
              <div className="flex gap-[30px]">
                <ManageBusiness image={settings} title="Payment Settings" />
                <ManageBusiness image={manageStaff} title="Manage Staff" />
                <ManageBusiness image={language} title="Change Language" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
