const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

function addUniqueIdToJson(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;

    const jsonArray = JSON.parse(data);
    const updatedArray = jsonArray.map((item) => ({ ...item, id: uuidv4() }));

    fs.writeFile(
      filePath,
      JSON.stringify(updatedArray, null, 2),
      "utf8",
      (err) => {
        if (err) throw err;
        console.log("File successfully updated!");
      }
    );
  });
}

addUniqueIdToJson("testData.json");
