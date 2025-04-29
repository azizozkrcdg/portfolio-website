import Blog from "../../models/Blog.js";

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.render("site/blog", { blogs });
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
      return res.status(404).send("Blog Bulunamadı.");
    }
    blog.reads += 1; // Okuma sayısını artır
    await blog.save(); // Değişiklikleri kaydet
    res.render("site/blogDetail", { blog });
  } catch (error) {
    console.error("Blog alınırken hata oluştu:", error);
    res.status(500).send("Blog alınırken hata oluştu.");
  }
};

export default { getAllBlogs, getBlogById };
