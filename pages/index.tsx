import Layout from "components/Layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
    <Head>
      <title>世界の裏側</title>
      <link rel="icon" href="icon.jpg"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://sekai-no-uragawa.vercel.app/"/>
      <meta property="og:image" content=""/>
      <meta property="og:title" content="世界の裏側"/>
      <meta property="og:description" content="世界の裏側へようこそ。ここでは、知るきっかけを提供することを目的とし運営しております。"/>
      <meta property="og:locale" content="ja_JP"/>

      <meta property="fb:app_id" content="1992296280910018" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sinzitu_2" />

      <script data-ad-client="ca-pub-8024956070227392" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Head>
      <main className="">
        <div className="text-center mt-4 p-7 border border-blue-300 m-auto
                        rounded-full w-11/12 h-80 mb-5"
        >
        <img
          src="icon.jpg"
          alt=""
          className="w-24 h-24 m-auto p-4"
        />
          <h1 className="text-lg">世界の裏側へようこそ</h1>
          <br/>
          <p className="">ここでは、知るきっかけを提供することを目的とし運営しております。</p>
        </div>
        <div className="">
          <div className="m-auto pt-24 mb-5 text-center border border-gray-400 w-11/12 h-80 rounded-full">
            <p>カテゴリ</p>
            <div className="flex">
              <Link href="/life"><div className="m-auto pt-8 text-2xl w-24 w-1/3 h-24 hover:text-gray-400 cursor-pointer">生活</div></Link>
              <Link href="/economy"><div className="m-auto pt-8 text-2xl w-1/3 h-24 hover:text-gray-400 cursor-pointer">経済</div></Link>
              <Link href="/education"><div className="m-auto pt-8 text-2xl w-1/3 h-24 hover:text-gray-400 cursor-pointer">教育</div></Link>
            </div>
            <Link href="/articles"><div className="text-lg text-gray-500 hover:text-gray-300 border-b w-20 m-auto cursor-pointer">記事一覧</div></Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
