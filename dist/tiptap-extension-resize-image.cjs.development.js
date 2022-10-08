'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Image = _interopDefault(require('@tiptap/extension-image'));

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var CustomImage = /*#__PURE__*/Image.extend({
  name: 'CustomImage',
  addAttributes: function addAttributes() {
    var _this$parent;

    return _extends({}, (_this$parent = this.parent) == null ? void 0 : _this$parent.call(this), {
      src: {
        "default": '',
        renderHTML: function renderHTML(attributes) {
          return {
            src: attributes.src
          };
        }
      },
      width: {
        "default": null
      },
      height: {
        "default": null
      },
      "class": {
        "default": null
      },
      isDraggable: {
        "default": true,
        renderHTML: function renderHTML() {// return {};
        }
      }
    });
  },
  addNodeView: function addNodeView() {
    return function () {
      var container = document.createElement('div');
      var content = document.createElement('div');
      container.append(content);
      return {
        dom: container,
        contentDOM: content
      };
    };
  }
});

exports.default = CustomImage;
//# sourceMappingURL=tiptap-extension-resize-image.cjs.development.js.map
