import { createPostBody2 } from '../src/data/postFactory2.js';
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from '../src/clients/postsApi.js';
import { newPost } from '../src/data/postData.js';

describe('JSONPlaceholder /posts', () => {
  test('POST /posts', async () => {
    const bodyPost = {
      title: 'My test post',
      body: 'This is a test body',
      userId: 1,
    };

    const response = await createPost(bodyPost);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title');
    expect(response.data.title).toBe(bodyPost.title);
    expect(response.data.body).toBe(bodyPost.body);
    expect(response.data.userId).toBe(bodyPost.userId);
  });

  test('POST /posts with postData', async () => {
    const response = await createPost(newPost);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });

  test('POST /posts postFactory2', async () => {
    const newPost2 = createPostBody2({ title: 'Custom title' });
    const response = await createPost(newPost2);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(newPost2.title);
    expect(response.data.body).toBe(newPost2.body);
    expect(response.data.userId).toBe(newPost2.userId);
  });
});
