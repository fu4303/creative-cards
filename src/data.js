export const categories = [
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
        background: [
          "https://cdn.pixabay.com/photo/2020/05/31/02/55/sunset-5241031_1280.jpg",
        ],
        components: ["TextInput", "ImageUpload", "TextInput"],
        defaultValues: ["happy birthdayyyyyy", "test.jpg", "30 today"],
      },
      {
        background: ["text.jpg"],
        components: ["TextInput", "ImageUpload"],
        defaultValues: ["wow", "test.jpg", "300"],
      },
    ],
  },
  {
    id: 2,
    name: "Birthday 2",
    categories: ["birthday", "wife"],
    sections: [
      {
        background: [
          "https://cdn.pixabay.com/photo/2020/05/28/14/14/love-5231372_1280.jpg",
        ],
        components: ["TextInput", "ImageUpload", "TextInput"],
        defaultValues: ["happy birthdayyyyyy", "test.jpg", "30 today"],
      },
      {
        background: ["text.jpg"],
        components: ["TextInput", "ImageUpload"],
        defaultValues: ["wow", "test.jpg", "300"],
      },
    ],
  },
  {
    id: 3,
    name: "Anniversary 1",
    categories: ["anniversary"],
    sections: [
      {
        background: [
          "https://cdn.pixabay.com/photo/2020/06/05/09/28/sunset-5262335_1280.jpg",
        ],
        components: ["TextInput", "ImageUpload", "TextInput"],
        defaultValues: ["happy birthdayyyyyy", "test.jpg", "30 today"],
      },
      {
        background: ["text.jpg"],
        components: ["TextInput", "ImageUpload"],
        defaultValues: ["wow", "test.jpg", "300"],
      },
    ],
  },
];
