/*
 * @Author: zyh
 * @Date: 2023-02-03 12:34:09
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 17:18:39
 * @FilePath: /vite-project/src/components/themeModeSwitch/index.tsx
 * @Description: 主题模式切换
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import React, { useEffect } from 'react';
import { Switch, ConfigProvider, theme } from 'antd';
import { observer } from 'mobx-react';
import { globalStore } from '@/stores';
const { darkAlgorithm } = theme;

// 暗黑模式切换
export const DarkModeSwitch = observer(() => {
  const { themeConfig } = globalStore;
  return (
    <Switch
      // style={{ verticalAlign: 'unset' }}
      checked={themeConfig.isDarkMode}
      checkedChildren="🌜"
      unCheckedChildren="🌞"
      onChange={checked =>
        globalStore.setThemeConfig({ ...themeConfig, isGrayMode: false, isWeakMode: false, isDarkMode: checked })
      }
    />
  );
});

// 色弱模式切换
export const WeakModeSwitch = observer(() => {
  const { themeConfig } = globalStore;
  return (
    <Switch
      checked={themeConfig.isWeakMode}
      onChange={checked =>
        globalStore.setThemeConfig({ ...themeConfig, isGrayMode: false, isDarkMode: false, isWeakMode: checked })
      }
    />
  );
});

// 灰色模式切换
export const GrayModeSwitch = observer(() => {
  const { themeConfig } = globalStore;
  return (
    <Switch
      checked={themeConfig.isGrayMode}
      onChange={checked =>
        globalStore.setThemeConfig({ ...themeConfig, isDarkMode: false, isWeakMode: false, isGrayMode: checked })
      }
    />
  );
});

export const DarkModeConfigProvider = observer(({ children }: { children: React.ReactNode }) => {
  const { themeConfig } = globalStore;
  useEffect(() => {
    document.body.className = themeConfig.isDarkMode ? 'dark' : '';
  }, [themeConfig.isDarkMode]);
  return (
    <ConfigProvider
      theme={{
        algorithm: themeConfig.isDarkMode ? [darkAlgorithm] : undefined
      }}
    >
      {children}
    </ConfigProvider>
  );
});
