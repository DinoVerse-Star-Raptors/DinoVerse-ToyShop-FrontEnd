import tagsData from "./tags.json"; // Assuming tags.json is in the same directory

const TagObject = tagsData.reduce((obj, item) => {
  obj[item.TagHandle] = {
    Name: item.TagName,
    ID: item.TagId,
    ParentID: item.TagParentId,
    ImageURL: item.ImageURL,
  };
  return obj;
}, {});

export default TagObject;
// console.log(categoryObject);
