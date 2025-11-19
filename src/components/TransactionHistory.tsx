// src/components/TransactionHistory.tsx

interface Transaction {
  id: number;
  type: string;
  amount: string;
  date: string;
}

export default function TransactionHistory() {
  return (
    <div className="text-center py-12 ">
      <p className="text-xs text-center text-grayText">No transactions recorded yet</p>
    </div>
  );
}
