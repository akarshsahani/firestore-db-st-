const admin = require('firebase-admin');
const sto = require('firebase-admin/storage')
const {Storage} = require('@google-cloud/storage');

const serviceAccount = require('./servkeys.json')

const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://crud-da26f.appspot.com'
});

// const bucket = getStorage().bucket();
// const bucket = sto.getStorage().bucket();
const bucket = sto.getStorage().bucket('my-custom-bucket');

console.log(bucket.getFiles);

const bucketName = 'gs://crud-da26f.appspot.com';
const filePath = 'C:/Users/Softsuave/Downloads/test.jpg';
const destFileName = 'test';

const storage = new Storage();
const generationMatchPrecondition = 1;

async function uploadFile() {
    const options = {
      destination: destFileName,

      // Optional:
      // Set a generation-match precondition to avoid potential race conditions
      // and data corruptions. The request to upload is aborted if the object's
      // generation number does not match your precondition. For a destination
      // object that does not yet exist, set the ifGenerationMatch precondition to 0
      // If the destination object already exists in your bucket, set instead a
      // generation-match precondition using its generation number.
      preconditionOpts: {ifGenerationMatch: generationMatchPrecondition}
    };
  
    await storage.bucket(bucketName).upload(filePath, options);
    console.log(`${filePath} uploaded to ${bucketName}`);
  }
  
  uploadFile().catch(console.error);