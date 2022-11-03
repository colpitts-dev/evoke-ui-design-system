import React, { FC, HTMLAttributes, ReactNode } from 'react'
import { Heading } from '../Heading'
import { Text } from '../Text'

export interface CopyBlockProps extends HTMLAttributes<HTMLDivElement> {
  headingLevel?: 1 | 2 | 3
  textSize?: 'sm' | 'base' | 'lg'
  title: string
  content: string
}

/**
 * CopyBlock component
 */
export const CopyBlock: FC<CopyBlockProps> = ({
  title,
  content,
  headingLevel = 3,
  textSize = 'base',
  ...props
}) => {
  return (
    <div className="CopyBlock" {...props}>
      <Heading level={`h${headingLevel}`} className="CopyBlock__Heading">
        {title}
      </Heading>
      <br />
      <Text className="CopyBlock__Text" size={textSize}>
        {content}
      </Text>
    </div>
  )
}
