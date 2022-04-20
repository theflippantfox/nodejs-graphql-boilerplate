export const userResolver = {
  Query: {
    user: async (parent, { id }, { models }) => await models.User.findById(id),
  },

  Mutation: {
    createUser: async (parent, { input }, { models }) => {
      const user = await models.User.create(input);
      return user;
    },
  },
};
