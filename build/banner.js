import fs from "fs";

const getVersion = function () {
    const curentDate = new Date();
    let month = curentDate.getMonth() + 1,
        day = curentDate.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    return `${curentDate.getFullYear()}${month}${day}`;
};

const version = JSON.parse(fs.readFileSync("package.json")).version;
export default `/*!
  *     forked from antvis/L7
  *     Copyright (c) 2018 AntV team
  *     Copyright© 2000-2024 SuperMap Software Co. Ltdnpm
  *     license: MIT
  *     version: ${getVersion()}
  */`;