import { jest } from '@jest/globals';

const mockPost = jest.fn();
const mockGet = jest.fn();

jest.unstable_mockModule('axios', () => ({
  default: {
    post: mockPost,
    get: mockGet,
  },
}));

const { loginUser } = await import('../src/clients/loginApi.js');
const { getPosts } = await import('../src/clients/postApi.js');

test('should login and get posts', async () => {
  mockPost.mockResolvedValue({
    data: {
      token: 'mock_token_12345',
    },
  });

  mockGet.mockResolvedValue({
    status: 200,
    data: [{ id: 1, title: 'First post' }],
  });

  const token = await loginUser();
  const postsResponse = await getPosts(token);

  expect(token).toBe('mock_token_12345');
  expect(postsResponse.status).toBe(200);
  expect(postsResponse.data[0].title).toBe('First post');
});
