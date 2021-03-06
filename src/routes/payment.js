const router = require("express").Router();
const {PaymentController} = require("../controllers");
const {create, remove, update, list} = new PaymentController();

router.post("/create", create);
router.delete("/remove", remove);
router.put("/update", update);
router.post("/list", list);

router.use( (_, res) => {
	res.status(200).json({error:"Operação desconhecida com o pagamento"});
});

module.exports = router;
