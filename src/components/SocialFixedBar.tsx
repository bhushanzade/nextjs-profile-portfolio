import Image from "next/image";

export default function SocialFixedBar() {
  return (
    <div className="fixed right-3 md:right-5 bottom-0 z-30">
      <div className="flex flex-col justify-center items-center ">
        <a href="mailto:bhushanzade50@gmail.com">
          <Image width={30} height={30} src="/images/icons/mail.svg" alt="Email" className="w-6 md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75" />
        </a>
        <a href="https://linkedin.com/in/bhushanzade">
          <Image width={30} height={30} src="/images/icons/linkedin.svg" alt="LinkedIn" className="w-6 md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75" />
        </a>
        <a href="https://github.com/bhushanzade">
          <Image width={30} height={30} src="/images/icons/github.svg" alt="Github" className="w-6 md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75" />
        </a>
        <a href="https://www.instagram.com/bhushan.zade/">
          <Image width={30} height={30} src="/images/icons/instagram.svg" alt="Instagram" className="w-6 md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75" />
        </a>
        <div className="h-20 md:h-52 mt-2 w-1/12 bg-slate-300"></div>
      </div>
    </div>
  )
}