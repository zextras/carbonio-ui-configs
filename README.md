<!--
SPDX-FileCopyrightText: 2023 Zextras <https://www.zextras.com>

SPDX-License-Identifier: AGPL-3.0-only
-->
<div align="center">
  <h1>Carbonio UI Configs </h1>
</div>

<div align="center">

This is the configurations set used by Zextras Carbonio ui projects

[![Contributors][contributors-badge]][contributors]
[![Activity][activity-badge]][activity]
[![License][license-badge]](COPYING)
[![Project][project-badge]][project]
[![Twitter][twitter-badge]][twitter]

</div>

## Installation

```
npm install --save-dev @zextras/carbonio-ui-configs
```

## Setup

To use the configuration set, you need to configure eslint, prettier and typescript to
extend the rules defined in this package.

### Eslint

The eslint configuration to extends is included in `rules/eslint.js`, extends your configuration
file as the following

```js
// .eslintrc.js

module.exports = {
  extends: ['./node_modules/@zextras/carbonio-ui-configs/rules/eslint.js']
};
```
In order to make eslint recognize the plugins configured within this package, an additional
parameter is required when running eslint command: `--resolve-plugins-relative-to node_modules/@zextras/carbonio-ui-configs`

You can configure a script inside the package.json and then run `npm run lint` to easily run eslint with the required configuration:
```json lines
// package.json
{
    "scripts": {
        "lint": "eslint --ext .js,.jsx,.ts,.tsx --resolve-plugins-relative-to node_modules/@zextras/carbonio-ui-configs src"
        // other scripts
    }
}
```

### Prettier
Prettier needs to be configured to extend the rules defined in `rules/prettier.js`

```js
// .prettierrc.js
module.exports = {
  ...require('@zextras/carbonio-ui-configs/rules/prettier')
}
```

### Typescript
Typescript configuration is located in `rules/typescript.json` and need to be extended too.

```json lines
// tsconfig.json
{
  "extends": "@zextras/carbonio-ui-configs/rules/typescript.json"
}
```


## License
Carbonio UI Configs - Configurations set for Zextras Carbonio UI projects

Copyright (C) 2022 Zextras <https://www.zextras.com>

This program is free software: you can redistribute it and/or modify it
under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, version 3 only of the License.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License
for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see [Licenses - GNU Project - Free
Software Foundation](https://www.gnu.org/licenses/licenses.html
"https://www.gnu.org/licenses/licenses.html")

See [COPYING](COPYING) file for the project license details

See [THIRDPARTIES](THIRDPARTIES) file for other licenses details

### Copyright notice

All non-software material (such as, for example, names, images, logos, sounds) is owned by Zextras s.r.l. and is licensed under [CC-BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/).

Where not specified, all source files owned by Zextras s.r.l. are licensed under AGPL-3.0-only

[contributors-badge]: https://img.shields.io/github/contributors/zextras/carbonio-ui-configs "Contributors"
[contributors]: https://github.com/zextras/carbonio-ui-configs/graphs/contributors "Contributors"
[activity-badge]: https://img.shields.io/github/commit-activity/m/zextras/carbonio-ui-configs "Activity"
[activity]: https://github.com/zextras/carbonio-ui-configs/pulse "Activity"
[license-badge]: https://img.shields.io/badge/license-AGPL%203-green "License AGPL 3"
[project-badge]: https://img.shields.io/badge/project-carbonio-informational "Project Carbonio"
[project]: https://www.zextras.com/carbonio/ "Project Carbonio"
[twitter-badge]: https://img.shields.io/twitter/follow/zextras?style=social&logo=twitter "Follow on Twitter"
[twitter]: https://twitter.com/intent/follow?screen_name=zextras "Follow Zextras on Twitter"

