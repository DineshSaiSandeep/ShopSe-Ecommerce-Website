import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Image
        src="/banner.png"
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen"
      /> */}
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div>
              <Image
                src="/1.png"
                alt="banner1"
                width={2000}
                height={1000}
                className="w-screen"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <Image
                src="/2.png"
                alt="banner2"
                width={2000}
                height={1000}
                className="w-screen"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <Image
                src="/3.png"
                alt="banner3"
                width={2000}
                height={1000}
                className="w-screen"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Collections />
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";
