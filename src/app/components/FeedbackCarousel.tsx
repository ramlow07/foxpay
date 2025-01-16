"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: string[]; // Array of image URLs
  options?: EmblaOptionsType;
};

const FeedbackCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((imageSrc, index) => (
            <div className="embla__slide" key={index}>
              <img
                src={imageSrc}
                alt={`Feedback ${index + 1}`}
                className="embla__slide__image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackCarousel;
