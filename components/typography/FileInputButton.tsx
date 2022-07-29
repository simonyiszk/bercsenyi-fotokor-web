import clsx from "clsx";
import React from "react";

type FileInputButtonProps = {
  options?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  isAccepted?: boolean;
  handleFile: (f: File) => void;
};

const FileInputButton = ({
  handleFile,
  options,
  isAccepted,
}: FileInputButtonProps) => {
  const hiddenFileInput: React.LegacyRef<HTMLInputElement> = React.useRef(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    hiddenFileInput?.current?.click();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      handleFile(file);
    }
  };
  return (
    <>
      <button
        className={clsx(
          isAccepted ? "hover:bg-success" : "bg-base-200",
          isAccepted && "input-success hover:bg-success",
          "input input-bordered transition duration-300 w-full"
        )}
        onClick={handleClick}
      >
        Choose file
      </button>
      <input
        {...options}
        type={"file"}
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
};

export default FileInputButton;
