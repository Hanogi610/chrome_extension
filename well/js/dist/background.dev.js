"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getCurrentTab() {
  var queryOptions, _ref, _ref2, tab;

  return regeneratorRuntime.async(function getCurrentTab$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          queryOptions = {
            active: true,
            currentWindow: true
          };
          _context.next = 3;
          return regeneratorRuntime.awrap(chrome.tabs.query(queryOptions));

        case 3:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 1);
          tab = _ref2[0];
          return _context.abrupt("return", tab);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}