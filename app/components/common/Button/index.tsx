import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import styles from './style.module.scss';
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
  weight: ['400', '700', '600', '500', '900'],
  subsets: ['latin'],
});

type TButtonElement = React.ElementType<LinkProps> | React.ElementType;

export type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  style?: Record<string, string>;
};

const Button = ({ href, onClick, children, style = {} }: ButtonProps) => {
  const ButtonElement: TButtonElement = !!href ? Link : 'button';

  return (
    <ButtonElement
      href={href}
      className={classNames(styles.base, notoSans.className)}
      onClick={onClick}
      style={style}
    >
      {children}
    </ButtonElement>
  );
};

export default Button;
