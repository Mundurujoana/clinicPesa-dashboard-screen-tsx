// src/components/TransactionHistory.tsx
interface Transaction {
  id: number;
  type: string;
  amount: string;
  date: string;
}

export default function TransactionHistory() {
  const transactions: Transaction[] = [
    { id: 1, type: "Medical Payment", amount: "-UGX 15,000", date: "Today" },
    { id: 2, type: "AutoSave", amount: "+UGX 1,000", date: "Yesterday" },
    { id: 3, type: "Loan Disbursement", amount: "+UGX 50,000", date: "2 days ago" },
  ];

  return (
    <div className="space-y-3">
      {transactions.map((tx) => (
        <div key={tx.id} className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-800">{tx.type}</p>
            <p className="text-xs text-gray-500">{tx.date}</p>
          </div>
          <p
            className={`font-semibold ${
              tx.amount.startsWith("-") ? "text-red-500" : "text-green-600"
            }`}
          >
            {tx.amount}
          </p>
        </div>
      ))}
    </div>
  );
}
