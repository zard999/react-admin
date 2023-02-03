/*
 * @Author: zyh
 * @Date: 2023-02-03 12:28:49
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 16:49:12
 * @FilePath: /vite-project/src/components/themeColors/index.tsx
 * @Description: themeColors
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { ConfigProvider, Space } from 'antd';
import { globalStore } from '@/stores';
import { observer } from 'mobx-react';
import { ThemeColors } from '@/config';
import { CheckOutlined } from '@ant-design/icons';

// 为主题提供统一的全局化配置
export const ThemeColorConfigProvider = observer(({ children }: { children: React.ReactNode }) => {
  const { themeConfig } = globalStore;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: themeConfig.themeColor
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
});

export const ThemeColorsSelect = observer(() => {
  const { themeConfig } = globalStore;
  return (
    <Space>
      {ThemeColors.map((color, index) => (
        <ColorBlockItem
          key={index}
          color={color}
          isActive={themeConfig.themeColor === color}
          onClick={() => {
            globalStore.setThemeConfig({ ...themeConfig, themeColor: color });
          }}
        />
      ))}
    </Space>
  );
});

interface ColorBlockItemParams {
  color: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  isActive?: boolean;
}

function ColorBlockItem({ color, isActive, onClick }: ColorBlockItemParams) {
  return (
    <div
      style={{
        cursor: 'pointer',
        borderRadius: 6,
        width: 26,
        height: 26,
        textAlign: 'center',
        marginRight: 0,
        lineHeight: '24px',
        overflow: 'hidden',
        backgroundColor: color
      }}
      color={color}
      onClick={onClick}
    >
      {isActive && <ColorItemActive />}
    </div>
  );
}

function ColorItemActive() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <CheckOutlined style={{ color: '#fff', fontWeight: 'bold' }} />
    </div>
  );
}
