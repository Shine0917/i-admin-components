import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('首页', module).add(
  'welcome',
  () => {
    return (
      <>
        <h1>欢迎来到 i-admin-components 基础组件库</h1>
        <h3>安装试试</h3>
        <code>npm install i-admin-components --save</code>
      </>
    );
  },
  // 将 withInfo 插件设置成disable
  { info: { disable: true } }
);
