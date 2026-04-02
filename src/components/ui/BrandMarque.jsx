import Nike from '../../assets/marq_logo/Nike-removebg-preview.png';
import Adid from '../../assets/marq_logo/adid-removebg-preview.png';
import Gucc from '../../assets/marq_logo/guc-removebg-preview.png';
import Zara from '../../assets/marq_logo/zar-removebg-preview (1).png';
import App from '../../assets/marq_logo/app-removebg-preview.png';
import Chan from '../../assets/marq_logo/cha-removebg-preview.png';
import Orai from '../../assets/marq_logo/orai-removebg-preview.png';
import Sam from '../../assets/marq_logo/sam-removebg-preview.png';
import Pum from '../../assets/marq_logo/pum-removebg-preview.png';

export default function BrandMarquee() {


    const brands = [
        {
          name: "Nike",
          logo: Nike,
        },
        {
          name: "Adidas",
          logo: Adid,
        },
        {
          name: "Gucci",
          logo: Gucc,
        },
        {
          name: "Zara",
          logo: Zara,
        },
        {
          name: "Apple",
          logo: App,
        },
        {
          name: "Chanel",
          logo: Chan,
        },
        {
          name: "Oraimo",
          logo: Orai,
        },
        {
          name: "Samsung",
          logo: Sam,
        },
        {
          name: "Puma",
          logo: Pum,
        },
      ];
  
    return (
      <>
        <div className="bg-primary py-10 overflow-hidden border-y border-border">
          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee">
              
              {[...brands, ...brands].map((brand, i) => (
                <div key={i} className="mx-8 flex items-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-10 md:h-10 object-contain opacity-100 hover:opacity-50 transition"

                    />
                    </div>
              ))}

            </div>
          </div>
        </div>
      </>
    );
  }