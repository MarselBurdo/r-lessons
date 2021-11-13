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
