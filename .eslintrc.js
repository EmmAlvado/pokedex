module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
        'prettier/react',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        allowImportExportEverywhere: true,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'flow'],
    rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-unknown-property': [2, { ignore: ['class'] }],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-double'],
        semi: ['error', 'always'],
        'eol-last': 2,
        camelcase: 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'no-console': [
            'warn',
            {
                allow: ['warn', 'error'],
            },
        ],
        'no-var': 'error',
        'prefer-const': 'error',
        "react/no-unescaped-entities": "off",
        "react/prop-types": "off",
        'prettier/prettier': [
            'error',
            { trailingComma: 'es5', singleQuote: true, tabWidth: 4 },
        ],
    },
};
