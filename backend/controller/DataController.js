const Country = require("../models/Countries");

// const find_countries = (req, res) => {
//   Country.find({ name: { $regex: req.params.name } }, function (err, data) {
//     if (err) next;
//     res.json(data);
//   });
//   console.log(req.query);
// };

const get_countries = (req, res) => {
  Country.find({}, function (err, data) {
    if (err) next;
    res.json(data);
  });
};

const create_countries = async (req, res, next) => {
  const reqBody = req.body;
  let newCountries = new Country({
    country: reqBody,
  });
  newCountries
    .save()
    .then((data) => {
      console.log(data);
    })
    .catch(next);

  res.send("Success");
};

// const delete_users = (req, res) => {
//   console.log(req.params.id);
//   Users.findOneAndRemove({ _id: req.params.id }, function (err, data) {
//     if (err) next;
//     // res.json(data);
//     res.send("deleted");
//   });
// };
// const update_users = async (req, res) => {
//   const reqBody = req.body;
//   console.log(reqBody.name);
//   Users.findByIdAndUpdate(
//     reqBody._id,
//     {
//       name: reqBody.name,
//       email: reqBody.email,
//       phone: reqBody.phone,
//       password: reqBody.password,
//       address: reqBody.address,
//       role_id: reqBody.role_id,
//       created_date: reqBody.created_date,
//       last_activity: reqBody.last_activity,
//     },

//     function (err, data) {
//       if (err) next;
//       // res.json(data);
//       res.send("updated");
//     }
//   );
// };

module.exports = {
  get_countries,
  create_countries,
};
