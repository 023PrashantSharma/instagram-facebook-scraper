import { developmentLogger } from "../logs/developmentLogger"
import { productionLogger } from "../logs/productionLogger"
let logger = null
if (process.env.REACT_APP_ENV === 'production') {
    logger = productionLogger();
}
logger = developmentLogger();
module.exports = logger