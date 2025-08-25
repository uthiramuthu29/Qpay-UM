import { useEffect, useState } from "react";
import { TransactionContext } from "./TransactionContext";

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchTransactions = async (pageNo = 0) => {
    setLoading(true);
    try {        
      const response = await fetch(
        `/.netlify/functions/proxy?service_id=111&page=${pageNo}`,
        {
          method: "GET",
          headers: {
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
