import React from 'react';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
export function Input({
  label,
  hint,
  error,
  type = 'text',
  value,
  onChange,
  placeholder,
  iconLeft,
  required = false,
  disabled = false,
  multiline = false,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useId ? React.useId() : 'in';
  const fieldId = id || uid;
  const borderColor = error ? 'var(--status-danger)' : focus ? 'var(--focus-ring)' : 'var(--border-subtle)';
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-sm)',
      color: 'var(--navy-800)',
      marginBottom: 'var(--space-2)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--coral-600)'
    }
  }, " *")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: multiline ? 'flex-start' : 'center',
      gap: 'var(--space-2)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `var(--border-thick) solid ${borderColor}`,
      borderRadius: multiline ? 'var(--radius-md)' : 'var(--radius-pill)',
      padding: multiline ? '12px 16px' : '0 18px',
      height: multiline ? 'auto' : 48,
      boxShadow: focus ? 'var(--shadow-ring)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--grey-400)',
      display: 'flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement(Tag, _extends({
    id: fieldId,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      resize: multiline ? 'vertical' : undefined,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      lineHeight: multiline ? 'var(--leading-body)' : '1.2',
      padding: 0
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-xs)',
      fontWeight: error ? 'var(--weight-bold)' : 'var(--weight-regular)',
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}

