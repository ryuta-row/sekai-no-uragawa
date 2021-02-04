import Link from "next/link";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const onClickShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="fixed bg-gray-500 w-screen min-w-screen">
        <div className="h-17 max-w-screen-sm flex m-auto">
          <div className="text-white p-5 text-lg">
            <Link href="/">
              <a>世界の裏側</a>
            </Link>
          </div>
          <nav className="ml-auto">
            <div className="flex">
              <Link href="/articles">
                <a className="text-lg p-5 text-white cursor-pointer hover:text-gray-300">
                  記事一覧
                </a>
              </Link>
              <button onClick={onClickShowMenu}>
                {showMenu? (
                <div　
                  className="sm:hidden border px-4 pb-2 py-0 m-1 cursor-pointer
                            text-white text-5xl">
                  ×
                </div>
                ) : (
                <div　
                  className="sm:hidden border px-4 pb-2 py-0 m-1 cursor-pointer
                  text-white text-5xl">
                  =
                </div>)
                }
              </button>
            </div>
          </nav>
          <div className="p-4 flex text-white hidden sm:flex px-5">
            <Link href="/life"><a className="px-2 py-1 text-lg cursor-pointer hover:text-gray-300">生活</a></Link>
            <Link href="/economy"><a className="px-2 py-1 text-lg cursor-pointer hover:text-gray-300">経済</a></Link>
            <Link href="/education"><a className="px-2 py-1 text-lg cursor-pointer hover:text-gray-300">教育</a></Link>
          </div>
        </div>
        <div>
          {showMenu && (
            <div
              className="bg-gray-600
                                text-white text-center p-2 sm:hidden
                                "
            >
              <h3 className="p-1 text-lg">カテゴリ</h3>
              <Link href="/life">
                <p className=" text-lg p-1 border-b border-gray-500 bg-gray-700
                              hover:text-gray-300 hover:bg-gray-500 cursor-pointer">生活</p>
              </Link>
              <Link href="/economy">
                <p className="text-lg p-1 border-b border-gray-500 bg-gray-700
                              hover:text-gray-300 hover:bg-gray-500 cursor-pointer">経済</p>
              </Link>
              <Link href="/education">
                <p className="text-lg p-1 bg-gray-700 hover:text-gray-300
                              hover:bg-gray-500 cursor-pointer">教育</p>
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
