import { Query } from "node-appwrite";
import db from "./config/databases.js";
import { appwriteFunction } from "./env.js";

export default async ({ req, res, log, error }) => {
    const thresholdTimeInHours = Number(appwriteFunction.thresholdTimeInHours);
    const thresholdDate = new Date(Date.now() - thresholdTimeInHours * 60 * 60 * 1000);

    const response = await db.shareCode.listDocuments(
        [Query.lessThan("$createdAt", thresholdDate)]
    );

    const documents = response.documents;

    if (documents.length > 0) {
        const deletePromises = documents.map(document => db.shareCode.deleteDocument(document.$id));
        await Promise.all(deletePromises);
        log(`${documents.length} documents deleted.`);
    } else {
        log("No documents to delete.");
    }

    return { success: true };
}