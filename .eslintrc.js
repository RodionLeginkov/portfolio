const possibleErrorsRules = {
  'for-direction': 'off',
  'no-await-in-loop': ['error'],
  'no-console': ['warn'],
  'no-constant-condition': ['error', { checkLoops: false }],
  'no-extra-semi': ['error'],
  'no-promise-executor-return': ['error'],
  'no-template-curly-in-string': ['error'],
  'no-unreachable-loop': ['error'],
  'no-unsafe-optional-chaining': ['error'],
};

const bestPracticesRules = {
  'array-callback-return': ['error'],
  'class-methods-use-this': ['error'],
  'consistent-return': ['error'],
  curly: ['error', 'multi-line'],
  'default-case-last': ['error'],
  'default-param-last': ['error'],
  'dot-location': ['error', 'property'],
  'dot-notation': ['error'],
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],
  'no-caller': ['error'],
  'no-constructor-return': ['error'],
  'no-else-return': ['error'],
  'no-empty-function': ['warn'],
  'no-eval': ['error'],
  'no-extend-native': ['error'],
  'no-extra-bind': ['error'],
  'no-floating-decimal': ['error'],
  'no-global-assign': ['error'],
  'no-implied-eval': ['error'],
  'no-invalid-this': ['error'],
  'no-labels': ['error'],
  'no-lone-blocks': ['error'],
  'no-multi-spaces': ['error'],
  'no-new-func': ['error'],
  'no-new-wrappers': ['error'],
  'no-proto': ['error'],
  'no-redeclare': ['error'],
  'no-restricted-properties': ['error'],
  'no-return-assign': ['error'],
  'no-sequences': ['error'],
  'no-throw-literal': ['error'],
  'no-unused-expressions': ['error'],
  'no-useless-call': ['error'],
  'no-useless-concat': ['error'],
  'no-useless-return': ['error'],
  'no-void': ['error'],
  'prefer-promise-reject-errors': ['error'],
  'require-await': ['error'],
  'wrap-iife': ['error', 'any'],
  yoda: ['error', 'never', { exceptRange: true }],
};

const variablesRules = {
  'init-declarations': ['error', 'always'],
  'no-restricted-globals': ['error'],
  'no-shadow': ['error'],
  'no-undefined': ['error'],
  'no-unused-vars': ['error'],
  'no-use-before-define': ['error'],
};

const suggestionsRules = {
  'array-bracket-newline': ['error', 'consistent'],
  'array-bracket-spacing': ['error', 'never'],
  'array-element-newline': ['error', 'consistent'],
  'block-spacing': ['error', 'always'],
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    },
  ],
  'comma-spacing': ['error'],
  'comma-style': ['error'],
  'computed-property-spacing': ['error', 'never'],
  'consistent-this': ['error', 'self'],
  'eol-last': ['error', 'always'],
  'func-call-spacing': ['error', 'never'],
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  'function-call-argument-newline': ['error', 'consistent'],
  'function-paren-newline': ['error', 'consistent'],
  'implicit-arrow-linebreak': ['error', 'beside'],
  indent: [
    'error',
    2,
    {
      ignoredNodes: ['TemplateLiteral *', 'TSTypeParameterInstantiation'],
      SwitchCase: 1,
    },
  ],
  'key-spacing': ['error'],
  'keyword-spacing': ['error'],
  'line-comment-position': ['error', 'above'],
  'linebreak-style': ['error', process.env.NODE_ENV === 'production' ? "unix" : "windows"],
  'lines-between-class-members': [
    'error',
    'always',
    { exceptAfterSingleLine: true },
  ],
  'max-len': ['error', { code: 155, ignoreComments: true }],
  'multiline-ternary': ['error', 'always-multiline'],
  'new-parens': ['error', 'always'],
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
  'no-array-constructor': ['error'],
  'no-bitwise': ['error'],
  'no-continue': ['error'],
  'no-lonely-if': ['error'],
  'no-mixed-operators': ['error'],
  'no-multi-assign': ['error'],
  'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
  'no-nested-ternary': ['error'],
  'no-new-object': ['error'],
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  'no-tabs': ['error'],
  'no-trailing-spaces': ['error'],
  'no-unneeded-ternary': ['error'],
  'no-whitespace-before-property': ['error'],
  'nonblock-statement-body-position': ['error', 'beside'],
  'object-curly-newline': [
    'error',
    {
      ObjectExpression: { minProperties: 6, consistent: true, multiline: true },
      ObjectPattern: { minProperties: 6, consistent: true, multiline: true },
      ExportDeclaration: {
        minProperties: 6,
        consistent: true,
        multiline: true,
      },
    },
  ],
  'object-curly-spacing': ['error', 'always'],
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  'one-var-declaration-per-line': ['error', 'always'],
  'operator-assignment': ['error', 'always'],
  'operator-linebreak': ['error', 'before'],
  'padded-blocks': ['error', 'never'],
  'prefer-exponentiation-operator': ['error'],
  'prefer-object-spread': ['error'],
  'quote-props': ['error', 'as-needed'],
  quotes: ['error', 'single', { avoidEscape: true }],
  semi: ['error', 'always'],
  'semi-spacing': ['error'],
  'semi-style': ['error'],
  'space-before-blocks': ['error'],
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': ['error'],
  'space-unary-ops': ['error'],
  'spaced-comment': ['error'],
  'switch-colon-spacing': ['error'],
  'template-tag-spacing': ['error', 'never'],
  'unicode-bom': ['error', 'never'],
  'wrap-regex': ['error'],
};

