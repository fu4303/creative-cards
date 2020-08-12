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
    pages: [
      {
        name: "front",
        background:
          "https://cdn.pixabay.com/photo/2020/05/31/02/55/sunset-5241031_1280.jpg",
        sections: [
          {
            type: "Text",
            uniqueRef: "Text1",
            userInput: "happy birthdayyyyyy1-p1",
            height: 180,
          },
          {
            type: "Text",
            uniqueRef: "Text2",
            userInput: "happy birthdayyyyyy2",
            height: 180,
          },
        ],
      },
      {
        name: "inside-left",
        sections: [
          {
            type: "Text",
            uniqueRef: "Text1",
            userInput: "happy birthdayyyyyy1p2",
            height: 200,
          },
          {
            type: "Image",
            uniqueRef: "Image1",
            userInput: "image.jpg",
            height: 300,
          },
        ],
      },
      {
        name: "inside-right",
        sections: [
          {
            type: "Text",
            uniqueRef: "Text1",
            userInput: "happy birthdayyyyyy1p3",
            height: 100,
          },
          {
            type: "Image",
            uniqueRef: "Image1",
            userInput: "image.jpg",
            height: 300,
          },
          {
            type: "Text",
            uniqueRef: "Text2",
            userInput: "happy birthdayyyyyy2",
            height: 250,
          },
        ],
      },
      {
        name: "back",
        sections: [
          {
            type: "Image",
            uniqueRef: "Image1",
            userInput: "image.jpg",
            height: 500,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Birthday 2",
    categories: ["birthday", "wife"],
    pages: [
      {
        name: "front",
        background:
          "https://cdn.pixabay.com/photo/2020/05/28/14/14/love-5231372_1280.jpg",
        sections: [
          {
            type: "Image",
            uniqueRef: "Image1",
            userInput: "image.jpg",
          },
          {
            type: "Text",
            uniqueRef: "Text1",
            userInput: "happy birthdayyyyyy2",
          },
        ],
      },
      {
        name: "inside-left",
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
        name: "inside-right",
        sections: [
          {
            type: "Text",
            uniqueRef: "Text1",
            userInput: "happy birthdayyyyyy1",
          },
          {
            type: "Image",
            uniqueRef: "Image1",
            userInput: "image.jpg",
          },
        ],
      },
      {
        name: "back",
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
    ],
  },
  {
    id: 3,
    name: "Anniversary 1",
    categories: ["anniversary"],
    pages: [
      {
        name: "front",
        background:
          "https://cdn.pixabay.com/photo/2020/06/05/09/28/sunset-5262335_1280.jpg",
        sections: [
          {
            type: "Image",
            uniqueRef: "Image1",
            userInput: "image.jpg",
          },
          {
            type: "Image",
            uniqueRef: "Image2",
            userInput: "image.jpg",
          },
        ],
      },
      {
        name: "inside-left",
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
        name: "inside-right",
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
        name: "back",
        sections: [
          {
            type: "Image",
            uniqueRef: "Image1",
            userInput: "image.jpg",
          },
          {
            type: "Text",
            uniqueRef: "Text1",
            userInput: "happy birthdayyyyyy2",
          },
        ],
      },
    ],
  },
];
