import classNames from "classnames";
import PropTypes from "prop-types";

const variantClasses = {
  primary: "border-orange-500 bg-orange-500 hover:bg-orange-600 hover:border-orange-600 text-white",
  secondary: "border-gray-500 bg-gray-500 text-white",
  success: "border-green-500 bg-green-500 text-white",
  warning: "border-yellow-400 bg-yellow-400 text-white",
  danger: "border-red-500 bg-red-500 text-white",
};

const outlineClasses = {
  primary: "text-blue-500",
  secondary: "text-gray-900",
  success: "text-green-500",
  warning: "text-yellow-500",
  danger: "text-red-500",
};

const textOnlyClasses = {
  primary: "text-orange-500 !px-0 hover:text-orange-600",
  secondary: "text-[var(--softTextColor)] !px-0",
  success: "text-green-500 !px-0 ",
  warning: "text-yellow-400 !px-0",
  danger: "text-red-500 !px-0",
};

function getVariantClass({ primary, secondary, success, warning, danger }) {
  return classNames({
    [variantClasses.primary]: primary,
    [variantClasses.secondary]: secondary,
    [variantClasses.success]: success,
    [variantClasses.warning]: warning,
    [variantClasses.danger]: danger,
  });
}

function getOutlineClass({ primary, secondary, success, warning, danger }) {
  return classNames({
    "bg-white": true,
    [outlineClasses.primary]: primary,
    [outlineClasses.secondary]: secondary,
    [outlineClasses.success]: success,
    [outlineClasses.warning]: warning,
    [outlineClasses.danger]: danger,
  });
}

function getTextOnlyClass({ primary, secondary, success, warning, danger }) {
  return classNames({
    "bg-transparent border-none": true,
    [textOnlyClasses.primary]: primary,
    [textOnlyClasses.secondary]: secondary,
    [textOnlyClasses.success]: success,
    [textOnlyClasses.warning]: warning,
    [textOnlyClasses.danger]: danger,
  });
}

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  textOnly,
  className,
  href,
  onClick,
}) {
  const baseClasses = "px-6 py-3 border transition rounded-md";
  const variantClass = textOnly
    ? getTextOnlyClass({ primary, secondary, success, warning, danger })
    : outline
    ? getOutlineClass({ primary, secondary, success, warning, danger })
    : getVariantClass({ primary, secondary, success, warning, danger });

  const shapeClass = classNames({
    "rounded-full": rounded,
  });

  const classes = classNames(baseClasses, variantClass, shapeClass, className);

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className="mx-auto transition group">
        {children}
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-600"></span>
      </span>
    </button>
  );

  const renderLink = () => (
    <a className={classes} href={href}>
      <span className="mx-auto transition group">
        {children}
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-600"></span>
      </span>
    </a>
  );

  return href ? renderLink() : renderButton();
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  textOnly: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  checkVariationValue: ({ primary, secondary, success, danger, warning }) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!danger) + Number(!!warning);
    if (count > 1) {
      return new Error("Only one of primary, secondary, success, danger, or warning can be true");
    }
  },
};
