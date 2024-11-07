import classNames from "classnames";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  theme?: "primary" | "secondary" | "success" | "danger";
}

export const Button = ({
  title,
  onClick = () => {},
  theme = "primary",
}: ButtonProps) => {
  const themeClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
  };

  const buttonClasses = classNames(
    "w-full rounded-full px-3 py-2",
    themeClasses[theme],
  );

  return (
    <button onClick={onClick} className={buttonClasses}>
      {title}
    </button>
  );
};
