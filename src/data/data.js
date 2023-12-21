export const data = [
  {
    id: 1,
    name: "Username 1",
    skills: ["React", "Scss"],
    submitter: (event) => {
      event.preventDefault();
      console.log("Submit for a user №1");
    },
  },
  {
    id: 2,
    name: "Username 2",
    skills: ["React", "Typescript"],
    submitter: (event) => {
      event.preventDefault();
      console.log("Submit for a user №2");
    },
  },
  {
    id: 3,
    name: "Username 3",
    skills: ["React", "JavaScript"],
    submitter: (event) => {
      event.preventDefault();
      console.log("Submit for a user №3");
    },
  },
];
