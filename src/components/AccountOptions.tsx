// src/components/AccountOptions.tsx
import OptionCard from "./OptionCard";

const options = [
  { id: 1, icon: "💳", title: "Pay Medical Bill" },
  { id: 2, icon: "🤝", title: "Get Loan" },
  { id: 3, icon: "👥", title: "Join MaMas" },
  { id: 4, icon: "✓", title: "My Approvals" },
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
