import React from 'react';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
export function Select({
  label,
  hint,
  error,
  options = [],
  value,
  onChange,
  placeholder = 'Escolhe uma opção',
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useId ? React.useId() : 'sel';
  const fieldId = id || uid;
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
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 48,
      padding: '0 44px 0 18px',
      appearance: 'none',
      borderRadius: 'var(--radius-pill)',
      border: `var(--border-thick) solid ${error ? 'var(--status-danger)' : focus ? 'var(--focus-ring)' : 'var(--border-subtle)'}`,
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: value ? 'var(--text-body)' : 'var(--grey-400)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: focus ? 'var(--shadow-ring)' : 'none',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)'
    }
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 18,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--teal-600)',
      fontSize: 12,
      pointerEvents: 'none'
    }
  }, "\u25BE")), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}

