import Layout from "components/Layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>プライバシーポリシー</title>
        <link
          rel="icon"
          href="https://cdn.image.st-hatena.com/image/square/fe62bf86c36e650a32cdd83b4988d000d0fbb6d9/backend=imagemagick;height=128;version=1;width=128/https%3A%2F%2Fcdn.user.blog.st-hatena.com%2Fblog_custom_icon%2F154373653%2F1555711896698606"
        />
      </Head>
      <main className="">
        <Link href="/">
          <p className="p-1 text-center text-sm text-gray-500 hover:text-gray-300 cursor-pointer">
            TOPに戻る
          </p>
        </Link>
        <h2 className="px-2 pt-2 text-lg border-b">プライバシーポリシー</h2>
        <p className="p-1 pb-1">
          当サイトでは皆様に情報を提供することを目的としており、当サイトを通じて取得した情報は、当サイト及び関連サイトの運営以外で使用することはありません。
          <br />
          また、第三者へ情報を提供することはありません。
        </p>
      </main>
    </Layout>
  );
}
