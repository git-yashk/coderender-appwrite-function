import { Client } from "node-appwrite";
import { appwriteFunction } from "../env.js";

const client = new Client()
    .setEndpoint(appwriteFunction.endpoint)
    .setProject(appwriteFunction.projectId)
    .setKey(appwriteFunction.apikey);

export default client;