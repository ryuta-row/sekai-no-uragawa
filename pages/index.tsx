import Layout from "components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
    <Head>
      <title>世界の裏側</title>
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
        <div className="text-center p-20 border border-blue-300 m-auto
                        rounded-full"
        >
        <img
          src="https://cdn.image.st-hatena.com/image/square/fe62bf86c36e650a32cdd83b4988d000d0fbb6d9/backend=imagemagick;height=128;version=1;width=128/https%3A%2F%2Fcdn.user.blog.st-hatena.com%2Fblog_custom_icon%2F154373653%2F1555711896698606"
          alt=""
          className="w-24 h-24 m-auto p-4"
        />
          <h1 className="p-2">世界の裏側へようこそ。</h1>
          <p>ここでは、知るきっかけを提供することを目的とし運営しております。</p>
        </div>
        {/* <div className="m-4 text-center">
          <p>カテゴリ</p>
          <div className="bg-yellow-200 py-2">生活</div>
          <p>遺伝子組み換え技術・食品 etc...</p>
          <div className="bg-indigo-200 py-2">経済</div>
          <p>世界経済・歴史・テクノロジー etc...</p>
          <div className="bg-pink-200 py-2">教育</div>
          <p>他言語・宗教・SNS　etc...</p>
        </div> */}
      </main>
    </Layout>
  );
}
