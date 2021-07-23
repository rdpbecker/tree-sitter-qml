// QML language grammar
// ====================
// Reference: http://code.qt.io/cgit/qt/qtdeclarative.git/tree/src/qml/parser/qqmljs.g?h=5.15

module.exports = grammar(require('tree-sitter-javascript/grammar'), {
    name: 'qml',

    conflicts: ($, previous) => previous.concat([

    ]),

    inline: ($, previous) => previous.concat([

    ]),

    rules: {

    }
});
