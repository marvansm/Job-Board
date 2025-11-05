import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white mt-16">
      <div className="container mx-auto max-w-[1200px] py-[13px] grid grid-cols-12 gap-34">
        <div className="col-span-12 md:col-span-2 text-[14px]">
          <h3 className="font-bold mb-4">Navigation</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Home</li>
            <li>About Us</li>
            <li>Categories</li>
            <li>Shop</li>
            <li>Articles</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-2 text-[14px]">
          <h3 className="font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Sneakers</li>
            <li>Boots</li>
            <li>Formal</li>
            <li>Running</li>
            <li>Oxford</li>
            <li>Sports Shoe</li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-2 text-[14px]">
          <h3 className="font-bold mb-4">Utility Pages</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Style Guide</li>
            <li>Licences</li>
            <li>Changelog</li>
            <li>Password Protected</li>
            <li>404 page</li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-4 text-[14px]  ">
          <h3 className="font-bold mb-4">Our Locations</h3>
          <div className="text-gray-700 flex flex-col md:flex-row gap-20">
            <div className="space-y-2">
              <p>
                <strong>NJ Store Location</strong>
              </p>
              <p>
                56757 Dream Avenue, <br /> Garden City, 234564 <br />
                New Jersey, USA
              </p>

              <p>snikei@gmail.com</p>
              <p>(345) 123 456 5368</p>
            </div>

            <div className="space-y-2">
              <p>
                <strong>NY Store Location</strong>
              </p>
              <p>
                12273 Dream Avenue, <br /> Bronx, 123456 <br />
                New York, USA
              </p>

              <p>snikei@gmail.com</p>
              <p>(313) 123 456 8888</p>
            </div>
          </div>

          <div className="flex gap-3 mt-4 text-gray-700">
            <Facebook size={20} className="cursor-pointer" />
            <Instagram size={20} className="cursor-pointer" />
            <Linkedin size={20} className="cursor-pointer" />
            <Youtube size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 py-4 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-center md:justify-between items-center gap-2">
        <p>
          Design by{" "}
          <a href="#" className="underline">
            Meta Flow
          </a>{" "}
          | Powered by{" "}
          <a href="#" className="underline">
            Webflow
          </a>
        </p>
        <p>Copyright @Snikei. All Rights Reserved</p>
        <p>
          <a href="#" className="underline mx-2">
            Privacy Policy
          </a>{" "}
          |
          <a href="#" className="underline mx-2">
            Terms and Conditions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
