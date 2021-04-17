const Fish = require("../models/Fish.model");

//opération post One fish
exports.postOneFish = (req, res, next) => {
  console.log(req.body);
  const fishObject = req.body;
  delete req.body._id;
  const fish = new Fish({
    ...fishObject,
  });
  fish
    .save()
    .then(() => {
      res.status(200).json({ message: "Object enregistré" });
    })
    .catch((err) => res.status(400).json({ err }));
};
//Add Dib PUT opération
exports.addDib = (req, res, next) => {
  const dibAmount = req.body.dib.amount;
  if (dibAmount <= 0) {
    res
      .status(400)
      .json({ message: "Le montant de la mise ne peut pas être null" });
  } else {
    console.log("Add Amount to dib");
    Fish.updateOne(
      { _id: req.body._id },
      { dib: { amount: req.body.dib.amount, claimed: req.body.dib.claimed } }
    )

      .then(() => res.status(200).json({ message: "Objet modifié" }))
      .catch((err) => res.status(400).json({ err }));

    Fish.updateOne({ _id: req.body._id }, { $inc: { price: dibAmount } })
      .then(() => {
        console.log("Dib $inc");
      })
      .catch((err) => console.error(err));
  }
};
//Opération get all fish
exports.getAllFish = (req, res, next) => {
  Fish.find()
    .then((fishies) => res.status(200).json(fishies))
    .catch((error) => res.status(400).json({ error }));
};
