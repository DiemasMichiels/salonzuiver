import React, { ReactElement, ReactNode } from 'react'
import * as styled from './styled'

type Props = {
  className?: string
  icon: ReactElement
  children: ReactNode
}

const Button = ({ className, icon, children }: Props) => {
  return (
    <styled.Button className={className}>
      <span>{children}</span>
      {icon}
    </styled.Button>
  )
}

export default Button
