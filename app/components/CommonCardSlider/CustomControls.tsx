import Image from 'next/image';
import arrowPrevIcon from '@/public/assets/icons/arrowPrev.svg?url';
import arrowNextIcon from '@/public/assets/icons/arrowNext.svg?url';
import styles from './style.module.scss'

type Props = {
  prefix: string;
  customControlsStyle?: Record<string, object>;
};

const CustomControls = ({ customControlsStyle, prefix }: Props) => {
  return (
    <>
      <Image
        id={`swiper-custom-controls${prefix}_prev`}
        className={styles.arrowPrev}
        width={48}
        height={48}
        src={arrowPrevIcon}
        alt="prev"
      />

      <Image
        id={`swiper-custom-controls${prefix}_next`}
        className={styles.arrowNext}
        width={48}
        height={48}
        src={arrowNextIcon}
        alt="next"
      />
    </>
  );  
};

export default CustomControls;
