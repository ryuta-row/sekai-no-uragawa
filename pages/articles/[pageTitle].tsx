import Layout from "components/Layout";
import { ShareButton } from "components/ShareBotton";
import { getAllPostIds, getPostData } from "lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <link rel="icon" href="/icon.jpg" />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={`/articles/${postData.pageTitle}`} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:image" content={postData.img} />

        <meta property="fb:app_id" content="1992296280910018" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sinzitu_2" />
      </Head>
      <div className="text-gray-500 p-3 text-sm">
        {`カテゴリ：${postData.category}`}
      </div>
      <section>
        <div className="">
          <h1 className="text-lg pt-2 px-2 font-semibold border-b">
            {postData.title}
          </h1>
          <p className="text-sm text-right pr-2">{postData.date}</p>
        </div>
        <img className="px-2 w-full" alt="top_pic" src={postData.img} />
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          className="pt-3 px-2"
        />
      </section>

      <ShareButton
        text={postData.title}
        url={`https://sinzitu.site/articles/${postData.pageTitle}`}
      />
      <Link href="/articles">
        <div className="p-3 cursor-pointer text-sm text-center text-gray-500 hover:text-gray-300">
          記事一覧
        </div>
      </Link>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.pageTitle);
  return {
    props: {
      postData,
    },
  };
};
