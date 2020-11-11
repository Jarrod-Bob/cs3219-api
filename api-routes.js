// api-routes.js
// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "API Its Working",
    message: "Successful connection to API! WOOHOO!",
  });
});
// Import student controller
var studentController = require("./studentController");

router
  .route("/students")
  .get(studentController.index)
  .post(studentController.new);
router
  .route("/students/:student_id")
  .get(studentController.view)
  .patch(studentController.update)
  .put(studentController.update)
  .delete(studentController.delete);
// Export API routes
module.exports = router;
