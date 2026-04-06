import { faker } from '@faker-js/faker';

export const createPostBody2 = (overrides = {}) => ({
  title: faker.lorem.words(3),
  body: faker.lorem.sentence(),
  userId: 1,
  ...overrides,
});
