module.exports = {
  extends: 'eslint:recommended',
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 9,
  },
  rules: {

    // relaxed restrictions
    'no-mixed-requires': 0,
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'no-use-before-define': [2, 'nofunc'],
    'camelcase': [2, {'properties': 'never'}],
    'curly': 0,
    'eqeqeq': 0,
    'new-parens': 0,
    'quotes': [2, 'single', 'avoid-escape'],
    'semi': [2, 'never'],
    'strict': 0,

    // extra restrictions
    'no-empty-character-class': 2,
    'no-extra-parens': [2, 'functions'],
    'no-floating-decimal': 2,
    'no-lonely-if': 2,
    'no-self-compare': 2,
    'no-throw-literal': 2,
    'no-unused-vars': 2,

    // style
    'array-bracket-spacing': [2, 'never'],
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    'comma-dangle': [2, 'always-multiline'],
    'comma-style': [2, 'last'],
    'consistent-this': [2, 'self'],
    'object-curly-spacing': [2, 'never'],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'after'],
    'keyword-spacing': 2,
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'spaced-comment': [2, 'always'],
  },
}
