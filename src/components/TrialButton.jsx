import clsx from "clsx";

export function TrialButton({
  boldText,
  thinText = "",
  butColor,
  onClickChange = null,
}) {
  const baseStyles = clsx(
    "w-full font-medium text-2xl text-white p-6 rounded-2xl hover:shadow-[0_8px_0_0] active:shadow-[0_8px_0_0] shadow-black/40 my-6",
    {
      "bg-Blue": butColor == "blue",
      "bg-Green": butColor == "green",
    }
  );
  return (
    <>
      <button className={baseStyles} onClick={onClickChange}>
        {boldText}
        <span className="text-xl font-normal">{thinText}</span>
      </button>
    </>
  );
}
