const AWS = require("aws-sdk");
AWS.config.update({ region: "eu-west-2" });
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

export const save = async (key: string, input: any): Promise<Boolean> => {
  const bucketName = `first-and-last-trams-dev`;
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
      }
    );
  } catch (error) {
    console.log("Error uploading file");
    console.log("error", error);
    return false;
  }
  return true;
};

export const getOldestFile = async (): Promise<string> => {
  const bucketName = `first-and-last-trams-dev`;
  const params = {
    Bucket: bucketName,
  };
  try {
    const data = await s3.listObjects(params).promise();
    const contents = data["Contents"];
    const oldest = contents.reduce((a, b) =>
      a.LastModified < b.LastModified ? a : b
    );
    const stationId = oldest["Key"].slice(0, 3);
    return stationId;
  } catch (error) {
    console.log({
      message: "Error finding the bucket content",
      error,
    });
    throw new Error(error);
  }
};

export const get = async (key) => {
  const bucketName = `first-and-last-trams-dev`;
  try {
    const params = {
      Bucket: bucketName,
      Key: `${key}.json`,
    };
    const data = (await s3.getObject(params).promise()).Body.toString("utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log("Error getting file", error);
    return [];
  }
};
