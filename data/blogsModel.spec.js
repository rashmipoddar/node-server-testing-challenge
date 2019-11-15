const db = require('./dbConfig');

const { add } = require('./blogsModel');

describe('blogs model', () => {
  describe('insert', () => {
    beforeEach(async () => {
      await db('blogs').truncate();
    });

    it('should insert a blog to db', async () => {
      await add({ title: 'blog1' });

      const blogs = await db('blogs');
      expect(blogs).toHaveLength(1);
    });

    it('should insert the provided blog', async () => {
      await add({ title: 'blog1' });
      await add({ title: 'blog2' });

      const blogs = await db('blogs');
      expect(blogs).toHaveLength(2);
      expect(blogs[0].title).toBe('blog1');
      expect(blogs[1].title).toBe('blog2');
    });

    it('should return the blog that was inserted', async () => {
      let blog = await add({ title: 'blog1'});
      expect(blog.title).toBe('blog1');
      expect(blog.id).toBeDefined();

      blog = await add({ title: 'blog2'});
      expect(blog.title).toBe('blog2');
      expect(blog.id).toBeDefined();
    });

  });
});



