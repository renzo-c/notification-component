import { v4 as uuidv4 } from "uuid";

const notifications = [
  {
    id: uuidv4(),
    title: "Single-Sign-On Outage this weekend",
    content:
      "Due to some maintenance tasks performed this Saturday, the college network experienced an outage.",
    status: "new", // new, read, archived
    isEnabled: true,
    updatedOn: 1668621600000,
    createdOn: 1668621600000,
    target: "teacher", // admin, cso
    link: "www.google.com",
  },
  {
    id: uuidv4(),
    title: "Course grade updated",
    content: "Your professor from course STA-234 has updated your grade.",
    status: "new",
    isEnabled: true,
    updatedOn: 1669158900,
    createdOn: 1669158900,
    target: "student",
    link: "www.google.com",
  },
  {
    id: uuidv4(),
    title: "Assignment due date on April 16th | MAT-554",
    content: "Due date to deliver your assignment 2 is getting close ",
    status: "read",
    isEnabled: true,
    updatedOn: 1669158900,
    createdOn: 1669158900,
    target: "student",
    link: "www.google.com",
  },
  {
    id: uuidv4(),
    title: "Grading due date on April 27th | PRO-312",
    content: "Due date to deliver grades of PRO-312 classes is getting close",
    status: "archived",
    isEnabled: true,
    updatedOn: 1668621600000,
    createdOn: 1668621600000,
    target: "professor",
    link: "www.google.com",
  },
  {
    id: uuidv4(),
    title: "New document uploaded | AIF-743",
    content: "A new document has been shared by your AIF-743 professor",
    status: "archived",
    isEnabled: true,
    updatedOn: 1668621600000,
    createdOn: 1668621600000,
    target: "student",
    link: "www.google.com",
  },
  {
    id: uuidv4(),
    title: "Submitted assignment | AIF-743",
    content:
      "Some of your AIF-743 students have just submitted their assignments",
    status: "archived",
    isEnabled: true,
    updatedOn: 1668621600000,
    createdOn: 1668621600000,
    target: "professor",
    link: "www.google.com",
  },
];

export default notifications;
