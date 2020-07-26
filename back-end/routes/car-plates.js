const router = require('express').Router();
const CarPlateController = require('../controllers/car-plates');


router.route('/get/all').get(CarPlateController.getAllCarPlates);
router.route('/get/:id').get(CarPlateController.getCarPlate);
router.route('/delete/:id').delete(CarPlateController.removeCarPlate);
router.route('/create').put(CarPlateController.createCarPlate);

module.exports = router;