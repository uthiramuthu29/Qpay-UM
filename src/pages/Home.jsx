import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PayOne from "../components/PayOne";
import ProfileQR from "../components/ProfileQR";
import Stats from "../components/Stats";
import TransactionList from "../components/TransactionList";

import thirtypercent from '../assets/img/30-percent.png'
import QR from '../assets/img/order-qr.png'

import billPayment from '../assets/img/bill-payment.png'

export default function Home(){
    return(
        <>
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 pt-[168px]">
            <aside className="col-span-12 lg:col-span-3">
                <Navbar />
            </aside>
            <section className="col-span-12 lg:col-span-9">
                <PayOne image={billPayment}/>
                <div className="stats-cont flex gap-[16px] mb-[20px]">
                    <Stats number="1.5k" title="Account Holders" />
                    <Stats number="2.1k" title="Transactions" />
                    <Stats number="2.3k" title="Settlement" />
                    <Stats number="45k" title="QR Orders" />
                </div>
                <div className="profile-qr-cont flex gap-[20px] mb-[20px]">
                    <ProfileQR heading="Profile" image={thirtypercent} title="Complete your profile" li1="Personal KYC" li2="Company KYC" li3="Onboarding details" buttontext="Next" />
                    <ProfileQR heading="QR" image={QR} title="Order QR" li1="Receive Payment" li2="Order new QRs" li3="Download QR" buttontext="View more" />
                </div>
                <div className="transactionlist-cont flex gap-[20px] mb-[20px]">
                    <TransactionList name="Settlement" btntext="Settle Now" />
                    <TransactionList name="Total Transactions" btntext="View All" />
                </div>
            </section>
        </main>
        
        </>
    )
}