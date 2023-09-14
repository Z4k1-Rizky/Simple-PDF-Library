const { nanoid } = require("nanoid");
const mysql = require("mysql2");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "simple_pdf_library",
});

const getAllFiles = (req, h) => {
  return new Promise((resolve, reject) => {
    con.query("SELECT * FROM Files", function (err, file) {
      if (err) reject(err);
      const response = h.response({
        status: "success",
        data: {
          file,
        },
      });
      response.code(200);
      resolve(response);
    });
  });
};

const addFile = (req, h) => {
  return new Promise((resolve, reject) => {
    const id = nanoid(16);
    const { name } = req.payload;
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    let sql = `INSERT INTO Files (ID, NAME, CREATEDAT, UPDATEDAT, PATH) VALUES ('${id}', '${name}', '${createdAt}', '${updatedAt}', 'placeholder')`;

    con.query(sql, function (err, result) {
      if (err) reject(err);
      console.log("1 record inserted");
    });

    con.query(`SELECT * FROM Files WHERE ID = '${id}'`, function (err, result) {
      if (err) reject(err);
      const isSuccess = result[0].ID === id;
      if (isSuccess) {
        const response = h.response({
          status: "success",
          message: "File added.",
          data: {
            fileId: id,
          },
        });
        response.code(201);
        resolve(response);
      }
    });
  });
};

const updateFile = (req, h) => {
  return new Promise((resolve, reject) => {
    const { id, name } = req.payload;
    const updatedAt = new Date().toISOString();

    con.query(
      `UPDATE Files SET NAME = '${name}', UPDATEDAT = '${updatedAt}' WHERE ID = '${id}'`,
      function (err, result) {
        if (err) reject(err);
        if (result.affectedRows === 0) {
          const response = h.response({
            status: "fail",
            message: "File not found.",
          });
          response.code(404);
          resolve(response);
        }
        console.log(result.affectedRows + " record(s) updated");
      }
    );

    con.query(`SELECT * FROM Files WHERE ID = '${id}'`, function (err, result) {
      if (err) reject(err);
      if (result[0].NAME === name) {
        const editedFile = result[0];
        const response = h.response({
          status: "success",
          message: "File updated.",
          data: {
            editedFile,
          },
        });
        response.code(200);
        resolve(response);
      }
    });
  });
};

const deleteFile = (req, h) => {
  return new Promise((resolve, reject) => {
    const { id } = req.payload;

    con.query(`DELETE FROM Files WHERE ID = '${id}'`, function (err, result) {
      if (err) reject(err);
      if (result.affectedRows === 0) {
        const response = h.response({
          status: "fail",
          message: "File not found.",
        });
        response.code(404);
        resolve(response);
      }
      console.log("Number of records deleted: " + result.affectedRows);
    });

    con.query(`SELECT * FROM Files WHERE ID = '${id}'`, function (err, result) {
      if (err) reject(err);
      if (result.length === 0) {
        const response = h.response({
          status: "success",
          message: "File deleted.",
        });
        response.code(200);
        resolve(response);
      }
    });
  });
};

module.exports = { getAllFiles, addFile, updateFile, deleteFile };
