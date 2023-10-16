import React, { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  condition: boolean;
}

export function UiIf(props: IProps) {
  if (!props.condition) {
    return null;
  }

  return <React.Fragment>{props.children}</React.Fragment>;
}
