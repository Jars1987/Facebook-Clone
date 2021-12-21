import Head from 'next/head';
import Header from '../components/Header';
import { getSession } from 'next-auth/react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main className='flex'>
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  //get the user
  const session = await getSession(context);

  const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
  const posts = await getDocs(q);

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: { session, posts: docs },
  };
}
