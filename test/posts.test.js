import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from '../src/clients/postsApi.js';

describe('JSONPlaceholder API /posts', () => {
  test('GET /posts', async () => {
    const response = await getAllPosts();

    expect(response.status).toBe(200);
    expect(response.data.length).toBe(100);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('title');
  });

  test('GET /posts/id', async () => {
    const response = await getPostById(1);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title');
  });

  test('POST /posts', async () => {
    const newPost = {
      title: 'My test post',
      body: 'This is a test body',
      userId: 1,
    };

    const response = await createPost(newPost);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title');
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

  test('DELETE /posts/id', async () => {
    const response = await deletePost(1);

    expect(response.status).toBe(200);
  });
});
