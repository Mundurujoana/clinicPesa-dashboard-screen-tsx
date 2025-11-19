// src/components/FooterNote.tsx

const FooterNote: React.FC = () => {
  return (
    <p className="text-center text-xs mb-4 font-bold text-grayText">
      clinicPesa{' '}
      <span style={{ color: '#004f71' }} className="cursor-pointer">
        T&Cs
      </span>{' '}
      apply.
    </p>
  );
};

export default FooterNote;
