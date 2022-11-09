"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Column;
var _Block = _interopRequireDefault(require("../Block"));
var _useBlockStyleBuilder = require("../hooks/useBlockStyleBuilder");
var _classNames = _interopRequireDefault(require("../utils/classNames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Column(_ref) {
  var _column$innerBlocks;
  let {
    column,
    width,
    index
  } = _ref;
  const {
    classes,
    styles
  } = (0, _useBlockStyleBuilder.useBlockStyleBuilder)(column);
  let colSpan = 6; // default to 50% if no column width is defined

  if (width) {
    // given a percentage width, we need to find the closest matching column width from our 12-column grid system (i.e. 50% == col-span-6, and 52% also == col-span-6)
    const gridColWidths = [8.333, 16.667, 25, 33.333, 41.667, 50, 58.333, 66.667, 75, 83.333, 91.667, 100];
    let lastDiff = 101;
    for (let i = 0; i < gridColWidths.length; i++) {
      let gridColWidth = gridColWidths[i];
      if (width == gridColWidth) {
        // if we find an exact match, that makes our life easy and we can break out of the loop
        colSpan = i + 1;
        break;
      }

      // otherwise, we search for the closest grid column match:
      let diff = Math.abs(gridColWidth - width);
      if (diff < lastDiff) colSpan = i + 1;else if (diff > lastDiff) break; // we're getting farther from the closest grid col width, so we know we already found the closest and can therefore break out of the loop
      lastDiff = diff;
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _classNames.default)('flex flex-col space-y-4', "col-span-".concat(colSpan), classes),
    style: styles
  }, column === null || column === void 0 ? void 0 : (_column$innerBlocks = column.innerBlocks) === null || _column$innerBlocks === void 0 ? void 0 : _column$innerBlocks.map((block, index) => /*#__PURE__*/React.createElement(_Block.default, {
    key: index,
    block: block,
    parentBlock: column,
    isNested: true
  })));
}