import Image from 'next/image';

type Props = {
  title: string;
  icon?: string;
  variant?: 'h1' | 'h2' | 'h3';
};

const Title = ({ title, icon, variant }: Props) => {
  const Heading: React.ElementType = variant || 'h1';

  return (
    <Heading>
      {icon && (
        <Image width={25} height={25} src={icon} alt={title.toLowerCase()} />
      )}
      {title}
    </Heading>
  );
};

export default Title;
