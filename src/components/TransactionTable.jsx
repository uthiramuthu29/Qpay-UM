import { useTransactions } from "../context/useTransactions";

import logo from "../assets/img/logoQpay.png";

export default function TransactionTable() {
  const { transactions, page, setPage, loading, hasMore } = useTransactions();

  const userMap = {
    28205: "Lisa",
  };

  return (
    <div className="pt-[16px]">

      <div className="overflow-x-auto rounded-[16px]">
        <table className="min-w-full min-h-[50vh] bg-white border border-gray-200">
          <thead>
            <tr className="text-[#999999] text-[14px] leading-[16px] font-semibold uppercase text-left ">
              <th className="p-[24px] w-[200px]">Name</th>
              <th className="p-[24px]">Date & Time</th>
              <th className="p-[24px]">Account</th>
              <th className="p-[24px]">Amount</th>
              <th className="p-[24px]">Status</th>
              <th className="p-[24px]">Details</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : transactions.length > 0 ? (
              transactions.map((txn, index) => (
                <tr
                  key={txn.id || index}
                  className="border-[1px] border-[#EEEEEE] text-[#252525] text-[20px] leading-[20px] font-semibold hover:bg-gray-50"
                >
                  <td className="px-[24px] py-[28px] w-[200px]">
                    {userMap[txn.user_id] || txn.user_id}
                  </td>
                  <td className="px-[24px] py-[28px]">
                    {new Date(txn.created_date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }).replace(" ", ", ")}
                  </td>
                  <td className="px-[24px] py-[28px] flex gap-[4px] text-[#999999]">
                    From <img className="w-[24px]" src={logo} alt="" />
                  </td>
                  <td className="px-[24px] py-[28px]">₹{Math.round(txn.amount).toLocaleString("en-IN")}</td>
                  <td className="px-[24px] py-[28px]">
                    <p className=" font-medium text-[#EDB823] py-[5px] px-[10px] border-[1px] border-[#EDB823] rounded-[4px] text-center ">{txn.status.charAt(0).toUpperCase() +
                      txn.status.slice(1).toLowerCase()}</p>
                  </td>
                  <td className="px-[24px] py-[28px]">
                    <a className="text-[#42794A] underline">View</a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          className="px-3 py-1 rounded-full bg-white border-[1px] border-[#EEEEEE] text-[#EEEEEE] text-[20px] font-semibold"
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
        >
          &lt;
        </button>

        {(() => {
          const pages = [];
          const totalPages = page + (hasMore ? 2 : 1); 

          const createPageButton = (i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-full border-[1px] border-[#EEEEEE] text-[20px] font-semibold ${
                i === page
                  ? "bg-[#42794A] text-white"
                  : "bg-white text-[#EEEEEE] hover:bg-gray-300"
              }`}
              onClick={() => setPage(i)}
            >
              {i + 1}
            </button>
          );

          for (let i = 0; i < Math.min(2, totalPages); i++) {
            pages.push(createPageButton(i));
          }

          if (page > 3) {
            pages.push(
              <button
                key="left-ellipsis"
                className="px-3 py-1 bg-gray-100"
                onClick={() => setPage(page - 2)}
              >
                ...
              </button>
            );
          }

          for (
            let i = Math.max(2, page - 1);
            i <= Math.min(totalPages - 3, page + 1);
            i++
          ) {
            pages.push(createPageButton(i));
          }

          if (page < totalPages - 4) {
            pages.push(
              <button
                key="right-ellipsis"
                className="px-3 py-1 bg-gray-100"
                onClick={() => setPage(page + 2)}
              >
                ...
              </button>
            );
          }

          for (let i = Math.max(totalPages - 2, 2); i < totalPages; i++) {
            pages.push(createPageButton(i));
          }

          return pages;
        })()}

        <button
          className="px-3 py-1 rounded-full bg-white border-[1px] border-[#EEEEEE] text-[#EEEEEE] text-[20px] font-semibold"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={!hasMore}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
