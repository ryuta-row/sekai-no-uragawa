import Layout from "components/Layout";
import { getSortedPostsData } from "lib/posts";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  let i = Math.floor(Math.random() * allPostsData.length)
  return (
    <Layout>
    <Head>
      <title>世界の裏側</title>
      <link rel="icon" href="icon.jpg"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://sekai-no-uragawa.vercel.app/"/>
      <meta property="og:image" content="/icon.jpg"/>
      <meta property="og:title" content="世界の裏側"/>
      <meta property="og:description" content="世界の裏側へようこそ。ここでは、知るきっかけを提供することを目的とし運営しております。"/>
      <meta property="og:locale" content="ja_JP"/>

      <meta property="fb:app_id" content="1992296280910018" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@sinzitu_2" />

      <script data-ad-client="ca-pub-8024956070227392" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Head>
      <main className="">
        <div className="text-center p-2 pb-6 mb-5">
          <img
            src="icon.jpg"
            alt=""
            className="w-24 h-24 m-auto p-3 rounded-full border border-blue-300"
          />
          <h1 className="text-lg mt-5">世界の裏側へようこそ</h1>
          <br/>
          <p className="">ここは、知るきっかけを提供することを目的としたサイトです。</p>
        </div>
        <div className="text-center bg-gray-100 px-2 pt-2 rounded-3xl">
          <div className="">
            <p className="bg-gray-400 text-white py-1 rounded-full">カテゴリ</p>
            <div className="py-5">
              <Link href="/life"><div className="m-auto text-lg hover:text-gray-400 py-1 text-gray-600 cursor-pointer">生活</div></Link>
              <Link href="/economy"><div className="m-auto text-lg hover:text-gray-400 py-1 text-gray-600 cursor-pointer">経済</div></Link>
              <Link href="/education"><div className="m-auto text-lg hover:text-gray-400 py-1 text-gray-600 cursor-pointer">教育</div></Link>
            </div>
          </div>
        </div>

        <h1 className="pt-5 pl-2 text-lg border-b m-1 mb-2 border-gray-300">最新記事</h1>
        <div>
          {allPostsData
          .slice(0,3)
          .map(({ pageTitle, title, date, img, description }) => (
            <section
            className="border-b border-gray-400 mb-2 px-1
          hover:border-gray-300 cursor-pointer"
            key={pageTitle}
          >
            <Link href={`/articles/${pageTitle}`}>
              <div className="flex hover:text-gray-600">
                <div className="w-full pr-2">
                  <h3 className="font-semibold text-base sm:text-lg">
                    {title}
                  </h3>
                  {/* スマホサイズの時の説明文の文字数 */}
                  <p className="text-xs sm:hidden">
                    {`${description.substr(0, 35)}...`}
                  </p>
                  {/* PCサイズの時の説明文の文字数 */}
                  <p className="text-xs py-1 hidden sm:flex">
                    {`${description.substr(0, 80)}...`}
                  </p>
                  <a className="text-xs text-gray-500">{date}</a>
                </div>
                <div className="m-auto">
                  <img
                    className="mb-2 rounded-md object-cover h-20 w-40 sm:h-28 sm:w-60"
                    src={img}
                  />
                </div>
              </div>
            </Link>
          </section>
          ))}
        </div>

        <h2 className="text-lg px-2 mt-7 border-b border-gray-300 mb-2">こちらの記事は読まれましたか？</h2>
        <div className="flex ml-1 whitespace-nowrap">
          <div className="overflow-y-scroll h-56 w-60 sm:h-96 sm:w-full">
            {allPostsData
            .slice(4, 12)
            .map(({ pageTitle, title, date, img, description }) => (
              <section
              className="border rounded-md border-gray-400 mb-2 px-1 w-60 sm:w-96
            hover:border-gray-300 cursor-pointer mr-1 inline-block whitespace-normal"
              key={pageTitle}
            >
              <Link href={`/articles/${pageTitle}`}>
                <div className="hover:text-gray-600">
                  <div className="">
                    <h3 className="font-semibold text-sm sm:text-lg pt-3 px-2">
                      {title}
                    </h3>
                    {/* 説明文の文字数 */}
                    <p className="text-xs p-1 sm:hidden">
                      {`${description.substr(0, 30)}...`}
                    </p>
                    {/* PCサイズの時の説明文の文字数 */}
                    <p className="text-xs pt-1 pb-2 px-1 hidden sm:flex">
                      {`${description.substr(0, 45)}...`}
                    </p>
                    {/* <p className="p-1 text-right text-xs text-gray-500">{date}</p> */}
                  </div>
                  <div className="m-auto justify-items-end">
                    <img
                      className="rounded-md object-cover h-32 w-60 pb-1 sm:h-60 sm:w-96"
                      src={img}
                    />
                  </div>
                </div>
              </Link>
            </section>
            ))}
          </div>
        </div>

      </main>
    </Layout>
  );
}
