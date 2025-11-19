import OptionCard from './OptionCard';
import { Users, CircleCheck } from 'lucide-react';
import LoanIcon from '../assets/icons/loan.png';
import billIcon from '../assets/icons/bill.png';

const options = [
  { id: 1, icon: billIcon, title: 'Pay Medical Bill', isImage: true },
  { id: 2, icon: LoanIcon, title: 'Get Loan', isImage: true },
  { id: 3, icon: Users, title: 'Join MaMas' },
  { id: 4, icon: CircleCheck, title: 'My Approvals' }, // use Big variant
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
