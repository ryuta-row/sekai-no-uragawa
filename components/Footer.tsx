import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-700 p-8 text-center text-gray-400">
      <p className="text-sm">©2021 世界の裏側, Inc.</p>
      <Link href="/privacy-policy">
        <a className="text-sm hover:text-gray-500 corsor-pointer">プライバシーポリシー</a></Link>
      <a href="https://twitter.com/sinzitu_2">
        <img 
          src="/twitter-icon.png"
          alt="twitter"
          className="p-3 w-12 m-auto"
        />
      </a>
    </footer>
  );
}

export default Footer;
