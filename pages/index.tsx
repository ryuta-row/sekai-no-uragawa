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
  const i = Math.floor(Math.random() * allPostsData.length);
  return (
    <Layout>
      <Head>
        <title>世界の裏側</title>
        <link rel="icon" href="icon.jpg" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://sekai-no-uragawa.vercel.app/"
        />
        <meta property="og:image" content="/icon.jpg" />
        <meta property="og:title" content="世界の裏側" />
        <meta
          property="og:description"
          content="世界の裏側へようこそ。ここでは、知るきっかけを提供することを目的とし運営しております。"
        />
        <meta property="og:locale" content="ja_JP" />

        <meta property="fb:app_id" content="1992296280910018" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@sinzitu_2" />

      </Head>
      <main className="">
        <div className="text-center p-2 pb-6 mb-5">
          <img src="icon.jpg" alt="" className="w-24 h-24 m-auto p-3" />
          <h1 className="text-lg mt-5">世界の裏側へようこそ</h1>
          <br />
          <p className="">
            ここでは、知るきっかけを提供することを目的とし運営しています。
          </p>
        </div>

        <h2 className="bg-pink-400 p-1 text-center rounded-full text-white mb-1">
          カテゴリ：生活
        </h2>
        <div className="flex ml-1 overflow-x-scroll">
          <div className="whitespace-nowrap h-56 w-60 sm:h-96 sm:w-full">
            {allPostsData
              .filter((data) => {
                return data.category === "生活";
              })
              .map(({ pageTitle, title, date, img, description }) => (
                <section
                  className="border rounded-md border-gray-400 mb-2 px-1 w-60 sm:w-96
            hover:border-gray-300 cursor-pointer mr-1 inline-block whitespace-normal"
                  key={pageTitle}
                >
                  <Link href={`/articles/${pageTitle}`}>
                    <div className="hover:text-gray-600">
                      <div className="">
                        <h3 className="font-semibold text-sm sm:text-lg pt-2 px-2">
                          {title}
                        </h3>
                        {/* スマホサイズの時の説明文の文字数 */}
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

        <h2 className="bg-gray-600 p-1 text-center rounded-full text-white mb-1">
          カテゴリ：経済
        </h2>
        <div className="flex ml-1 overflow-x-scroll">
          <div className="whitespace-nowrap h-56 w-60 sm:h-96 sm:w-full">
            {allPostsData
              .filter((data) => {
                return data.category === "経済";
              })
              .map(({ pageTitle, title, date, img, description }) => (
                <section
                  className="border rounded-md border-gray-400 mb-2 px-1 w-60 sm:w-96
            hover:border-gray-300 cursor-pointer mr-1 inline-block whitespace-normal"
                  key={pageTitle}
                >
                  <Link href={`/articles/${pageTitle}`}>
                    <div className="hover:text-gray-600">
                      <div className="">
                        <h3 className="font-semibold text-sm sm:text-lg pt-2 px-2">
                          {title}
                        </h3>
                        {/* スマホサイズの時の説明文の文字数 */}
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

        <h2 className="bg-blue-400 p-1 text-center rounded-full text-white mb-1">
          カテゴリ：教育
        </h2>
        <div className="flex ml-1 overflow-x-scroll">
          <div className="whitespace-nowrap h-56 w-60 sm:h-96 sm:w-full">
            {allPostsData
              .filter((data) => {
                return data.category === "教育";
              })
              .map(({ pageTitle, title, date, img, description }) => (
                <section
                  className="border rounded-md border-gray-400 mb-2 px-1 w-60 sm:w-96
            hover:border-gray-300 cursor-pointer mr-1 inline-block whitespace-normal"
                  key={pageTitle}
                >
                  <Link href={`/articles/${pageTitle}`}>
                    <div className="hover:text-gray-600">
                      <div className="">
                        <h3 className="font-semibold text-sm sm:text-lg pt-2 px-2">
                          {title}
                        </h3>
                        {/* スマホサイズの時の説明文の文字数 */}
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

        <h2 className="pt-5 pl-2 text-lg border-b m-1 mb-2 border-gray-300">
          最新記事
        </h2>
        <div>
          {allPostsData
            .slice(0, 3)
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

        <h2 className="pt-6 pl-2 text-lg border-b m-1 mb-2 border-gray-300">
          こちらの記事は読まれましたか？
        </h2>
        <div className="">
          <div className="">
            {allPostsData
              .slice(9, 10)
              .map(({ pageTitle, title, date, img, description }) => (
                <section
                  className="border rounded-md p-1 border-gray-400
              hover:border-gray-300 cursor-pointer"
                  key={pageTitle}
                >
                  <Link href={`/articles/${pageTitle}`}>
                    <div className="hover:text-gray-600">
                      <div className="">
                        <h3 className="font-semibold text-base sm:text-lg pt-1 px-2">
                          {title}
                        </h3>
                        {/* スマホサイズの時の説明文の文字数 */}
                        <p className="text-xs px-1 pt-1 sm:hidden">
                          {`${description.substr(0, 45)}...`}
                        </p>
                        {/* PCサイズの時の説明文の文字数 */}
                        <p className="text-xs pt-1 px-2 hidden sm:flex">
                          {`${description.substr(0, 90)}...`}
                        </p>
                        <p className="p-1 text-right text-xs text-gray-500">
                          {date}
                        </p>
                      </div>
                      <div className="m-auto justify-items-end">
                        <img
                          className="rounded-md object-cover h-52 w-full sm:h-96 sm:w-full"
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
