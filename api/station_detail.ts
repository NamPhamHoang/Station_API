import { VercelRequest, VercelResponse } from "@vercel/node";
import { response } from "../utils/response.util";
import { allowCors } from "../utils/middleware.util";
import axios from "axios";
import convert from "xml-js";

const getStationDetail = async (req: VercelRequest, res: VercelResponse) => {
  try {
    const CrsCode = req.query.CrsCode;
    if (!CrsCode) {
      return response(res).error(400, {
        message: "Failed to query",
      });
    }
    const resXml = await axios({
      method: "GET",
      url: `https://internal.nationalrail.co.uk/xml/4.0/station-${CrsCode}.xml`,
    });

    if (resXml.status === 200) {
      var jsonStation = convert.xml2js(resXml.data, {
        compact: true,
        ignoreComment: true,
        ignoreDoctype: true,
        instructionHasAttributes: true,
        ignoreAttributes: true,
        ignoreDeclaration: true,
        ignoreInstruction: true,
      });
    }
    return response(res).success({
        stations: jsonStation
    });
  } catch (err) {
    return response(res).error(400, {
      message: err,
    });
  }
};

export default allowCors(getStationDetail);
