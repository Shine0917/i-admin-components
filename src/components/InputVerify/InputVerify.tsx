import React, { FC, useState } from 'react';
import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'
import classNames from 'classnames'

import './style.less'


export interface InputVerifyProps extends InputProps {
  sendCode: () => void;
  countDown?: number;
  initCodeText?: string;
  reCodeText?: string;
  codeClassname?: string;

}
/**
 * 带验证码功能的输入组件，适用于要发送验证码的场景。
 *
 * ### 如何引用
 *
 * ~~~javascript
 * import { InputVerfiy } from 'ii-admin-base'
 * ~~~
 */
export const InputVerify: FC<InputVerifyProps> = (props) => {
  const { sendCode, countDown, initCodeText, reCodeText, codeClassname, ...restProps } = props
  const [codeText, setCodeText] = useState(initCodeText);
  const [codeStatus, setCodeStatus] = useState(false)

  const handleCountDown = (timer: ReturnType<typeof setTimeout> | null, count: number) => {
    if (timer) clearTimeout(timer)
    if (count <= 0) {
      setCodeText(reCodeText)
      setCodeStatus(false)

    } else {
      setCodeText(`${count} s`)
      const newTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
        handleCountDown(newTimer, count - 1)
      }, 1000)
    }
  }

  const handleCodeClick = () => {
    if (codeStatus) return;
    sendCode && sendCode()
    setCodeStatus(true)
    handleCountDown(null, countDown as number)
  }

  const codeCls = classNames('i-verify-button', codeClassname, { 'i-verify-button-disable': codeStatus })
  return (
    <Input {...restProps} suffix={
      <span className={codeCls} onClick={handleCodeClick}>{codeText}</span>
    }
    >
    </Input>
  )


}
InputVerify.defaultProps = {
  countDown: 60,
  initCodeText: '发送验证码',
  reCodeText: '重新发送'
}
export default InputVerify;
