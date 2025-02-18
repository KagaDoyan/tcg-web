import BannerSlider, { ImageData } from "../ui/banner_slider";
import image1 from "@/static/1.jpg";
import image2 from "@/static/2.jpg";
import image3 from "@/static/3.jpg";

const banner_data: ImageData[] = [
  { src: image1, href: null },
  { src: image2, href: null },
  { src: image3, href: null },
];

export function Featured() {
    return (
        <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-center">Featured</h2>
            <BannerSlider images={banner_data} />
        </div>
    );
}