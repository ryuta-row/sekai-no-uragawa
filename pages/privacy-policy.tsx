import Layout from "components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
    <Head>
      <title>プライバシーポリシー</title>
    </Head>
      <main className="">
        <h2 className="px-2 pt-2 text-lg border-b">プライバシーポリシー</h2>
        <p className="p-1 pb-1">
            当サイトでは皆様に情報を提供することを目的としており、当サイトを通じて取得した情報は、当サイト及び関連サイトの運営以外で使用することはありません。<br/>
            また、第三者へ情報を提供することはありません。
        </p>
      </main>
    </Layout>
  );
}
