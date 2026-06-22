const express = require("express");

const app = express();

const PORT = 3000;

// BMI Calculator API
app.get("/bmi", (req, res) => {
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);

    if (
        isNaN(weight) ||
        isNaN(height) ||
        weight <= 0 ||
        height <= 0
    ) {
        return res.status(400).json({
            message: "Please provide valid weight and height"
        });
    }

    const bmi = weight / (height * height);

    res.status(200).json({
        bmi: Number(bmi.toFixed(2))
    });
});


// Age Calculator API
app.get("/age", (req, res) => {
    const birthYear = Number(req.query.year);
    const currentYear = new Date().getFullYear();

    if (
        isNaN(birthYear) ||
        birthYear <= 0 ||
        birthYear > currentYear
    ) {
        return res.status(400).json({
            message: "Please provide a valid birth year"
        });
    }

    const age = currentYear - birthYear;

    res.status(200).json({
        age: age
    });
});


// Temperature Converter API
app.get("/temp", (req, res) => {
    const celsius = Number(req.query.celsius);

    if (isNaN(celsius)) {
        return res.status(400).json({
            message: "Please provide a valid temperature"
        });
    }

    const fahrenheit = (celsius * 9) / 5+ 32;

    res.status(200).json({
        celsius: celsius,
        fahrenheit: Number(fahrenheit.toFixed(2))
    });
});


// Home Route
app.get("/", (req, res) => {
    res.json({
        message: "Server is running successfully"
    });
});


// 404 Route
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});