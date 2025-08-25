import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TransactionTable from "../components/TransactionTable";

import search from "../assets/img/search.svg"
import filter from "../assets/img/filter.svg"
import clock from "../assets/img/clock.svg"
import stopwatch from "../assets/img/stopwatch.svg"


export default function SettleNow(){
    return(
        <>
        <Header />
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 pt-[168px]">
                <aside className="col-span-12 lg:col-span-3">
                  <Navbar />
                </aside>
                <section className="col-span-12 lg:col-span-9">
                  <div className="settlement-page-head flex justify-between mb-[16px] ">
                    <h1 className="text-[32px] leading-[38px] font-bold text-[#252525] ">Settlement History</h1>
                    <a className="text-[20px] leading-[20px] font-medium text-[#42794A] border-[#42794A] rounded-[8px] border-[1px] py-[12px] px-[24px] " href="#">Download statement</a>
                  </div>
                  <div className="search-bar flex justify-between gap-[16px] mb-[16px] ">
                    <div className="flex w-full relative">
                      <img className="absolute left-3 top-1/2 -translate-y-1/2" src={search} alt="" />
                      <input className="text-[20px] leading-[20px] font-medium border-[1px] border-[#EEEEEE] rounded-[12px] w-full pl-[44px] " type="search" placeholder="Search" id="search-bar" />
                    </div>
                    
                    <img className="bg-[#42794A] border-[1px] border-[#EEEEEE] p-[12px] rounded-[12px] " src={filter} alt="" />
                  </div>
                  <div className="reminder flex justify-between px-[24px] py-[28px] bg-[#EEF8F2] border-[1px] border-[#42794A] rounded-[16px] ">
                    <div className="flex items-center">
                      <img src={clock} alt="" />
                      <p className="text-[16px] leading-[20px] font-medium text-[#999999] ">Today’s total collection will be auto-settled by <span className="text-[#42794A] font-bold">08:00AM, 23rd Oct’22</span> Tomorrow.</p>
                    </div>
                    <a href="" className="flex items-center bg-[#42794A] py-[12px] px-[40px] text-[20px] leading-[20px] font-medium text-[#FFFFFF] rounded-[8px]"><img src={stopwatch} alt="" />Settle Now!</a>
                  </div>
                  <TransactionTable />
                </section>
              </main>
        </>
    );
}