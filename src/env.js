export const appwriteFunction = {
    endpoint: process.env.APPWRITE_FUNCTION_API_ENDPOINT,
    projectId: process.env.APPWRITE_FUNCTION_PROJECT_ID,
    databaseId: process.env.APPWRITE_FUNCTION_DATABASE_ID,
    collectionId: process.env.APPWRITE_FUNCTION_COLLECTION_ID,
    apikey: process.env.APPWRITE_FUNCTION_API_KEY,
    thresholdTimeInHours: process.env.THRESHOLD_TIME_IN_HOURS,
}