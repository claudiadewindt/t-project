import { Box, Button, Text } from "@chakra-ui/react";
import TweetIcon from "@/public/images/svg/tweet-icon.svg";
import Image from "next/image";

interface TweetButtonProps {
  onClick: () => void;
}

export const TweetButton = ({ onClick }: TweetButtonProps) => {
  return (
    <Button
      mt="20px"
      onClick={onClick}
      display={{ base: "absolut", lg: "flex" }}
      bg="blue"
      color="white"
      borderRadius={{ base: "full", lg: "60px" }}
      fontWeight="bold"
      fontSize="20px"
      p="0"
      width={{ base: "50px", lg: "90%" }}
      height="50px"
      _hover={{
        bg: "blueHover",
      }}
      transition={"all 0.2s ease-in-out"}
    >
      <Box
        display={{ base: "flex", lg: "none" }}
        justifyContent="center"
        alignItems="center"
      >
        <Image src={TweetIcon} alt="tweet icon" />
      </Box>
      <Text ml="2" display={{ base: "none", lg: "block" }}>
        Tweet
      </Text>
    </Button>
  );
};
