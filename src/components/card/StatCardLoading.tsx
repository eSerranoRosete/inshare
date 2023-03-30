interface IFProps {
  numberOfCards?: number;
}
export const StatCardLoading = ({ numberOfCards }: IFProps) => {
  const cardArray = Array.from({ length: numberOfCards || 1 }, (_, i) => i);

  return (
    <>
      {cardArray.map((i) => (
        <div
          key={i}
          className="h-28 animate-pulse rounded-lg border border-stone-100 bg-gradient-to-br from-stone-50 to-stone-100 shadow-sm"
        ></div>
      ))}
    </>
  );
};
