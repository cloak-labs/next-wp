"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Group;
var _Block = _interopRequireDefault(require("../Block"));
var _ConditionalWrapper = _interopRequireDefault(require("../components/ConditionalWrapper"));
var _Container = _interopRequireDefault(require("../components/Container"));
var _useBlockStyleBuilder = require("../hooks/useBlockStyleBuilder");
var _classNames = _interopRequireDefault(require("../utils/classNames"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Group(_ref) {
  var _block$data, _block$data2, _block$data2$innerBlo;
  let {
    block
  } = _ref;
  const {
    classes,
    styles
  } = (0, _useBlockStyleBuilder.useBlockStyleBuilder)(block.data);
  if (!(block !== null && block !== void 0 && (_block$data = block.data) !== null && _block$data !== void 0 && _block$data.innerBlocks)) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
  const {
    layout,
    align
  } = block.data.attrs;
  const numBlocks = block === null || block === void 0 ? void 0 : (_block$data2 = block.data) === null || _block$data2 === void 0 ? void 0 : (_block$data2$innerBlo = _block$data2.innerBlocks) === null || _block$data2$innerBlo === void 0 ? void 0 : _block$data2$innerBlo.length;
  const groupClasses = (0, _classNames.default)('flex gap-x-4 md:gap-x-6 flex-wrap', layout.type == 'flex' ? layout.flexWrap ? 'flex-row' : 'flex-col' : 'flex-col', numBlocks <= 2 ? 'sm:flex-nowrap' : numBlocks <= 3 ? 'md:flex-nowrap' : numBlocks <= 4 ? 'lg:flex-nowrap' : '');
  if (align != 'full') {
    var _block$data3, _block$data3$innerBlo;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      className: (0, _classNames.default)("relative"),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classNames.default)(groupClasses, classes),
        style: styles,
        children: block === null || block === void 0 ? void 0 : (_block$data3 = block.data) === null || _block$data3 === void 0 ? void 0 : (_block$data3$innerBlo = _block$data3.innerBlocks) === null || _block$data3$innerBlo === void 0 ? void 0 : _block$data3$innerBlo.map((innerBlock, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Block.default, {
          block: innerBlock,
          parentBlock: block,
          isNested: true,
          className: "min-w-[150px]"
        }, index))
      })
    });
  } else {
    var _block$data4, _block$data4$innerBlo;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classNames.default)(classes),
      style: styles,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
        className: "relative",
        innerClassName: groupClasses,
        children: block === null || block === void 0 ? void 0 : (_block$data4 = block.data) === null || _block$data4 === void 0 ? void 0 : (_block$data4$innerBlo = _block$data4.innerBlocks) === null || _block$data4$innerBlo === void 0 ? void 0 : _block$data4$innerBlo.map((innerBlock, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Block.default, {
          block: innerBlock,
          parentBlock: block,
          isNested: true,
          className: "min-w-[150px]"
        }, index))
      })
    });
  }
  // return (
  //     <ConditionalWrapper
  //         condition={align != 'full'}
  //         wrapper={(children) => <Container className="relative">{children}</Container>}
  //     >
  //         <div
  //             className={align != 'full' && groupClasses}
  //             style={styles}
  //         >
  //             <ConditionalWrapper
  //                 condition={align == 'full'}
  //                 wrapper={(children) => <Container className={classNames("relative", groupClasses)}>{children}</Container>}
  //             >
  //                 {block?.innerBlocks?.map((innerBlock, index) => <Block key={index} block={innerBlock} parentBlock={block} isNested={true} className="min-w-[150px]" /> )}
  //             </ConditionalWrapper>
  //         </div>
  //     </ConditionalWrapper>
  // )
}