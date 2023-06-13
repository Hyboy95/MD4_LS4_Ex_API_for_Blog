import { BlogRepo } from "../../../index"


export class BlogController {
    static async getAllBlog(req: any, res: any) {
        try {
            const blogs = await BlogRepo.find();
            if (blogs) {
                return res.status(200).json({ message: "Thành công!", blogs: blogs })
            }
        } catch (err) {
            return res.status(500).json({
                message: err.message
            })
        }
    }

    static async addNewBlog(req: any, res: any) {
        try {
            const blogSearch = await BlogRepo.findOneBy({ title: req.body.title });
            if (blogSearch) {
                return res.status(500).json({
                    message: "Blog đã tồn tại!"
                })
            }
            let { title, content } = req.body;
            const blogData = {
                title: title,
                content: content
            }
            const blog = await BlogRepo.save(blogData);
            if (blog) {
                return res.status(200).json({
                    message: "Tạo blog thành công!",
                    blog: blog
                });

            }
        } catch (err) {
            return res.status(500).json({
                message: err.message
            })
        }
    }

    static async updateBlog(req: any, res: any) {
        try {
            let blogSearch = await BlogRepo.findOneBy({ id: req.params.id });
            if (!blogSearch) {
                return res.status(500).json({
                    message: "Blog không tồn tại!"
                })
            }
            await BlogRepo.update({ id: req.params.id }, req.body);
            return res.status(200).json({
                message: "Cập nhật thành công!"
                });
        } catch (err) {
            return res.status(500).json({
                message: err.message
            })
        }
    }

    static async deleteBlog(req: any, res: any) {
        try {
            let blogSearch = await BlogRepo.findOneBy({ id: req.params.id });
            if (!blogSearch) {
                return res.status(500).json({
                    message: "Blog không tồn tại!"
                })
            }
            await BlogRepo.delete({ id: req.params.id});
            return res.status(200).json({
                message: "Xóa thành công!"
                });
        } catch (err) {
            return res.status(500).json({
                message: err.message
            })
        }
    }

    static async getDetailBlog(req: any, res: any) {
        try {
            let blogSearch = await BlogRepo.findOneBy({ id: req.params.id });
            if (!blogSearch) {
                return res.status(500).json({
                    message: "Blog không tồn tại!"
                })
            }
            return res.status(200).json({
                message: "Thành công!",
                blog: blogSearch
            })
        } catch (err) {
            return res.status(500).json({
                message: err.message
            })
        }
    }
}