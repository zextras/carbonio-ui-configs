// SPDX-FileCopyrightText: 2025 Zextras <https://www.zextras.com>
//
// SPDX-License-Identifier: AGPL-3.0-only

const baseConfig = require('./eslint-base');

module.exports = {
	...baseConfig,
	plugins: [
		...baseConfig.plugins,
		'eslint-plugin-prettier'
	],
	rules: {
		...baseConfig.rules,
		// eslint-plugin-prettier
		'prettier/prettier': 'error'
	}
};
