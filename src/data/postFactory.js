import { faker } from '@faker-js/faker';

export const createPostBody = () => ({
  title: faker.lorem.words(3),
  body: faker.lorem.sentence(),
  userId: faker.number.int({ min: 1, max: 10 }),
});
