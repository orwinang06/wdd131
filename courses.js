// courses.js

import {aCourse} from "./course.mjs";


aCourse.showSection();

  // console.log(aCourse.name)
  // console.log(aCourse['name'])
  // console.log(aCourse.section[1].roomNum);


  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  });