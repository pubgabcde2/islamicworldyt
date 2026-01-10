import Image from "next/image";
import Script from "next/script";

const Page = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-20">
        <a
          className="px-5 py-2 bg-black text-white outline-none rounded-full"
          href="https://www.effectivegatecpm.com/rf1b29rjja?key=dead369fdd1eedc0ab027f6c1ca09b6a"
        >
          Click Here
        </a>
      </div>
      <script
        async
        data-cfasync={false}
        src="https://pl28436066.effectivegatecpm.com/5cca2bf6333e364208866cc2b56d1506/invoke.js"
      ></script>
      <div className="flex flex-col gap-10 justify-center items-center min-h-screen p-15">
        <h1 className="font-bold text-2xl sm:text-3xl">
          پڑھیں اور ثواب کمائیں۔
        </h1>
        <Image src="/ayat-ul-kursi.jpg" width={400} height={400} alt="ayat" />
        <Image src="/darood.png" width={400} height={400} alt="ayat" />
      </div>
      <div id="container-5cca2bf6333e364208866cc2b56d1506"></div>
      <script src="https://pl28436125.effectivegatecpm.com/24/e6/56/24e656d59cb158131bfcdbdced87855d.js"></script>
      <script src="https://pl28436150.effectivegatecpm.com/20/1b/7e/201b7e9d7d649f67030a0abdb609fcab.js"></script>
      <Script
        id="atoptions"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            atOptions = {
              'key' : '10ca9c824ca15df3e529a68b46e24478',
              'format' : 'iframe',
              'height' : 50,
              'width' : 320,
              'params' : {}
            };
          `,
        }}
      />

      <Script
        src="https://www.highperformanceformat.com/10ca9c824ca15df3e529a68b46e24478/invoke.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default Page;
