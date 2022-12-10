const  DataModel  = require("../Model/DataModel");

const addUser = async (req, res) => {
  const user = req.body;
  console.log(user);
  const newUser = new DataModel(user);

  //   console.log(user)
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

const getUSer = async (req, res) => {
  const { userId } = req.body;
  try {
    const data = await  DataModel.find({ userId });
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};



const editUser = async (req, res) => {
  let user = req.body;
  const editUser = new DataModel(user);
  console.log(editUser, req.params.id);
  try {
    await DataModel.updateOne({ _id: req.params.id }, editUser);
    res.status(201).json(editUser);
  } catch (err) {
    res.status(409).json(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    await DataModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "userDeltedSuccesfully" });
  } catch (err) {
    res.status(409).json(err.message);
  }
};

module.exports = { addUser, getUSer, editUser, deleteUser };
