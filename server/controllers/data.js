import fs from "fs";

export const createData = async (req, res) => {
  const data = req.body;
  const jsonString = JSON.stringify(data);

  // Here goes the logic for saving data to json file

  fs.writeFile(`files/${data.id}.json`, jsonString, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
      res.status(201).json(data);
    }
  });
};
