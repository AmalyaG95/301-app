import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import CustomControls from './CustomControls';

type Props = {
  slides: any[];
  sliderPrefix: string;
  customControlsStyle?: Record<string, object>;
  slideComponent: (slide: any) => React.JSX.Element;
};

const CommonCardSlider = ({
  slides,
  sliderPrefix,
  customControlsStyle,
  slideComponent: SlideComponent,
}: Props) => {
  const prefix = sliderPrefix ? `-${sliderPrefix}` : '';

  return (
    <>
      <Swiper
        navigation={{
          nextEl: `#swiper-custom-controls${prefix}_next`,
          prevEl: `#swiper-custom-controls${prefix}_prev`,
        }}
        modules={[Navigation]}
        loop
        spaceBetween={24}
        grabCursor
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <SlideComponent {...slide} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <CustomControls
        customControlsStyle={customControlsStyle}
        prefix={prefix}
      />
    </>
  );
};

export default CommonCardSlider;
