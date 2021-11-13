/*
 * @Author: your name
 * @Date: 2021-11-12 18:14:55
 * @LastEditTime: 2021-11-12 18:17:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /i-admin-components/.storybook/decorators/WrapperDecorator/index.tsx
 */
import React from 'react';
const wrapperStyle:React.CSSProperties = {
  padding: '20px 40px'
}

const WrapperDecorator = (storyFn) => <div style={wrapperStyle}>{storyFn()}</div>;

export default WrapperDecorator