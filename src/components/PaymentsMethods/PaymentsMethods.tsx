"use client";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { CtaDark } from "../CtaDark";
import { dataPaymentMethods } from "./PaymentMethods.data";

export function PaymentsMethods() {
  return (
    <div className="relative py-20 md:py-50" id="servicios">

     <h1 className="text-5xl font-semibold  degradedBlue bg-blueLight text-center mb-40 mt-8">
          Metodos de pago
        </h1>
    
      <BackgroundRadialRight />
      <div className="relative w-full overflow-hidden">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 8,
              spaceBetween: 15,
            },
          }}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          loop={true}
          speed={2000}
        >
          <div className="absolute flex">
            {dataPaymentMethods.map(({ id, image }) => (
              <SwiperSlide
                key={id}
                className="flex items-center slider-horizontal"
              >
                <Image
                  src={`/assets/${image}`}
                  alt="Payment"
                  width="70"
                  height="70"
                  className="h-[60px] w-[120px] object-contain"
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      <CtaDark />
    </div>
  );
}
