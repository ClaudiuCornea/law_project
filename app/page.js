import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full m-0 p-0">
      {/* Hero */}
      <div className="h-screen w-screen flex justify-center pt-8 pb-32 px-4 lg:px-8 bg-[url('/skyscrapers.jpg')] bg-cover bg-center">
        <div className="container flex-1 flex flex-col">
          <div className="flex-0">
              <Image
              src="/logo_white.svg"
              width={200}
              height={50}
              alt="Picture of the author"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-center md:justify-end gap-6">
            <h1 className="text-white text-center md:text-left text-4xl md:text-4xl lg:text-6xl md:w-3/5 lg:w-2/5 frank-ruhl-libre-500">
              Trusted Partner<br />to leading Multinationals
            </h1>
            <h3 className="text-white text-center md:text-left text-lg md:w-3/5 lg:w-2/5 roboto-thin">
              Based in Brussels and Rome, we are an international boutique law firm
              at the forefront of developments in technology.
              <br />
              For more than 20 years we have assisted leading multinational companies
              on antitrust and regulatory issues.
            </h3>
          </div>

        </div>
      </div>

      {/* News Section */}
      <div className="h-screen w-screen flex justify-center bg-blue-100">
        <div className="container flex-1 flex flex-col py-16 md:py-32 px-8 md:px-16 gap-6">
          <div className="flex-0 flex flex-col items-center justify-center">
            <h2 className="text-3xl sm:text-6xl text-[#0161A7] gelasio-700">
              News & Publications
            </h2>
          </div>
          <div className="flex-[2_2_0%] flex flex-row justify-center items-center gap-8">
            <div className="flex-1 flex flex-col justify-end items-start bg-[url('/skyscrapers.jpg')] bg-cover bg-center h-3/4 shadow group">
              <div className="bg-slate-100 px-4 py-3 w-full md:w-3/4 h-fit -mb-1 md:-ml-1 shadow group-hover:shadow-lg">
                <h3 className="text-xl text-[#0161A7] open-sans-700">
                  Delighted that Apple is opening NFC in Europe
                </h3>
                <p className="text-[#0161A7] roboto-thin">
                  March 10, 2024
                </p>
              </div>
            </div>
            <div className="flex-1 hidden lg:flex flex-col justify-end items-start bg-[url('/skyscrapers.jpg')] bg-cover bg-center h-3/4 shadow group">
              <div className="bg-slate-100 px-4 py-3 w-full md:w-3/4 h-fit -mb-1 md:-ml-1 shadow group-hover:shadow-lg">
                <h3 className="text-xl text-[#0161A7] open-sans-700">
                  Looking ahead to PSD3 - Strong Customer Authentication
                </h3>
                <p className="text-[#0161A7] roboto-thin">
                  October 1, 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="h-screen w-screen flex justify-center bg-white">
        <div className="container flex-1 flex flex-col py-16 md:py-32 px-8 md:px-16 gap-6">
          <div className="flex-0 flex flex-col items-center justify-center gap-4">
            <h2 className="text-3xl sm:text-6xl text-[#0161A7] gelasio-700">
              Our Team
            </h2>
            <div className="w-full md:w-3/4">
              <p className="text-[#0161A7] open-sans-500 text-center">
                We are a group of collaborative, passionate, and high-motivated lawyers
                at the service of leading Multinationals and professionals in the e-payment
                relation sector.
              </p>
              <p className="text-[#0161A7] open-sans-500 text-center">
                We work ethically, have a strict policy on conflicts and are committed to our Clients.
              </p>
            </div>
          </div>
          <div className="flex-[3_3_0%] flex flex-row justify-center items-center gap-8">
            <div className="flex-1 flex flex-col justify-end items-end bg-[url('/andrea_dematteis.jpeg')] bg-cover bg-center h-4/5 shadow group">
              <div className="bg-slate-100 px-4 py-3 w-fit h-fit -mb-1 md:-ml-1 shadow group-hover:shadow-lg">
                <h3 className="text-right text-lg text-[#0161A7] open-sans-700">
                  Andrea De Matteis
                </h3>
                <p className="text-[#0161A7] roboto-thin text-right">
                  Founding Partner
                </p>
              </div>
            </div>
            <div className="flex-1 hidden md:flex flex-col justify-end items-end bg-[url('/simone_giordano.jpeg')] bg-cover bg-center h-4/5 shadow group">
              <div className="bg-slate-100 px-4 py-3 w-fit h-fit -mb-1 md:-ml-1 shadow group-hover:shadow-lg">
                <h3 className="text-right text-lg text-[#0161A7] open-sans-700">
                  Simone Giordano
                </h3>
                <p className="text-[#0161A7] roboto-thin text-right">
                  Partner
                </p>
              </div>
            </div>
            <div className="flex-1 hidden lg:flex flex-col justify-end items-end bg-[url('/Denise-Campagna.jpeg')] bg-cover bg-center h-4/5 shadow group">
              <div className="bg-slate-100 px-4 py-3 w-fit h-fit -mb-1 md:-ml-1 shadow group-hover:shadow-lg">
                <h3 className="text-right text-lg text-[#0161A7] open-sans-700">
                  Denise Campagna
                </h3>
                <p className="text-[#0161A7] roboto-thin text-right">
                  Associate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Clients Section */}
      <div className="h-screen w-screen flex justify-center bg-blue-100">
        <div className="container flex-1 flex flex-col py-16 md:py-32 px-8 md:px-16 gap-6">
          <div className="flex-0 flex flex-col items-center justify-center gap-4">
            <h2 className="text-3xl sm:text-6xl text-[#0161A7] gelasio-700">
              Our Clients
            </h2>
            <div className="w-full md:w-3/4">
              <p className="text-[#0161A7] open-sans-500 text-center">
                We provide clear and transparent fees and e-billing.
              </p>
            </div>
          </div>
          <div className="flex-[3_3_0%] flex-wrap flex flex-row justify-center items-center gap-8">
          <div className="flex flex-col justify-end items-center bg-[url('/logo-mastercard.png')] bg-contain bg-no-repeat bg-center w-1/3 md:w-1/4 lg:w-1/5 h-2/5">
              <div className="px-4 py-3 w-fit h-fit -mb-4 -ml-1">
                <h3 className="text-[#0161A7] open-sans-700">
                  Master Card
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-end items-center bg-[url('/logo-mastercard.png')] bg-contain bg-no-repeat bg-center w-1/3 md:w-1/4 lg:w-1/5 h-2/5">
              <div className="px-4 py-3 w-fit h-fit -mb-4 -ml-1">
                <h3 className="text-[#0161A7] open-sans-700">
                  Master Card
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-end items-center bg-[url('/logo-mastercard.png')] bg-contain bg-no-repeat bg-center w-1/3 md:w-1/4 lg:w-1/5 h-2/5">
              <div className="px-4 py-3 w-fit h-fit -mb-4 -ml-1">
                <h3 className="text-[#0161A7] open-sans-700">
                  Master Card
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-end items-center bg-[url('/logo-mastercard.png')] bg-contain bg-no-repeat bg-center w-1/3 md:w-1/4 lg:w-1/5 h-2/5">
              <div className="px-4 py-3 w-fit h-fit -mb-4 -ml-1">
                <h3 className="text-[#0161A7] open-sans-700">
                  Master Card
                </h3>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-end items-center bg-[url('/logo-mastercard.png')] bg-contain bg-no-repeat bg-center w-1/3 md:w-1/4 lg:w-1/5 h-2/5">
              <div className="px-4 py-3 w-fit h-fit -mb-4 -ml-1">
                <h3 className="text-[#0161A7] open-sans-700">
                  Master Card
                </h3>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-end items-center bg-[url('/logo-mastercard.png')] bg-contain bg-no-repeat bg-center w-1/3 md:w-1/4 lg:w-1/5 h-2/5">
              <div className="px-4 py-3 w-fit h-fit -mb-4 -ml-1">
                <h3 className="text-[#0161A7] open-sans-700">
                  Master Card
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
