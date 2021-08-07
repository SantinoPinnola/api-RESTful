"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _products = _interopRequireDefault(require("./routes/products.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const puerto = 3000;
const server = app.listen(puerto, () => console.log('Server up en puerto', puerto));
server.on('error', err => {
  console.log('ERROR ATAJADO', err);
});
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));

const _dirname = _path.default.resolve();

const publicPath = _path.default.resolve(_dirname, './public');

app.use(_express.default.static(publicPath));
app.use('/api', _products.default);