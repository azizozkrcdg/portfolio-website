import Blog from "../../models/Blog.js";

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.render("admin/blogs", { blogs });
  } catch (error) {
    console.error("Bloglar alınırken hata oluştu:", error);
    res.status(500).send("Bloglar alınırken hata oluştu.");
  }
};

const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).send("Blog bulunamadı.");
    }
    res.render("admin/blog", { blog });
  } catch (error) {
    console.error("Blog alınırken hata oluştu:", error);
    res.status(500).send("Blog alınırken hata oluştu.");
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, summary, content } = req.body;
    const blog = new Blog({
      title,
      summary,
      content,
    });
    await blog.save();
    res.redirect("/admin/blogs");
  } catch (error) {
    console.error("Blog oluşturulurken hata oluştu:", error);
    res.status(500).send("Blog oluşturulurken hata oluştu.");
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = req.params.id;
    const deletedBlog = await Blog.findByIdAndDelete(blog);
    if (!deletedBlog) {
      return res.status(404).send("Blog bulunamadı.");
    }
    res.redirect("/admin/blogs");
  } catch (error) {
    console.error("Blog silinirken hata oluştu:", error);
    res.status(500).send("Blog silinirken hata oluştu.");
  }
};

const editBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const { title, summary, content } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      { title, summary, content },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).send("Blog bulunamadı.");
    }
    res.redirect("/admin/blogs");
  } catch (error) {
    console.error("Blog güncellenirken hata oluştu:", error);
    res.status(500).send("Blog güncellenirken hata oluştu.");
  }
};

export default { getAllBlogs, getBlogById, createBlog, deleteBlog, editBlog };
