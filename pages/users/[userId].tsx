import { Header } from "@/components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import useSingleUser from "@/hooks/useSingleUser";
import { MoonLoader } from "react-spinners";
import { Flex } from "@chakra-ui/react";
import { UserHero } from "@/components/users/UserHero";
import { PostFeed } from "@/components/posts/PostFeed";

const UserProfile = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useSingleUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <Flex justifyContent={"center"} alignItems={"center"} h="full">
        <MoonLoader color="blue" size={80} />
      </Flex>
    );
  }

  return (
    <>
      <Head>
        <title>
          {fetchedUser?.name} (@{fetchedUser?.username}) / Twitter
        </title>
        <meta
          property="og:title"
          content="{fetchedUser?.name} Profile / Twitter"
          key="title"
        />
      </Head>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={userId as string} />
      <PostFeed userId={userId as string} />
    </>
  );
};

export default UserProfile;
