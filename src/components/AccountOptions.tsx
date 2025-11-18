// src/components/AccountOptions.tsx
import OptionCard from "./OptionCard";

const options = [
  { id: 1, icon: "💳", title: "Pay Medical Bill", description: "Settle medical expenses" },
  { id: 2, icon: "🤝", title: "Get Loan", description: "Quick personal loans" },
  { id: 3, icon: "👥", title: "Join MaMas", description: "Community savings group" },
  { id: 4, icon: "✓", title: "My Approvals", description: "View approved requests" },
];

export default function AccountOptions() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {options.map((option) => (
        <OptionCard key={option.id} option={option} />
      ))}
    </div>
  );
}
