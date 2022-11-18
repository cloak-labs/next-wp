"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var OutlineIcons = require("@heroicons/react/24/outline");
var SolidIcons = require("@heroicons/react/24/solid");
// Allows you to dynamically show a Hero Icon (https://heroicons.com/) rather than having to manually import each icon component. You pass in the icon name as a prop, using the name as it is shown on their website rather than the component name which is different (eg. "archive" == "ArchiveIcon" component) -- abstracts away that complexity for you.
function HeroIcon(_a) {
    var icon = _a.icon, _b = _a.className, className = _b === void 0 ? 'w-6 h-6 text-gray-600' : _b, _c = _a.outline, outline = _c === void 0 ? true : _c, _d = _a.onClick, onClick = _d === void 0 ? null : _d;
    if (!icon)
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    icon = icon.split('-').map(function (word) { return capitalize(word); }).join('') + 'Icon'; // converts hero icon name to its component name; eg. 'dots-vertical' == 'DotsVerticalIcon'
    var TheIcon = outline ? OutlineIcons[icon] : SolidIcons[icon];
    if (TheIcon)
        return (0, jsx_runtime_1.jsx)(TheIcon, { className: className, "aria-hidden": "true", onClick: onClick });
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
}
exports.default = HeroIcon;
function capitalize(str, all_words) {
    if (all_words === void 0) { all_words = false; }
    /** Function: capitalizes the first letter of a word, and optionally the first letter of each word in the string
    *   @param {string} str - The string to capitalize
    *   @param {boolean} all_words - Whether or not to capitalize each word in the string
    */
    str = all_words ? str.split(' ') : [str];
    return str.map(function (word) {
        var first_letter = word[0], rest = word.slice(1);
        return first_letter.toUpperCase() + rest.join('');
    }).join(' ');
}
