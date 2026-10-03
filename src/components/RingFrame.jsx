import React from 'react';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
export function RingFrame({
  size = 160,
  thickness = 8,
  tone = 'ring',
  children,
  style,
  ...rest
}) {
  const bg = tone === 'ring' ? 'var(--gradient-ring)' : tone;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      background: bg,
      padding: thickness,
      flex: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      display: 'grid',
      placeItems: 'center',
      position: 'relative'
    }
  }, children));
}

