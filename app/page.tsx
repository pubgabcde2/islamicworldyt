import Image from "next/image";

const Page = () => {
  return (
    <>
      <script
        async
        data-cfasync={false}
        src="https://pl28436066.effectivegatecpm.com/5cca2bf6333e364208866cc2b56d1506/invoke.js"
      ></script>
      <div id="container-5cca2bf6333e364208866cc2b56d1506"></div>
      <div className="flex flex-col gap-10 justify-center items-center min-h-screen p-15">
        <h1 className="font-bold text-2xl sm:text-3xl">
          پڑھیں اور ثواب کمائیں۔
        </h1>
        <Image src="/ayat-ul-kursi.jpg" width={400} height={400} alt="ayat" />
        <Image src="/darood.png" width={400} height={400} alt="ayat" />
      </div>
    </>
  );
};

export default Page;
