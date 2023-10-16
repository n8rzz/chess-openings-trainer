import { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface IProps extends PropsWithChildren {
  classNames?: string;
  onClick: () => void;
}

export function UiButton(props: IProps) {
  return (
    <button
      className={clsx('p-2', props.classNames)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
