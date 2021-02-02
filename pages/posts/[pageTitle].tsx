import Layout from "components/Layout";
import { ShareButton } from "components/ShareBotton";
import { getAllPostIds, getPostData } from "lib/posts";
import Head from "next/head";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="世界の裏側" />
        <meta property="og:url" content={`https://sekai-no-uragawa-3natltbaa.vercel.app/posts/${postData.pageTitle}`} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:image" content={postData.img} />
      </Head>
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
        url={`https://sekai-no-uragawa.ryuta-row.vercel.app//posts/${postData.pageTitle}`}
      />
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
