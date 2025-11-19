import OptionCard from './OptionCard';
import { CreditCard, Handshake, Users, CheckCircle } from 'lucide-react';

const options = [
  { id: 1, icon: CreditCard, title: 'Pay Medical Bill' },
  { id: 2, icon: Handshake, title: 'Get Loan' },
  { id: 3, icon: Users, title: 'Join MaMas' },
  { id: 4, icon: CheckCircle, title: 'My Approvals' },
];

export default function AccountOptions() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {options.map((option) => (
        <OptionCard key={option.id} option={option} />
      ))}
    </div>
  );
}
