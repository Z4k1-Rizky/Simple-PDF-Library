const { nanoid } = require("nanoid");
const file = require('./tempFile');

const getAllFiles = () => ({
  status: "success",
  data: {
    file,
  },
});

const addFile = (req, h) => {
  const id = nanoid(16);
  const { name } = req.payload;
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newFile = {
    id, name, createdAt, updatedAt,
  };

  file.push(newFile);

  const isSuccess = file.filter((f) => f.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "File added.",
      data: {
        fileId: id,
      },
    });
    response.code(201);
    return response;
  }
}

const updateFile = (req, h) => {
  const { id, name } = req.payload;
  const updatedAt = new Date().toISOString();

  const index = file.findIndex((f) => f.id === id);
  
  if (index !== -1) {
    file[index] = {
      ...file[index],
      name,
      updatedAt,
    };

    editedFile = file[index];

    const response = h.response({
      status: "success",
      message: "File updated.",
      data: {
        editedFile,
      }
    });
    response.code(200);
    return response;
  };

  const response = h.response({
    status: "fail",
    message: "File not found.",
  });
  response.status(404);
  return response;
};

const deleteFile = (req, h) => {
  const { id } = req.payload;

  const index = file.findIndex((f) => f.id === id);

  if (index !== -1) {
    file.splice(index, 1);
    const response = h.response({
      status: "success",
      message: "File deleted.",
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "File not found.",
  });
  response.code(404);
  return response;
};

module.exports = { getAllFiles, addFile, updateFile, deleteFile };