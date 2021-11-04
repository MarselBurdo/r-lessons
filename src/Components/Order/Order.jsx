import React, { Component } from "react";

import AddItem from "./AddItem/AddItem";
import { api } from "./common.api";
import List from "./OrderList/List";
import LiveCycle from "./LiveCycle";

export default class Order extends Component {
  state = {
    items: [],
    error: "",
    isLoading: false,
  };

  handleChangeItems = (item) => {
    const { input, id } = item;
    this.setState((prev) => ({
      ...prev,
      items: [...prev.items, { id, text: input, done: false }],
    }));
  };

  // async componentDidMount() {
  //   const fetchData = await api.get();
  //   if (fetchData.success) {
  //     this.setState((prev) => ({ ...prev, items: fetchData.data }));
  //   }
  //   if (fetchData.error) {
  //     this.setState((prev) => ({ ...prev, error: fetchData.messege }));
  //   }
  // }

  handleDeleteItems = (id) => {
    this.setState((prev) => ({
      ...prev,
      items: [...prev.items.filter((el) => el.id !== id)],
    }));
  };

  handlePutItem = (item) => {
    const { input, id } = item;
    this.setState((prev) => ({
      ...prev,
      items: [
        ...prev.items.map((el) => {
          if (el.id === id) {
            return { id: id, text: input, done: true };
          }
          return el;
        }),
      ],
    }));
  };

  render() {
    const { items } = this.state;

    console.log(items);

    return (
      <div>
        <LiveCycle />
        {/* <List
          listItems={items}
          onDelete={this.handleDeleteItems}
          onPut={this.handlePutItem}
        />
        <AddItem changeItems={this.handleChangeItems} items={items} /> */}
      </div>
    );
  }
}

// export default function Order() {
//   const [items, setItems] = useState(null);

//   useEffect(() => {
//     //simple variation FETCH to API
//     // const data = [
//     //   { id: uuidv4(), text: "Milk", done: false },
//     //   { id: uuidv4(), text: "Potato", done: true },
//     //   { id: uuidv4(), text: "Carrot", done: false },
//     // ];

//     try {
//       const data = JSON.parse(localStorage.items);

//       if (!data) {
//         setItems([]);
//         return;
//       }
//       /**
//        * изменили локальное сотсояние компонета см ниже
//        */
//       setItems([...data]);
//     } catch (error) {
//       console.log(error);
//       setItems([]);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("items", JSON.stringify(items));
//   }, [items]);

//   //   console.log(items);// выходит 2 раза

//   return (
//     <div>
//       {/* <LiveCycle /> */}
//       <List listItems={items} />
//       <AddItem changeItems={setItems} items={items} />
//     </div>
//   );
// }
