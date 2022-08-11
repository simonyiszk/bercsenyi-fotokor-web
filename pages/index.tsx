import PostCard from "@/components/cards/PostCard";
import InnerLayout from "@/components/layouts/InnerLayout";
import { IFolytkovPageContent } from "@/models/content";
import { IPost } from "@/models/post";
import { firebaseFirestore } from "@/utils/firebase";
import { runningEnv } from "@/utils/variables";
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

const HomePage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const posts = data as IFolytkovPageContent[];
  return (
    <InnerLayout title="Főoldal" hideTitle>
      <div className="flex flex-col gap-16">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-8 h-fit flex flex-col justify-center items-center"
          >
            <PostCard key={post.id} {...post} />
          </div>
        ))}
      </div>
    </InnerLayout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  let data: IPost[] = [];
  try {
    const querySnapshot = await getDocs(collection(firebaseFirestore, "posts"));
    querySnapshot.forEach((doc) => {
      const d = doc.data() as IPost;
      data.push(d);
    });
  } catch (error) {
    console.log("error", error);
  }

  const pageContent: IFolytkovPageContent[] = data
    .sort((a, b) => {
      const aDate = new Date(a.posted_at.toDate());
      const bDate = new Date(b.posted_at.toDate());
      return aDate.getTime() - bDate.getTime();
    })
    .map((post, i) => ({
      id: post.id,
      monogram: post.posted_by.monogramm,
      posted_at: post.posted_at.toDate().toISOString(),
      serial: i,
      url: post.url,
    }))
    .sort((a, b) => {
      return b.serial - a.serial;
    });

  return {
    props: {
      data: pageContent ?? [],
    },
    revalidate: runningEnv === "development" ? 1 : 60 * 60,
    notFound: pageContent === undefined,
  };
};
