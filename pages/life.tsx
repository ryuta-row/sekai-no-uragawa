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
      </Head>
      <>
        <h1 className="pl-2 border-b m-1 border-gray-300">カテゴリ：生活</h1>
        <div>
        {allPostsData
        .filter(filterData => filterData.category === "生活")
        .map(({ pageTitle, title, date, img, description }) => (
            <section
              className="border border-gray-400 rounded-md mb-1 p-2
            hover:border-gray-300 cursor-pointer"
              key={pageTitle}
            >
              <Link href={`/articles/${pageTitle}`}>
                <div className="flex">
                  <div className="w-96 pr-2">
                    <a className="text-sm text-gray-500">{date}</a>
                    <h3 className="font-semibold text-sm sm:text-base">
                      {title}
                    </h3>
                    <p className="hidden sm:flex text-xs">{description}</p>
                  </div>
                  <div className="ml-auto">
                    <img
                      className="object-cover h-16 w-40 sm:h-28 sm:w-48"
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
