import React from 'react';
import { RingFrame } from './RingFrame';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
export function PersonaCard({
  name,
  role,
  photo,
  subjects = [],
  quote,
  size = 132,
  tone = 'plain',
  style,
  ...rest
}) {
  const dark = tone === 'navy';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'flex-start',
      padding: 'var(--space-5)',
      borderRadius: 'var(--radius-lg)',
      background: dark ? 'var(--surface-brand)' : tone === 'teal' ? 'var(--surface-brand-soft)' : 'var(--surface-card)',
      border: 'var(--border-thin) solid var(--border-subtle)',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(RingFrame, {
    size: size,
    thickness: Math.max(4, Math.round(size / 20))
  }, photo && /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: '112%',
      height: '112%',
      objectFit: 'cover',
      objectPosition: '50% 12%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--text-d4)',
      color: dark ? 'var(--white)' : 'var(--text-heading)',
      lineHeight: 'var(--leading-snug)'
    }
  }, name), role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: dark ? 'var(--teal-400)' : 'var(--teal-700)',
      marginTop: 2
    }
  }, role), subjects.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 'var(--space-3)'
    }
  }, subjects.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      background: dark ? 'rgba(255,255,255,.12)' : 'var(--teal-100)',
      color: dark ? 'var(--teal-200)' : 'var(--teal-700)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)'
    }
  }, s))), quote && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontFamily: 'var(--font-script)',
      fontSize: '1.375rem',
      lineHeight: 1.3,
      color: dark ? 'var(--teal-200)' : 'var(--navy-700)'
    }
  }, quote)));
}

