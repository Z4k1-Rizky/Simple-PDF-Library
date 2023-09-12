const { getAllFiles, addFile, updateFile,deleteFile } = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/home",
    handler: getAllFiles,
  },
  {
    method:"POST",
    path: "/home",
    handler: addFile,
  },
  {
    method: "PUT",
    path: "/home",
    handler: updateFile,
  },
  {
    method: "DELETE",
    path: "/home",
    handler: deleteFile,
  },
];

module.exports = routes;