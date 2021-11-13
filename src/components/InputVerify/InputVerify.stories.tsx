/*
 * @Author: your name
 * @Date: 2021-11-12 22:25:09
 * @LastEditTime: 2021-11-13 09:29:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /i-admin-components/src/components/InputVerify/InputVerify.stories.tsx
 */
import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import InputVerify from './InputVerify'

const WrappedInputVerify = () => {
  return (
    <div style={{ width: '400px' }}>
      <InputVerify placeholder="请输入四位验证码" sendCode={() => { }} onChange={action('changed')} />
    </div>
  )
}

storiesOf('验证码输入组件', module).add('InputVerify', WrappedInputVerify)