import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { RiMailLine } from "react-icons/ri";

function Footer() {
  return (
    <>
      <div className="bg-white w-full h-28 flex">
        <div className="h-full w-2/5 text-xs flex justify-center items-center">
          <div className="h-8 w-96">
            <span>© 2025 by Nguyen Tich Thien. </span>
            <p>Powered and secured by Thien</p>
          </div>
        </div>
        <div className="h-full w-3/5 flex justify-around px-8">
          <div className="h-full w-36 flex flex-col justify-center items-center gap-2 text-xs">
            <p className="font-semibold">Call</p>
            <span>+81562394035</span>
          </div>
          <div className="h-full w-36 flex flex-col justify-center items-center gap-2 text-xs">
            <p className="font-semibold">Write</p>
            <span>Nguyenthien11082005@gmail.com</span>
          </div>
          <div className="h-full w-36 flex flex-col justify-center items-center gap-2 text-xs">
            <p className="font-semibold">Follow</p>
            <div className="flex gap-2 text-xl">
              <a
                href={"https://github.com/nguyenthien0110/My_profile"}
                target="_blank"
                className="hover:cursor-pointer"
              >
                <FaSquareGithub />
              </a>
              <a
                href={"https://www.facebook.com/nguyen.tich.thien.05042021/"}
                target="_blank"
                className="hover:cursor-pointer"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="mailto:Nguyenthien11082005@gmail.com"
                className="hover:cursor-pointer"
              >
                <RiMailLine />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
