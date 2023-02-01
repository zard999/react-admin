/*
 * @Author: zyh
 * @Date: 2023-01-31 21:24:03
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-01 16:28:26
 * @FilePath: /vite-project/lint-staged.config.js
 * @Description: lint-staged 配置文件
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.{scss,less,styl}': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write']
};
