import { auth } from "@clerk/nextjs";

const adminIds = ["user_2eHmf8dr3yvsLqA6OU3StIxCci5"];

export const checkIsAdmin = async () => {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  return adminIds.includes(userId);
};
