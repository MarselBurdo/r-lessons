import dayjs from "dayjs";
import faker from "faker";

export const seedComments = () => {
  return Array(10)
    .fill("")
    .map((el) => ({
      author: faker.name.findName(),
      date: dayjs(faker.date.past()).format("DD.MM.YY hh:mm"),
      text: faker.lorem.words(10),
      id: faker.datatype.uuid(),
    }));
};

/***
 * {
 * author : name.findName()
 * date : date.past()
 * text: lorem.text()
 * id: random.uuid()
 * }
 */

export const seedItems = () => {
  return Array(16)
    .fill("")
    .map((el) => ({
      price: faker.datatype.number(),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(10),
      id: faker.datatype.uuid(),
    }));
};
