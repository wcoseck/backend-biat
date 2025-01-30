// Instructions:
// 4. Create the register endpoint.
// A user will enter an email, first name, last name, and password.
// The password will be encrypted using bcrypt and the end point will return a JSON web token that is good for one day.
// Create appropriate folders. Test this in Postman

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const prisma = new PrismaClient();
const app = express();
const SECRET = "your-secret-key";

app.use(bodyParser.json());

// Authentication Endpoints (4. Register)
app.post("/register", async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  if (!email || !firstName || !lastName || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, {
      expiresIn: "1d",
    });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Error creating user" });
  }
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
