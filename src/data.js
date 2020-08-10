export const categories = [
  "all",
  "birthday",
  "wedding",
  "husband",
  "wife",
  "anniversary",
];

export const cards = [
  {
    id: 1,
    name: "Birthday 1",
    categories: ["birthday", "husband"],
    sections: [
      {
        type: "Text",
        uniqueRef: "Text1",
        userInput: "happy birthdayyyyyy1",
      },
      {
        type: "Text",
        uniqueRef: "Text2",
        userInput: "happy birthdayyyyyy2",
      },
    ],
  },
  {
    id: 2,
    name: "Birthday 2",
    categories: ["birthday", "wife"],
    sections: [
      {
        type: "Text",
        uniqueRef: "Text1",
        userInput: "happy birthdayyyyyy1",
      },
      {
        type: "Text",
        uniqueRef: "Text2",
        userInput: "happy birthdayyyyyy2",
      },
    ],
  },
  {
    id: 3,
    name: "Anniversary 1",
    categories: ["anniversary"],
    sections: [
      {
        type: "Image",
        uniqueRef: "Image1",
        userInput: "image.jpg",
      },
      {
        type: "Text",
        uniqueRef: "Text2",
        userInput: "happy birthdayyyyyy2",
      },
    ],
  },
];
