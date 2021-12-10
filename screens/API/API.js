const studentList = [
  {
    name: "Nguyễn Ngọc Anh Duy",
    id: 1811063268,
  },
  {
    name: "Lê Đức Nghị",
    id: 1811063333,
  },
  {
    name: "Hoàng Trọng Kiên",
    id: 1811063328,
  },
  {
    name: "LÊ QUANG HOÀNG",
    id: 1811062123,
  },
  {
    name: "Nguyễn Tuấn Anh",
    id: 1711060012,
  },
  {
    name: "Nguyễn Tiến Đạt",
    id: 1811062910,
  },
  {
    name: "Phùng Quốc Hùng",
    id: 1811062962,
  },
  {
    name: "Phạm Anh Tuấn",
    id: 1811063309,
  },
  {
    name: "Vũ Đức Long",
    id: 1811062483,
  },
  {
    name: "Trần Đình Quý",
    id: 1811061726,
  },
  {
    name: "Lê Hoàng Bảo",
    id: 1811063268,
  },
  {
    name: "Trần Phát Long",
    id: 1811063029,
  },
  {
    name: "Ngô Minh Khỏe",
    id: 1811062612,
  },
  {
    name: "Nguyễn Xuân Hà",
    id: 1811062926,
  },
  {
    name: "Nguyễn Minh Tiến",
    id: 1811063560,
  },
  {
    name: "Trương Tấn Đạt",
    id: 1811060165,
  },
  {
    name: "Trần Đình Trung",
    id: 1811063305,
  },
  {
    name: "Nguyễn Tấn Phúc",
    id: 1811063087,
  },
  {
    name: "Huỳnh Nguyễn Thành Đạt",
    id: 1811770007,
  },
  {
    name: "Huỳnh Tấn Đạt",
    id: 1811063271,
  },
  {
    name: "Võ Duy Minh Nhựt",
    id: 1811062630,
  },
];

const items = new Array(200).fill(null).map((v, i) => `học sinh ${i}`);

function filterAndSort(data, text, asc) {
  return data
    .filter((i) => text.length === 0 || i.includes(text))
    .sort(
      asc
        ? (a, b) => (b > a ? -1 : a === b ? 0 : 1)
        : (a, b) => (a > b ? -1 : a === b ? 0 : 1)
    );
}

export function fetchItems(filter, asc) {
  return new Promise((resolve) => {
    resolve({
      json: () =>
        Promise.resolve({
          items: filterAndSort(items, filter, asc),
        }),
    });
  });
}

// const genItems = () => {
//   let cnt = 0;

//   while (true) {
//     yield`Item ${cnt++}`;
//   }
// };

// const items = genItems();

// export function fetchItems() {
//   return Promise.resolve({
//     json: () =>
//       Promise.resolve({
//         items: new Array(20).fill(null).map(() => items.next().value),
//       }),
//   });
// }

// function* genItems() {
//   let cnt = 0;

//   while (true) {
//     yield `Item ${cnt++}`;
//   }
// }

// const items = genItems();

// export function fetchItems() {
//   return Promise.resolve({
//     json: () =>
//       Promise.resolve({
//         items: new Array(1000).fill(null).map(() => items.next().value),
//       }),
//   });
// }
