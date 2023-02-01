// SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
//
// SPDX-License-Identifier: AGPL-3.0-only

module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: process.cwd()
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	env: {
		browser: true,
		'jest/globals': true
	},
	plugins: [
		'@typescript-eslint/eslint-plugin',
		'react',
		'react-hooks',
		'jest',
		'jsx-a11y',
		'prettier',
		'unused-imports',
		'jest-dom',
		'testing-library'
	],
	extends: [
		'eslint:recommended',
		'airbnb-base',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier'
	],
	rules: {
		// Vanilla rules
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],
		'comma-dangle': 'off',
		'implicit-arrow-linebreak': 'off',
		'max-len': [
			'error',
			{
				code: 120,
				ignoreComments: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true
			}
		],
		'no-extra-semi': 'off',
		// in order to allow reassignment of specific param, override this rule using ignorePropertyModificationsFor option
		'no-param-reassign': 'error',
		'no-tabs': 'off',
		'no-underscore-dangle': 'off',
		'no-unused-expressions': [
			'warn',
			{
				allowShortCircuit: true,
				allowTernary: true
			}
		],
		'no-use-before-define': 'off',
		semi: ['error', 'always'],
		'prefer-arrow-callback': 'off',
		// @typescript-eslint
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/prefer-interface': 'off',
		// import
		'import/export': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never'
			}
		],
		'import/first': 'off',
		'import/named': 'off',
		'import/no-extraneous-dependencies': 'warn',
		'import/prefer-default-export': 'off',
		// prettier
		'prettier/prettier': 'error',
		// react-hooks
		'react-hooks/exhaustive-deps': 'error',
		'react-hooks/rules-of-hooks': 'error',
		// react
		'react/jsx-boolean-value': 1,
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'react/prop-types': 'off',
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.jsx', '.tsx']
			}
		],
		'import/order': [
			'error',
			{
				groups: [['builtin', 'external']],
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before'
					}
				],
				pathGroupsExcludedImportTypes: ['react'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true
				}
			}
		],
		'@typescript-eslint/no-unused-vars': 'warn',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
		],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'no-console': ['warn', { allow: ['error'] }]
	},
	overrides: [
		{
			// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
			// enable the rule specifically for TypeScript files
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': ['error'],
				'@typescript-eslint/explicit-module-boundary-types': ['error']
			}
		},
		{
			files: ['sdk/**/*'],
			rules: {
				'@typescript-eslint/no-var-requires': 0
			}
		},
		{
			// enable eslint-plugin-testing-library rules or preset only for test files
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
			rules: {
				'jest-dom/prefer-enabled-disabled': 'off',
				'testing-library/no-unnecessary-act': 'warn',
				'testing-library/no-global-regexp-flag-in-query': 'error',
				'testing-library/prefer-user-event': 'warn',
				'import/no-extraneous-dependencies': 'off'
			}
		},
	]
};
