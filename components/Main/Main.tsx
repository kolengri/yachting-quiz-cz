import { FC } from 'react';

import classnames from 'classnames';

type OuterProps = JSX.IntrinsicElements['div'];

export type MainProps = OuterProps;

export const Main: FC<MainProps> = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={classnames('main', className)}
      data-testid="Main"
      {...otherProps}
    >
      {children}
    </div>
  );
};
