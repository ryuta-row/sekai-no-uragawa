import Link from "next/link";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const onClickShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="fixed bg-gray-500 w-screen">
        <div className="h-14 max-w-screen-sm flex m-auto">
          <div className="text-white p-4">
            <Link href="/">
              <a>世界の裏側</a>
            </Link>
          </div>
          <nav className="ml-auto">
            <div className="flex">
              <Link href="/articles">
                <a className="p-4 text-white cursor-pointer hover:text-gray-300">
                  記事一覧
                </a>
              </Link>
              <button onClick={onClickShowMenu}>
                <img
                  alt="MENU"
                  src="https://chetc-od.com.ua/templates/chets/img/button-menu-icon.png"
                  className="sm:hidden border p-1 m-1 cursor-pointer"
                  width="48"
                  height="40"
                />
              </button>
            </div>
          </nav>
          <div className="p-4 flex text-white hidden sm:flex px-5">
            <a className="px-2 cursor-pointer hover:text-gray-300">生活</a>
            <a className="px-2 cursor-pointer hover:text-gray-300">経済</a>
            <a className="px-2 cursor-pointer hover:text-gray-300">雑学</a>
          </div>
        </div>
        <div>
          {showMenu && (
            <div
              className="bg-gray-600
                                text-white text-center p-2 sm:hidden
                                "
            >
              <h3 className="p-1">カテゴリ</h3>
              <p className="p-1 border-b border-gray-500 bg-gray-700">生活</p>
              <p className="p-1 border-b border-gray-500 bg-gray-700">経済</p>
              <p className="p-1 bg-gray-700">雑学</p>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
