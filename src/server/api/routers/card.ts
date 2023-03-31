import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const cardRouter = createTRPCRouter({
  getAll: privateProcedure.query(({ ctx }) => {
    return ctx.prisma.card.findMany({
      where: {
        authorId: ctx.userId,
      },
    });
  }),
  getSingle: privateProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const card = await ctx.prisma.card.findUnique({
        where: {
          id: input.id,
        },
      });
      return card;
    }),

  create: privateProcedure
    .input(
      z.object({
        displayName: z.string(),
        displayTitle: z.string(),
        org: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const card = await ctx.prisma.card.create({
        data: {
          authorId: ctx.userId,
          displayName: input.displayName,
          displayTitle: input.displayTitle,
          org: input.org,
        },
      });

      return card;
    }),

  edit: privateProcedure
    .input(
      z.object({
        id: z.string(),
        displayName: z.string(),
        displayTitle: z.string(),
        org: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const card1 = await ctx.prisma.card.findUnique({
        where: {
          id: input.id,
        },
      });

      if (card1 && card1.authorId !== ctx.userId) {
        throw new Error("Not authorized");
      }

      return await ctx.prisma.card.update({
        where: {
          id: input.id,
        },
        data: {
          displayName: input.displayName,
          displayTitle: input.displayTitle,
          org: input.org,
        },
      });
    }),
  delete: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const card = await ctx.prisma.card.findUnique({
        where: {
          id: input.id,
        },
      });

      if (card && card.authorId !== ctx.userId) {
        throw new Error("Not authorized");
      }

      return await ctx.prisma.card.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
