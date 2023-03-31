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
          className="h-28 animate-pulse rounded-lg border border-dark/5 bg-gradient-to-br from-dark/5 to-dark/10 shadow-sm dark:border-light/5 dark:from-light/5 dark:to-light/10"
        ></div>
      ))}
    </>
  );
};
