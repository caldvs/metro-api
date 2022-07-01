const AWS = require("aws-sdk");
AWS.config.update({ region: "eu-west-2" });
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

export const save = async (key, input) => {
  const env = process.env.environment;
  const bucketName = `first-and-last-trams-${env}`;
  try {
    s3.upload(
      {
        Bucket: bucketName,
        Key: `${key}.json`,
        Body: JSON.stringify(input),
      },
      (err: any, data: any) => {
        if (err) {
          throw err;
        }
        console.log(`Successful file upload. ${data.Location}`);
        return `Successful file upload. ${data.Location}`;
      }
    );
  } catch (error) {
    console.log("Error uploading file");
    console.log("error", error);
    return error;
  }
};

export const get = async (key) => {
  const env = process.env.environment;
  const bucketName = `first-and-last-trams-${env}`;
  try {
    const params = {
      Bucket: bucketName,
      Key: `${key}.json`,
    };
    const data = (await s3.getObject(params).promise()).Body.toString("utf-8");
    return data;
  } catch (error) {
    console.log("Error getting file");
    console.log("error", error);
    return error;
  }
};
