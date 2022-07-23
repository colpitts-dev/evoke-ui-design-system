import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { Heading } from '../Heading';
import { Text } from '../Text';

import "./CopyBlock.styles.css";

export interface CopyBlockProps extends HTMLAttributes<HTMLDivElement> {
  heading: string,
  content: string
}

/**
 * CopyBlock component
 */
export const CopyBlock: FC<CopyBlockProps> = ({heading, content, ...props}) => {
  return (
    <div className="CopyBlock" {...props}>
      <Heading level="h3" className="CopyBlock__Heading">{heading}</Heading><br/>
      <Text className="CopyBlock__Text">{content}</Text>
    </div>
  );
};
