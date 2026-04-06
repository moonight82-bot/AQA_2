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

  test('PUT /posts/id', async () => {
    const updatePostBody = {
      id: 1,
      title: 'My test post update',
      body: 'This is a test body',
      userId: 1,
    };

    const response = await updatePost(1, updatePostBody);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title');
    expect(response.data.title).toBe(updatePostBody.title);
    expect(response.data.body).toBe(updatePostBody.body);
    expect(response.data.userId).toBe(updatePostBody.userId);
  });
});
