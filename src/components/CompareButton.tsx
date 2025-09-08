type Props = {
  onClick: () => void;
  disabled?: boolean;
};

export default function CompareButton({ onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded-md bg-[#3b82f6] text-white px-6 py-2 text-sm hover:bg-[#2563eb] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      შედარება
    </button>
  );
}
