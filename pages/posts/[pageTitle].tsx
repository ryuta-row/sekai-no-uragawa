import Layout from "components/Layout";
import { ShareButton } from "components/ShareBotton";
import { getAllPostIds, getPostData } from "lib/posts";
import Head from "next/head";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
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
        url={`xxx/posts/${postData.pageTitle}`}
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
