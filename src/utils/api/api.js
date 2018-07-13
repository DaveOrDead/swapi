// Vendor
import axios from "axios";
// Constants
import { API_ROOT } from "./../../constants";

export default axios.create({
    baseURL: `${API_ROOT}/`,
    headers: {
        "Content-Type": "application/json"
    }
});
