const express = require("express");
const userRouter = express.Router();
const userModel = require("../Models/userModel");

userRouter.post("/post-user", (req, res) => {
  const userData = {
    name: req.body.name,
    age: req.body.age,
  };
  console.log(userData);
  // return res.status(200).json({status:200})
  userModel
    .create(userData)
    .then((status) => {
      res.status(200).json("Create Successful!@");
    })
    .catch((err) => {
      console.log(err);
    });

  // userModel.findOne({
  //     where:{
  //         id:req.body.id
  //     }
  // })
});

userRouter.post("/delete-user", (req, res) => {
  const userData = {
    id: req.body.id,
  };
  finder = userModel
    .findOne({
      where: {
        id: userData.id,
      },
    })
    .then((data) => {
      console.log(data);
      // data.destroy()
      res.status(200).json("Data deleted");
    })
    .catch((err) => {
      console.log(err);
    });

  // userModel.destroy(userData)
  // .then(()=>{
  //     res.status(200).json('delete successful')
  // })
  // .catch((err)=>{
  //     console.log(err);
  // })
});

userRouter.post("/update-user", (req, res) => {
  const userData = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
  };
  finder = userModel
    .findOne({
      where: {
        id: userData.id,
      },
    })
    .then((data) => {
      userModel
        .update(userData, {
          where: {
            id: data.dataValues.id,
          },
        })
        .then(() => {
          res.status(200).json({msg:"update successful!!" })
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = userRouter;
