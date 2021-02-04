import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-200 p-8 text-center">
      <p className="text-sm">©️世界の裏側 2021 Inc,</p>
      <Link href="/privacy-policy">
        <a className="text-sm hover:text-gray-500 corsor-pointer">プライバシーポリシー</a></Link>
      <a href="https://twitter.com/sinzitu_2">
        <img 
          src="https://iconlab.kentakomiya.com/wp/wp-content/uploads/2019/07/icon0103.png"
          alt="twitter"
          className="p-3 w-12 m-auto"
        />
      </a>
    </footer>
  );
}

export default Footer;
