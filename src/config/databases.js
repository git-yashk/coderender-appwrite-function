import { Databases } from "node-appwrite";
import client from "./config.js";
import { appwriteFunction } from "../env.js";

const databases = new Databases(client);

const db = {};

db["shareCode"] = {

    listDocuments: async (query = []) => {
        try {
            const response = await databases.listDocuments(
                appwriteFunction.databaseId,
                appwriteFunction.collectionId,
                query
            );
            return response;
        } catch (error) {
            console.error("Error listing documents:", error);
            return { length: 0, documents: [] };
        }
    },

    deleteDocument: async (documentId) => {
        try {
            const response = await databases.deleteDocument(
                appwriteFunction.databaseId,
                appwriteFunction.collectionId,
                documentId
            );
            return response;
        } catch (error) {
            console.error("Error deleting document:", error);
            return null;
        }
    },

}

export default db;