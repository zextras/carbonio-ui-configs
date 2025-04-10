// SPDX-FileCopyrightText: 2025 Zextras <https://www.zextras.com>
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
		},
		'import/resolver': {
			typescript: true,
			node: true
		},
		'import/parsers': {
			"@typescript-eslint/parser": ['.ts', '.tsx']
		},
	},
	env: {
		browser: true,
		'jest/globals': true
	},
	plugins: [
		'@typescript-eslint/eslint-plugin',
		'eslint-plugin-react',
		'eslint-plugin-react-hooks',
		'eslint-plugin-jest',
		'eslint-plugin-jsx-a11y',
		'eslint-plugin-unused-imports',
		'eslint-plugin-jest-dom',
		'eslint-plugin-testing-library',
		'eslint-plugin-sonarjs'
	],
	extends: [
		// npm package: eslint
		'eslint:recommended',
		// npm package: eslint-config-airbnb-base
		'airbnb-base',
		// plugin name: eslint-plugin-import
		'plugin:import/recommended',
		'plugin:import/typescript',
		// plugin name: @typescript-eslint/eslint-plugin
		'plugin:@typescript-eslint/recommended',
		// plugin name: eslint-plugin-react
		'plugin:react/recommended',
		// plugin name: eslint-plugin-react-hooks
		'plugin:react-hooks/recommended',
		// plugin name: eslint-plugin-jsx-a11y
		'plugin:jsx-a11y/recommended',
		// npm package: eslint-config-prettier
		'prettier',
		// plugin name: eslint-plugin-sonarjs
		'plugin:sonarjs/recommended'
	],
	rules: {
		// eslint rules
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
		// in order to allow reassignment of specific param, override this rule using options props: true and ignorePropertyModificationsFor
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
		'no-shadow': 'off',
		'no-console': ['warn', { allow: ['error'] }],
		// @typescript-eslint/eslint-plugin
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/prefer-interface': 'off',
		// disabled in favor of unused-imports/no-unused-vars rule
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		// eslint-plugin-import
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
		// eslint-plugin-react-hooks
		'react-hooks/exhaustive-deps': 'error',
		'react-hooks/rules-of-hooks': 'error',
		// eslint-plugin-react
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
		// eslint-plugin-unused-imports
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
		]
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
			// enable eslint-plugin-testing-library rules or preset only for test files
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)', '**/tests/**/*.[jt]s?(x)'],
			extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
			rules: {
				'jest-dom/prefer-enabled-disabled': 'off',
				'testing-library/no-unnecessary-act': 'warn',
				'testing-library/prefer-user-event': 'warn',
				'import/no-extraneous-dependencies': 'off'
			}
		},
	]
};
