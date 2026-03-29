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
    <footer className="bg-earth-dark text-earth-cream px-10">
      <div className="section-container py-12 px-4">
        <div className="w-full gap-8 flex">
          <div className="w-[40%]">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-accent-orange rounded-full flex items-center justify-center">
                <Image
                  src={"/assets/svg/logo-one.svg"}
                  alt="logo"
                  width={100}
                  height={80}
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
              <span>Contact number- 9929681423</span>
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
                    width={30}
                    height={30}
                    className="object-cover w-full h-full"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="w-[60%] flex">
            {footerSections.map((section: any) => (
              <div key={section.title} className="w-[40%]">
                <h4 className="font-semibold mb-4 text-white">
                  {section.title}
                </h4>
                <ul className="space-y-2 grid">
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
            <div className="w-[60%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2738.50076840695!2d73.9534059093699!3d23.995557379233684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967097446ab923f%3A0x959701320dd99e4d!2sShivpuri%20Aashram%20Prabhu%20Baa%2C%20Intalikhera!5e1!3m2!1sen!2sin!4v1774771021074!5m2!1sen!2sin"
                width="400"
                height="250"
                style={{ border: 0 }}
                // allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-earth-brown text-center text-sm text-earth-cream/60">
          <p>
            &copy; {new Date().getFullYear()} Kashi Shivpuri Ashram. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
