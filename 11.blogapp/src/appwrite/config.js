import conf from "../conf/conf";
import { Client, Databases, ID, Query,Storage } from "appwrite";

const {appwriteUrl,appwriteProjectId,appwriteDatabaseId,appwriteCollectionId,appwriteBucketId}  = conf

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(appwriteUrl)
            .setProject(appwriteProjectId)
        
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(appwriteDatabaseId,appwriteCollectionId,slug)
        } catch (error) {
            console.log('Appwrite service:: getPost():: ',error)
            return false
        }
    }

    // gets all posts that have status active
    async getPosts(queries = [Query.equal("status", "active")] ) {
        try { 
            return await this.databases.listDocuments(appwriteDatabaseId,appwriteCollectionId,queries)
        } catch (error) {
            console.log('Appwrite service:: getPosts():: ',error)
            return false
        }
    }

    // writes post
    async createPost({title, slug, content,featureImage,status='active', userId}) {
        try {
            return await this.databases.createDocument(appwriteDatabaseId,appwriteCollectionId,slug,{
                title,content,featureImage,status,userId
            })
        } catch (error) {
            console.log('Appwrite service:: createPost():: ',error)
            return false
        }
    }

    // update Post
    async updatePost(slug,{title, content,featureImage,status='active'}) {
        try {
            return await this.databases.updateDocument(appwriteDatabaseId,appwriteCollectionId,slug, {
                title,content,featureImage,status
            })
        } catch (error) {
            console.log('Appwrite service:: updatePost():: ',error)
            return false
        }
    }

    // delete a Post
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(appwriteDatabaseId,appwriteCollectionId,slug)
            return true
        } catch (error) {
            console.log('Appwrite service:: deletePost():: ',error)
            return false
        }
    }

    // upload file
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                appwriteBucketId,
                ID.unique,
                file
                )
        } catch (error) {
            console.log('Appwrite service:: uploadFile():: ',error)
            return false
        }
    }

    // delete file
    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(appwriteBucketId,fileId)
        } catch (error) {
            console.log('Appwrite service:: deleteFile():: ',error)
            return false
        }
    }

    // Preview File
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(appwriteBucketId,fileId).href
    }

}


// create object of the class and export
const service = new Service()
export default service

