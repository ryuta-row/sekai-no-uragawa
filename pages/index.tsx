import Layout from "components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>世界の裏側</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sinzitu_2" />
        <meta property="og:url" content="/" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
      </Head>
      <main className="mt-20 py-56">
        <img
          src="https://cdn.image.st-hatena.com/image/square/fe62bf86c36e650a32cdd83b4988d000d0fbb6d9/backend=imagemagick;height=128;version=1;width=128/https%3A%2F%2Fcdn.user.blog.st-hatena.com%2Fblog_custom_icon%2F154373653%2F1555711896698606"
          alt=""
          className="w-16 h-16 m-auto"
        />
        <h1 className="text-center p-5">welcome</h1>
        <p></p>
      </main>
    </Layout>
  );
}
