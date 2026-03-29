import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  // const footerSections = [
  //   {
  //     title: 'Sadhguru',
  //     links: ['Man', 'Mystic', 'Mission', 'Books', 'Quotes'],
  //   },
  //   {
  //     title: 'Explore',
  //     links: ['Wisdom', 'Yoga & Meditation', 'Events', 'Centers', 'Health'],
  //   },
  //   {
  //     title: 'Connect',
  //     links: ['Newsletter', 'Contact', 'Volunteer', 'Donate', 'Media'],
  //   },
  //   {
  //     title: 'Resources',
  //     links: ['Blog', 'Videos', 'Audio', 'Photos', 'Downloads'],
  //   },
  // ];

  const footerSections: any = [
    {
      title: "Forms",
      links: [
        { name: "Rudrabhishek", url: "https://zfrmz.in/zu1QZNH6ZBOoCnGp7RHh" },
        { name: "Ashram Visit", url: "https://zfrmz.in/nQKQf4fD87adthF1K8fG" },
        {
          name: "Diksha Request",
          url: "https://zfrmz.in/ZXmxavQkJmUFIDC5xCWE",
        },
        {
          name: "Manokamna Jyoti Kalash",
          url: "https://zfrmz.in/Hyl0pOGnOgGzueoSxLKo",
        },
        {
          name: "Jap Submission",
          url: "https://zfrmz.in/LaKApSWMkpsAMU6bUSc2",
        },
      ],
    },
  ];

  const socialMediaHandles = [
    {
      name: "Facebook",
      logo: "/assets/icons/facebook.png",
      url: "https://www.facebook.com/parampujya.prabhubaa",
    },
    {
      name: "Instagram",
      logo: "/assets/icons/instagram.png",
      url: "https://www.instagram.com/prabhubaa_official?igsh=MWxtaDhhYmRjbnRmeg==",
    },
    {
      name: "YouTube",
      logo: "/assets/icons/youtube.png",
      url: "https://youtube.com/@prabhubaa1185?si=6lUUHBxQ65guxgjT",
    },
  ];

  return (
    <footer className="bg-earth-dark text-earth-cream px-4 md:px-10">
  <div className="section-container py-10">
    
    {/* Main Layout */}
    <div className="flex flex-col lg:flex-row gap-10">
      
      {/* Left Section */}
      <div className="w-full lg:w-2/5">
        <div className="flex items-center space-x-2 mb-4">
          <div className="bg-accent-orange rounded-full flex items-center justify-center">
            <Image
              src={"/assets/svg/logo-one.svg"}
              alt="logo"
              width={80}
              height={60}
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-serif font-bold">
            Kashi Shivpuri Ashram
          </h3>
        </div>

        <p className="text-sm text-earth-cream/80 mb-4 grid gap-1">
          <span>Village - Intali kheda,</span>
          <span>District - Salumber</span>
          <span>Pincode - 313026</span>
          <span>Contact number - 9929681423</span>
        </p>

        <div className="flex space-x-4">
          {socialMediaHandles.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              className="w-8 h-8 bg-earth-brown rounded-full flex items-center justify-center hover:bg-accent-orange transition-colors"
              aria-label={social.name}
            >
              <Image
                src={social.logo}
                alt={social.name}
                width={20}
                height={20}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-8">
        
        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 w-full md:w-1/2">
          {footerSections.map((section: any) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-3 text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link: any, index: number) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      target="_blank"
                      className="text-sm text-earth-cream/80 hover:text-accent-orange transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2738.50076840695!2d73.9534059093699!3d23.995557379233684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967097446ab923f%3A0x959701320dd99e4d!2sShivpuri%20Aashram%20Prabhu%20Baa%2C%20Intalikhera!5e1!3m2!1sen!2sin!4v1774771021074!5m2!1sen!2sin"
            className="w-full h-56 md:h-64 rounded-lg"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="mt-10 pt-6 border-t border-earth-brown text-center text-sm text-earth-cream/60">
      <p>
        &copy; {new Date().getFullYear()} Kashi Shivpuri Ashram. All Rights
        Reserved.
      </p>
    </div>
  </div>
</footer>
  );
}
