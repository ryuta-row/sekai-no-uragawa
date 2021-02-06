import Layout from "components/Layout";
import Head from "next/head";
import { getSortedPostsData } from "lib/posts";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function ArticlesPage({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>生活</title>
        <link rel="icon" href="icon.jpg"/>
        <script data-ad-client="ca-pub-8024956070227392" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <>
        <Link href="/"><p className="p-1 text-center text-sm text-gray-500 hover:text-gray-300 cursor-pointer">TOPに戻る</p></Link>
        <h1 className="pl-2 border-b m-1 mb-2 border-gray-300">カテゴリ：生活</h1>
        <div>
        {allPostsData
        .filter(filterData => filterData.category === "生活")
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
      </>
    </Layout>
  );
}
