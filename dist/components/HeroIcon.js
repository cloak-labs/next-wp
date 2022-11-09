"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeroIcon;
require("core-js/modules/web.dom-collections.iterator.js");
var OutlineIcons = _interopRequireWildcard(require("@heroicons/react/24/outline"));
var SolidIcons = _interopRequireWildcard(require("@heroicons/react/24/solid"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Allows you to dynamically show a Hero Icon (https://heroicons.com/) rather than having to manually import each icon component. You pass in the icon name as a prop, using the name as it is shown on their website rather than the component name which is different (eg. "archive" == "ArchiveIcon" component) -- abstracts away that complexity for you.
function HeroIcon(_ref) {
  let {
    icon,
    className = 'w-6 h-6 text-gray-600',
    outline = true,
    onClick = null
  } = _ref;
  if (!icon) return /*#__PURE__*/React.createElement(React.Fragment, null);
  icon = icon.split('-').map(word => capitalize(word)).join('') + 'Icon'; // converts hero icon name to its component name; eg. 'dots-vertical' == 'DotsVerticalIcon'
  const TheIcon = outline ? OutlineIcons[icon] : SolidIcons[icon];
  if (TheIcon) return /*#__PURE__*/React.createElement(TheIcon, {
    className: className,
    "aria-hidden": "true",
    onClick: onClick
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null);
}
function capitalize(str) {
  let all_words = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  /** Function: capitalizes the first letter of a word, and optionally the first letter of each word in the string
  *   @param {string} str - The string to capitalize
  *   @param {boolean} all_words - Whether or not to capitalize each word in the string
  */
  str = all_words ? str.split(' ') : [str];
  return str.map(word => {
    const [first_letter, ...rest] = word;
    return first_letter.toUpperCase() + rest.join('');
  }).join(' ');
}