const ES6Rules = {
  'arrow-parens': ['error', 'always'],
  'arrow-spacing': ['error'],
  'no-dupe-class-members': ['error'],
  'no-duplicate-imports': ['error'],
  'no-useless-computed-key': ['error'],
  'no-useless-constructor': ['error'],
  'no-useless-rename': ['error'],
  'no-var': ['error'],
  'object-shorthand': ['error', 'always'],
  'prefer-arrow-callback': ['error'],
  'prefer-const': ['error'],
  'prefer-destructuring': [
    'error',
    {
      AssignmentExpression: {
        array: true,
        object: false,
      },
      VariableDeclarator: {
        array: true,
        object: true,
      },
    },
  ],
  'prefer-numeric-literals': ['error'],
  'prefer-rest-params': ['error'],
  'prefer-spread': ['error'],
  'prefer-template': ['error'],
  'rest-spread-spacing': ['error', 'never'],
  'template-curly-spacing': ['error', 'never'],
};

const reactRules = {
  'react/prop-types': 'off',
  'react-hooks/exhaustive-deps': 'off',
  // In React it will ruin readability of components
  'no-use-before-define': 'off',
  'react/jsx-max-props-per-line': [
    'error',
    { maximum: { single: 3, multi: 1 } },
  ],
  'react/display-name': 'off',
  'react/function-component-definition': [
    2,
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
};

const tsRules = {
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/member-delimiter-style': ['error'],
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/type-annotation-spacing': ['error'],
  '@typescript-eslint/prefer-optional-chain': ['error'],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'default',
      format: ['camelCase', 'snake_case', 'UPPER_CASE', 'PascalCase'],
      leadingUnderscore: 'allow',
      filter: { match: false, regex: '_WORKAROUND$' },
    },
    { selector: 'typeLike', format: ['PascalCase'] },
  ],
};

const tsPluginExtendedRules = [
  'brace-style',
  'comma-dangle',
  'comma-spacing',
  'default-param-last',
  'dot-notation',
  'func-call-spacing',
  'indent',
  'init-declarations',
  'keyword-spacing',
  'lines-between-class-members',
  'no-array-constructor',
  'no-dupe-class-members',
  'no-duplicate-imports',
  'no-empty-function',
  'no-extra-parens',
  'no-extra-semi',
  'no-implied-eval',
  'no-invalid-this',
  'no-loop-func',
  'no-loss-of-precision',
  'no-magic-numbers',
  'no-redeclare',
  'no-shadow',
  'no-throw-literal',
  'no-unused-expressions',
  'no-unused-vars',
  'no-use-before-define',
  'no-useless-constructor',
  'object-curly-spacing',
  'padding-line-between-statements',
  'quotes',
  'return-await',
  'semi',
  'space-before-function-paren',
  'space-infix-ops',
  'require-await',
];

const applyTsPluginExtendedRules = (rules) => {
  tsPluginExtendedRules
    .filter((ruleName) => rules[ruleName])
    .forEach((ruleName) => {
      rules[`@typescript-eslint/${ruleName}`] = rules[ruleName];
      rules[ruleName] = 'off';
    });

  return rules;
};

const changedEslintRecommendedRules = {
  'for-direction': 'off',
  'no-constant-condition': ['error', { checkLoops: false }],
};

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: applyTsPluginExtendedRules({
    ...changedEslintRecommendedRules,
    ...possibleErrorsRules,
    ...bestPracticesRules,
    ...variablesRules,
    ...suggestionsRules,
    ...ES6Rules,
    ...tsRules,
    ...reactRules,
    'import/extensions': 'off',
  }),
  parser: '@typescript-eslint/parser',
  "plugins": [
    "@typescript-eslint"
  ],
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 12,
    "project": ["**/tsconfig.json"],
    sourceType: "module",
  },
  globals: {
    window: true,
    document: true,
    navigator: true,
    MediaStream: true,
    localStorage: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
