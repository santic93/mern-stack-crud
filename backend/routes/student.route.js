import mongoose from "mongoose";
import { Express } from "express";
let router = Express.Router();


// Student Model
let studentSchema = require("../models/Student").default

// CREATE Student
router.post("/create-student", (req, res, next) => {
    studentSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
})

// READ Students
router.get("/", (req, res, next) => {
    studentSchema.find(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// UPDATE student
router.route("/update-student/:id")
    // Get Single Student
    .get((req, res, next) => {
        studentSchema.findById(
            req.params.id, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.json(data);
                }
            });
    })

    // Update Student Data
    .put((req, res, next) => {
        studentSchema.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            (error, data) => {
                if (error) {
                    console.log(error);
                    return next(error);
                } else {
                    res.json(data);
                    console.log("Student updated successfully !");
                }
            }
        );
    });

// Delete Student
router.delete("/delete-student/:id",
    (req, res, next) => {
        studentSchema.findByIdAndRemove(
            req.params.id, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.status(200).json({
                        msg: data,
                    });
                }
            });
    });

module.exports = router;