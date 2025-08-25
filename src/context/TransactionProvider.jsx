import { useEffect, useState } from "react";
import { TransactionContext } from "./TransactionContext";

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchTransactions = async (pageNo = 0) => {
    setLoading(true);
    console.log("Fetching from:", `/api/wallet/api/v1/transaction_history?service_id=111&page=${pageNo}`);
    try {
        

      const response = await fetch(
        `/api/wallet/api/v1/transaction_history?service_id=111&page=${pageNo}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();

      if (data?.data?.length > 0) {
        setTransactions(data.data);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error fetching transactions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions(page);
  }, [page]);

  return (
    <TransactionContext.Provider
      value={{ transactions, page, setPage, loading, hasMore }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
