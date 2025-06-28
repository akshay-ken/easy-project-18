import clsx from "clsx";
import { MdOutlineNearbyError } from "react-icons/md";

export function FormField({
  placeholderText,
  onChangeValue,
  val,
  Error,
  errorMsg,
}) {
  const baseStyle = clsx(
    "w-full outline-1 p-4 font-bold text-xl rounded-sm mt-6",
    {
      "outline-gray-400": Error === false,
      "outline-Red outline-3": Error === true,
    }
  );
  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholderText}
          onChange={onChangeValue}
          value={val}
          className={baseStyle}
        />

        {Error ? (
          <>
            <MdOutlineNearbyError className="absolute top-8 fill-Red size-10 right-3" />
            <p className="-mb-4 mt-1 font-semibold italic text-right text-xs text-Red">
              {errorMsg}
            </p>
          </>
        ) : null}
      </div>
    </>
  );
}
