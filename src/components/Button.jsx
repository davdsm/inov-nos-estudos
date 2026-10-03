import React from 'react';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  primary: {
    bg: 'var(--action-primary)',
    hover: 'var(--action-primary-hover)',
    fg: 'var(--text-on-brand)',
    border: 'transparent'
  },
  secondary: {
    bg: 'var(--action-secondary)',
    hover: 'var(--action-secondary-hover)',
    fg: 'var(--text-on-brand)',
    border: 'transparent'
  },
  sunny: {
    bg: 'var(--action-tertiary)',
    hover: 'var(--action-tertiary-hover)',
    fg: 'var(--navy-800)',
    border: 'transparent'
  },
  outline: {
    bg: 'transparent',
    hover: 'var(--teal-100)',
    fg: 'var(--navy-800)',
    border: 'var(--border-brand)'
  },
  ghost: {
    bg: 'transparent',
    hover: 'var(--grey-100)',
    fg: 'var(--navy-800)',
    border: 'transparent'
  }
};
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--text-sm)'
  },
  md: {
    padding: '12px 24px',
    fontSize: 'var(--text-md)'
  },
  lg: {
    padding: '16px 32px',
    fontSize: 'var(--text-lg)'
  }
};
export function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  iconLeft,
  iconRight,
  as = 'button',
  href,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const t = TONES[variant] || TONES.primary,
    s = SIZES[size] || SIZES.md;
  const Tag = as === 'a' ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: full ? 'flex' : 'inline-flex',
      width: full ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '.005em',
      textDecoration: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      border: `var(--border-thick) solid ${disabled ? 'transparent' : t.border}`,
      background: disabled ? 'var(--action-disabled)' : hover ? t.hover : t.bg,
      color: disabled ? 'var(--grey-400)' : t.fg,
      boxShadow: disabled ? 'none' : press ? 'var(--shadow-press)' : hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transform: press && !disabled ? 'scale(var(--press-scale))' : 'translateY(0)',
      transition: 'background var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out),transform var(--dur-fast) var(--ease-out)',
      ...s,
      ...style
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}

