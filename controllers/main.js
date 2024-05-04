const { getData, endpoints } = require("../appModules/api");
const { staticFile } = require("../appModules/http-utils");

const { config, makeRatingFile } = require("../appModules/rating");
async function mainRouteController(res, publicUrl, extname) {
  const data = await getData(endpoints.game);

  await makeRatingFile(config.PATH_TO_RATING_FILE, data);
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}

module.exports = mainRouteController;
