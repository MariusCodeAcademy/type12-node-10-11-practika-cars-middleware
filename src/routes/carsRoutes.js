const express = require('express');

const carRouter = express.Router();

// parsisiusti visus 2 automobilius

// GET /api/cars

// try {
//   const conn = await mysql.createConnection(dbConfig);
//   const sql = 'SELECT * FROM posts';
//   const [rows] = await conn.query(sql);
//   res.status(200).json(rows);
//   conn.end();
// } catch (error) {
//   console.log('error ', error);
//   res.status(500).json({
//     msg: 'Something went wrong',
//   });
// }

module.exports = carRouter;
