import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full m-0 p-0">
      {/* Hero */}
      <div className="h-screen w-full m-0 px-32 pt-6 pb-40 flex flex-col bg-[url('/skyscrapers.jpg')] bg-cover bg-center">
        <div className="flex-1">
            <Image
            src="/logo_white.svg"
            width={200}
            height={50}
            alt="Picture of the author"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-end gap-6">
          <h1 className="text-white text-4xl md:text-4xl lg:text-6xl w-2/5 frank-ruhl-libre-300">
            Trusted Partner<br />to leading Multinationals
          </h1>
          <h3 className="text-white text-lg w-2/5 roboto-thin">
            Based in Brussels and Rome, we are an international boutique law firm
            at the forefront of developments in technology.
            <br />
            For more than 20 years we have assisted leading multinational companies
            on antitrust and regulatory issues.
          </h3>
        </div>
      </div>

      {/* News Section */}
      <div className="h-screen w-full m-0 p-6 flex flex-col bg-white">
        <div className="flex-0 flex items-center justify-center">
          <h2 className="text-4xl text-[#0161A7] frank-ruhl-libre-300">
            News & Publications
          </h2>
        </div>
        <div className="flex-1 flex flex-row justify-center items-center gap-6">
          <div className="flex flex-col justify-end items-start bg-[url('/skyscrapers.jpg')] bg-cover bg-center w-2/5 h-96 border border-black">
            <div className="bg-slate-100 p-4 w-2/3 h-20 -mb-1 -ml-1">
              <h3 className="text-2xl text-black">
                Title of the article
              </h3>
            </div>
          </div>
          <div className="flex flex-col justify-end items-start bg-[url('/skyscrapers.jpg')] bg-cover bg-center w-2/5 h-96 border border-black">
            <div className="bg-slate-100 p-4 w-2/3 h-20 -mb-1 -ml-1">
              <h3 className="text-2xl text-black">
                Title of the article
              </h3>
            </div>
          </div>
          <div className="flex flex-col justify-end items-start bg-[url('/skyscrapers.jpg')] bg-cover bg-center w-2/5 h-96 border border-black">
            <div className="p-4 w-2/3 h-20 -mb-1 -ml-1 bg-slate-100">
              <h3 className="text-2xl text-black">
                Title of the article
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
