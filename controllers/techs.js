const slugify = require("slugify");
const techs = require("../models/techs");


exports.create = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.name);
    const newExp = await new techs(req.body).save();
    res.json(newExp);
  } catch (err) {
    console.log(err);
    // res.status(400).send("Create product failed"); ;
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.read = async (req, res) => {
  try {
    console.log(req.body);
    let allTechs = await techs.find({})
      .sort([["createdAt", "desc"]])
      .exec();
    res.json(allTechs);
  } catch (err) {
    console.log(err);
    // res.status(400).send("Create product failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.readOne = async (req, res) => {
  try {
    console.log(req.body);
    let allTechs = await techs.findOne({
      slug: req.params.slug,
    }).exec();

    res.json(allTechs);
  } catch (err) {
    console.log(err);
    // res.status(400).send("Create product failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.name);
    const updated = await techs.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log(err);
    // res.status(400).send("Create product failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await techs.findOneAndRemove({
      slug: req.params.slug,
    }).exec();
    res.json(deleted);
  } catch (err) {
    console.log(err);
    return res.staus(400).send("techs delete failed");
  }
};
