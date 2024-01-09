import { UserMicroserviceUrl } from "../config";
import axios from "axios";

export const auth = axios.create({
  baseURL: UserMicroserviceUrl,
  withCredentials: true,
});
