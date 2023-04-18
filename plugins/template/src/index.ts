import { logger } from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        logger.log("test");
    },
    onUnload: () => {
        logger.log("test");
    },
    settings: Settings,
}
