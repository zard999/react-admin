/*
 * @Author: zyh
 * @Date: 2023-02-02 10:03:29
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 15:54:38
 * @FilePath: /vite-project/src/layouts/components/footer/index.tsx
 * @Description: footer
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import './index.less';

const LayoutFooter = () => {
  return (
    <DefaultFooter
      className="site-footer"
      copyright={false}
      links={[
        {
          key: 'source-code',
          title: 'Source Code',
          href: 'https://github.com/zard999/fine-admin',
          blankTarget: true
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/zard999',
          blankTarget: true
        },
        {
          key: 'Preview',
          title: 'Preview',
          href: 'https://strivelen.github.io/zard999/',
          blankTarget: true
        }
      ]}
    />
  );
};

export default LayoutFooter;
