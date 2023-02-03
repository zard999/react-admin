/*
 * @Author: zyh
 * @Date: 2023-02-03 12:24:57
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 16:55:48
 * @FilePath: /vite-project/src/components/localSetting/index.tsx
 * @Description: 本地设置
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { useState } from 'react';
import { Tooltip, Drawer, Row, Col, Divider, Button } from 'antd';
import { SettingOutlined, FireOutlined } from '@ant-design/icons';
import type { DrawerProps, ButtonProps } from 'antd';
import { DarkModeSwitch, WeakModeSwitch, GrayModeSwitch } from '../themeModeSwitch';
import { ThemeColorsSelect } from '../themeColors';
import './index.less';

export default function LocalSettingsHeaderButton() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <LocalSettingsBtn onClick={() => setOpen(true)} />
      <LocalSettingsDrawer open={isOpen} onClose={() => setOpen(false)} />
    </>
  );
}

function LocalSettingsBtn({ onClick }: ButtonProps) {
  return (
    <Tooltip placement="bottomRight" title="本地设置" arrowPointAtCenter>
      <Button
        shape="circle"
        block
        style={{ border: 'none', backgroundColor: 'transparent', fontSize: 14 }}
        icon={<SettingOutlined />}
        onClick={onClick}
      />
    </Tooltip>
  );
}

function LocalSettingsDrawer(props: DrawerProps) {
  return (
    <Drawer title="系统本地设置" placement="right" {...props}>
      <Row align="top" justify="center">
        <Col span={24}>
          <Divider className="divider">
            <FireOutlined />
            整体风格
          </Divider>
        </Col>
        <Col span={24}>
          <Row justify="space-between" className="currentTheme">
            <Col>
              <span>暗黑模式</span>
            </Col>
            <Col>
              <DarkModeSwitch />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify="space-between" className="currentTheme">
            <Col>
              <span>灰色模式</span>
            </Col>
            <Col>
              <GrayModeSwitch />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify="space-between" className="currentTheme">
            <Col>
              <span>色弱模式</span>
            </Col>
            <Col>
              <WeakModeSwitch />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Divider className="divider">
            <FireOutlined />
            主题色
          </Divider>
        </Col>
        <Col>
          <ThemeColorsSelect />
        </Col>
      </Row>
    </Drawer>
  );
}
