const { getAllFiles, addFile, updatefile,deleteFile } = require("./handler");

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
    handler: updatefile,
  },
  {
    method: "DELETE",
    path: "/home",
    handler: deleteFile,
  },
];

module.exports = routes;