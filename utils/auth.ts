import { auth } from '@clerk/nextjs';
import { prisma } from './db';

export const getUserByClerkID = async ({
  select = {},
  includes = {},
}: {
  select?: {} | undefined;
  includes?: {} | undefined;
}): Promise<{
  id: string;
  createdAt: Date;
  uodatedAt: Date;
  clerkId: string;
  email: string;
}> => {
  const { userId } = await auth();

  const user = prisma.user.findFirstOrThrow({
    where: {
      clerkId: userId,
      select: undefined,
      includes: undefined,
    },
  });

  return user;
};
