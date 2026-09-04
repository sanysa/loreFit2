// One-off: set (or create) the admin account password.
// Usage: node scripts/set-admin-password.js <email> <password>
require("dotenv").config();
const bcrypt = require("bcryptjs");
const { Pool } = require("pg");

const email = String(process.argv[2] || "").trim().toLowerCase();
const password = process.argv[3];

if (!email || !password) {
  console.error("Usage: node scripts/set-admin-password.js <email> <password>");
  process.exit(1);
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

(async () => {
  const hash = await bcrypt.hash(password, 10);
  const existing = await pool.query("SELECT id FROM users WHERE email = $1", [email]);

  if (existing.rows.length > 0) {
    await pool.query(
      "UPDATE users SET password_hash = $1, role = 'admin' WHERE email = $2",
      [hash, email]
    );
    console.log(`Updated password for existing user ${email} (role set to admin).`);
  } else {
    await pool.query(
      `INSERT INTO users (email, password_hash, first_name, last_name, country, city, role, phone)
       VALUES ($1, $2, 'Admin', 'Admin', 'Kazakhstan', 'Almaty', 'admin', '')`,
      [email, hash]
    );
    console.log(`Created new admin user ${email}.`);
  }

  await pool.end();
})().catch((err) => {
  console.error("Failed:", err.message);
  process.exit(1);
});
