
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./tiptap-extension-resize-image.cjs.production.min.js')
} else {
  module.exports = require('./tiptap-extension-resize-image.cjs.development.js')
}
