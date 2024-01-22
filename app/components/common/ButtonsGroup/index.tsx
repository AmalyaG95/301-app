'use client';

import Button from '../Button';
import { TButton } from '../../../constants';
import styles from './style.module.scss';

type Props = {
  buttons: TButton[];
};

const ButtonsGroup = ({ buttons }: Props) => (
  <div className={styles.container}>
    {buttons.map(({ id, name, ...rest }) => (
      <Button key={id} {...rest}>
        {name}
      </Button>
    ))}
  </div>
);

export default ButtonsGroup;
