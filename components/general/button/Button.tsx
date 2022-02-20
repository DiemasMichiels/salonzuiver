import React, { ReactElement, ReactNode } from 'react'
import * as styled from './styled'

type Props = {
  className?: string
  icon: ReactElement
  children: ReactNode
  onClick: () => void
}

const Button = ({ className, icon, children, onClick }: Props) => {
  return (
    <styled.Button className={className} onClick={onClick}>
      <span>{children}</span>
      {icon}
    </styled.Button>
  )
}

export default Button
