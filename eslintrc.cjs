const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'))

module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'plugin:react-hooks/recommended'],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'react/no-unescaped-entities': 'off',
    'react/no-children-prop': ['error', { allowFunctions: false }],
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-no-bind': 'off',
    'react/prop-types': 'off',
    'no-useless-constructor': 'off',
    'no-return-assig': 'off',
    'import/no-named-default': 'off',

    'arrow-body-style': ['error', 'as-needed'],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'no-shadow': 'off',
    'lines-between-class-members': 'off',
    'no-use-before-define': 'off',
    'max-classes-per-file': 'off', // 한 파일에 클래스를 5개 미만
    'no-console': 'error',
    'import/extensions': 'off',
    'import/no-duplicates': ['error'],
    'import/newline-after-import': 'off',
    'no-unused-vars': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'react/function-component-definition': ['error', { namedComponents: 'function-declaration' }],
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 'off',
    'spaced-comment': 'off',
    'react/self-closing-comp': 'off',
    'react/button-has-type': 'off',
    'react/jsx-boolean-value': 'off',
    'no-alert': 'off',
    'no-undef': 'off',
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'no-useless-return': ['error'],
    'prefer-template': ['error'],
    'prefer-destructuring': 'off',
    'react/no-danger': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'import/order': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'object-shorthand': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-unneeded-ternary': 'off',
    'no-param-reassign': 'off',
    'no-else-return': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'func-names': 'off',
    'prefer-arrow-callback': 'off',
    'react/no-array-index-key': 'off',
    'no-empty-pattern': 'off',
    'react/no-unstable-nested-components': 'off',
    'class-methods-use-this': 'off',
    'default-case': 'off',
    'no-duplicate-case': 'off',
    'one-var': 'off',
    'no-unsafe-optional-chaining': 'off',
    'prefer-const': 'off',
    'no-unused-expressions': 'off',
    'no-lone-blocks': 'off',
    'no-nested-ternary': 'off',
    'no-array-constructor': 'off',
    'jsx-a11y/no-redundant-roles': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'no-useless-rename': 'off',
    'react/no-unused-prop-types': ['error'],
    'react/jsx-fragments': ['error', 'syntax'],
    'vars-on-top': 'off',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'no-useless-concat': 'off',
    'no-return-await': ['error'],
    'no-underscore-dangle': 'off',
    'dot-notation': 'off',
    'no-useless-catch': 'off',
    'no-empty': 'error',
    'no-empty-function': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
  ],
}