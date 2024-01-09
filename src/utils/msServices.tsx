import { MsMicroserviceUrl } from "../config";
import axios from "axios";

export const msServices = axios.create({
  baseURL: MsMicroserviceUrl,
  withCredentials: true,
});
