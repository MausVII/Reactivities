import React from 'react'

interface Props {
    inverted?: boolean;
    content?: string;
}

const LoadingComponent = ({inverted = true, content = 'Loading...'}: Props) => {
  return (
    <div>{content}</div>
  )
}

export default LoadingComponent