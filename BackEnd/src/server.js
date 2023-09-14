const Hapi = require("@hapi/hapi");
const mysql = require("mysql2");
const routes = require("./routes");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "simple_pdf_library",
});

con.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + con.threadId);
});

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

module.exports = con;