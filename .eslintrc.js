module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'import'
    ],
    rules: {
        // TypeScript specific rules
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],

        // React specific rules
        'react/prop-types': 'off', // Since we're using TypeScript
        'react/react-in-jsx-scope': 'off', // Not needed in React 17+
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // Import rules
        'import/no-unresolved': 'error',
        'import/named': 'error',
        'import/default': 'error',
        'import/namespace': 'error',
        'import/order': ['error', {
            'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always',
            'alphabetize': { 'order': 'asc', 'caseInsensitive': true }
        }],

        // General rules
        'no-console': 'warn',
        'no-debugger': 'warn',
        'eqeqeq': ['error', 'always'],
        'curly': ['error', 'all'],
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
};