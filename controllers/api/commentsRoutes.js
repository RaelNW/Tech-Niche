const { Comment } = require("../../models");

const router = require("express").Router();

router.post("/", async (req, res) => {
    try {
        const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
        blog_id: req.body.blog_id,
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// router.put("/:id", async (req, res) => {
//     try {
//         const [updateRowCount] = await Comment.update(
//         {
//             comment_text: req.body.comment_text,
//         },
//         {
//             where: {
//             id: req.params.id,
//             user_id: req.session.user_id,
//             },
//         }
//         );

//         if (updateRowCount === 0) {
//         res.status(404).json({ message: "Comment not found with that id" });
//         return;
//         }
//         res.json({ message: "Comment updated" });
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

router.delete("/:id", async (req, res) => {
    try {
        const [deleteRowCount] = Comment.destroy({
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
        },
        });

        if (deleteRowCount === 0) {
        res.status(404).json({ message: "Comment not found with that id" });
        return;
        }
        res.json({ message: "Comment deleted" });
    } catch (err) {
        res.status(400).json(err);
    }
    });
    
module.exports = Comment;
