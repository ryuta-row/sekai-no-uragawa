import Layout from "components/Layout";
import { ShareButton } from "components/ShareBotton";
import { getAllPostIds, getPostData } from "lib/posts";
import Head from "next/head";
import Link from 'next/link';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sinzitu_2" />
        <meta property="og:url" content={`/articles/${postData.pageTitle}`} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:image" content={postData.img} />
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
        <img className="px-2" alt="top_pic" src={postData.img} />
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          className="pt-3 px-2"
        />
      </section>

      {/* ドメインの取得後urlを設定 */}
      <ShareButton
        text={postData.title}
        url={`https://sekai-no-uragawa.vercel.app/articles/${postData.pageTitle}`}
      />
      <Link href="/articles">
        <div　className="p-3 cursor-pointer  hover:text-gray-500">
        ⬅︎記事一覧
        </div>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.pageTitle);
  return {
    props: {
      postData,
    },
  };
}