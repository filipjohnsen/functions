const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/:id/:subid", (req, res) => {
  const id = req.params.id
  const subid = req.params.subid

  redirectToProvider(id, subid, res)
});

app.use(`/go`, router);

function redirectToProvider(id, subid, res) {
  switch (id) {
    case "expressvpn":
      res.redirect("https://www.expressvpn.com/fi/6ysrp?offer=3monthsfree&a_fid=55101&chan=" + subid)
      break;
    case "nordvpn":
      res.redirect("https://go.nordvpn.net/aff_c?offer_id=280&aff_id=8456&url_id=1718&aff_sub=" + subid)
      break;
    case "surfshark":
      res.redirect("https://get.surfshark.net/aff_c?offer_id=20&aff_id=1389&aff_sub=" + subid)
      break;
    case "ultravpn":
      res.redirect("http://track.ultravpn.com/5c6e86713dfba/click/" + subid)
      break;
    case "cyberghostvpn":
      res.redirect("https://www.cyberghostvpn.com/offer/paras7vpn_mwq6ww5bh?source=paras7vpn.fi")
    default:
      break;
  }
}

module.exports = app;
module.exports.handler = serverless(app);