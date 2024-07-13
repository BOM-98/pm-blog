import classNames from "classnames";
import className from "classnames";
import PropTypes from "prop-types";

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  className,
  href,
  onClick,
}) {
  //1st arg:: for all variations.
  const classes = classNames(
    "px-6 py-3 border ${",
    {
      "border-orange-500 bg-orange-500 hover:bg-orange-600 hover:border-orange-600 hover:scale-105 transition text-white rounded":
        primary,
      "border-gray-500 bg-gray-500 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    },
    className
  );

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );

  const renderLink = () => (
    <a className={classes} href={href}>
      <span className="mx-auto">{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, danger, warning }) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!danger) + Number(!!warning);
    if (count > 1) {
      return new Error("Only one of p, s, w , s ,d can be true");
    }
  },
};
