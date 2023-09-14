const mysql = require("mysql2");
const { nanoid } = require("nanoid");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "simple_pdf_library",
});

// con.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + con.threadId);
// });

// const id = nanoid(16);
// const name = nanoid(20);
// const createdAt = new Date().toISOString();
// const updatedAt = new Date().toISOString();

// let sql = `INSERT INTO files (ID, NAME, CREATEDAT, UPDATEDAT) VALUES ('${id}', '${name}', '${createdAt}', '${updatedAt}')`;

// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("1 record inserted");
// });

// const isSuccess = () => {
//   con.query(`SELECT * FROM files WHERE ID = '${id}'`, function (err, result) {
//     if (err) throw err;
//     console.log(result[0]);
//   });
// };
// isSuccess();

// var ress = [];
// const res = () => {
//   let result =
//   con.query(`SELECT * FROM Files WHERE PATH = 'placeholder'`, function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
//   // console.log(result);
// };
// res();
// console.log(ress);

// let output;

// con.query(`SELECT * FROM Files WHERE PATH = 'placeholder'`, function (err, result) {
//   if (err) throw err;
//   return output = result;
// });

// console.log(output);
// var result = [];
// var getInformationFromDB = function (callback) {
//   con.query("SELECT * FROM Files", function (err, res, fields) {
//     if (err) return callback(err);
//     if (res.length) {
//       for (var i = 0; i < res.length; i++) {
//         result.push(res[i]);
//       }
//     }
//     callback(null, {status: "success",data:{result}});
//   });
// };

// console.log("Call Function");
// let res = getInformationFromDB(function (err, files) {
//             if (err) console.log("Database error!");
//           });

// const getFiles = () => {
//   return new Promise((resolve, reject) => {
//     con.query("SELECT * FROM Files", function (err, result) {
//       if (err) reject(err);
//       resolve(result);
//     });
//   });
// }

// const getAllFiles = (req, h) => {
//   let data;
//   getFiles()
//     .then(result => {
//       data = result;
//       console.log(data);
//     })
//     .catch(err => console.log(err));
// }

// getAllFiles();

// con.query("UPDATE Files SET NAME = 'File1-baru', UPDATEDAT = '2019-8-9' WHERE ID = 'xQ0ycsqsunTktgEy'", function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

con.query('SELECT * FROM Files WHERE ID = "xQ0ycsqsunTktgEy"', 
  function (err, result) {
    if (err) throw err;
    console.log(result);
    console.log(result.length)
  }
);

// con.query('DELETE FROM Files WHERE ID = "xQ0ycsqsunTktgEy"', function (err, result) {
//   if (err) throw err;
//   console.log(result);
// })

