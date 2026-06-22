# Calculator APIs using Node.js and Express

This project contains three simple REST APIs:

- BMI Calculator API
- Age Calculator API
- Temperature Converter API

## Installation

```bash
npm init -y
npm install express
```

## Run Server

```bash
node server.js
```

or

```bash
npm run dev
```

Server runs on:

```text
http://localhost:3000
```

---

## Home Route

### GET /

Response

```json
{
  "message": "Server is running successfully"
}
```

---

## BMI Calculator API

### GET /bmi

Example

```text
http://localhost:3000/bmi?weight=70&height=1.75
```

Response

```json
{
  "bmi": 22.86
}
```

---

## Age Calculator API

### GET /age

Example

```text
http://localhost:3000/age?year=2004
```

Response

```json
{
  "age": 22
}
```

---

## Temperature Converter API

### GET /temp

Example

```text
http://localhost:3000/temp?celsius=37
```

Response

```json
{
  "celsius": 37,
  "fahrenheit": 98.6
}
```

---

## Invalid Route

Response

```json
{
  "message": "Route not found"
}
```

## Tech Stack

- Node.js
- Express.js

## Project Structure

```text
project/
│
├── server.js
├── package.json
└── node_modules/
```

## Author

Pranjali Sadafule