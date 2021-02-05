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
        <title>経済</title>
        <link rel="icon" href="icon.jpg"/>
        <script data-ad-client="ca-pub-8024956070227392" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <>
        <Link href="/"><p className="p-1 text-center text-sm text-gray-500 hover:text-gray-300 cursor-pointer">TOPに戻る</p></Link>
        <h1 className="pl-2 border-b m-1 border-gray-300">カテゴリ：経済</h1>
        <div>
        {allPostsData
        .filter(filterData => filterData.category === "経済")
        .map(({ pageTitle, title, date, img, description }) => (
            <section
              className="border border-gray-400 rounded-md mb-1 pl-3 pr-1 py-1
            hover:border-gray-300 cursor-pointer"
              key={pageTitle}
            >
              <Link href={`/articles/${pageTitle}`}>
                <div className="flex">
                  <div className="w-full pr-2">
                    <a className="text-sm text-gray-500">{date}</a>
                    <h3 className="font-semibold text-base sm:text-base">
                      {title}
                    </h3>
                    <p className="hidden sm:flex text-xs">{description}</p>
                  </div>
                  <div className="ml-auto">
                    <img
                      className="rounded-md object-cover h-20 w-32 sm:h-28 sm:w-48"
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
