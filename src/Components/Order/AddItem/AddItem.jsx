import React, { Component } from "react";
import { api } from "../common.api";

export default class AddItem extends Component {
  state = {
    input: "",
    old: "",
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });
    this.setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  handleOnClick = async (e) => {
    e.preventDefault();
    const { changeItems, items } = this.props;
    const { input } = this.state;

    if (!input) return alert("Write item");

    if (items && items.some((item) => item.text === input))
      return alert("This item in list. Change you chose");
    // fetch-POST
    const fetchData = await api.post({ text: input, done: false });

    if (fetchData.success) {
      changeItems({ input, id: fetchData.data.id });
      this.setState({ input: "", old: "" });
    }

    //clear input
  };

  render() {
    const { input, old } = this.state;
    return (
      <div>
        <form onSubmit={this.handleOnClick}>
          <input
            type="text"
            name="input"
            value={input}
            onChange={this.onInputChange}
          />
          <input
            type="text"
            name="old"
            value={old}
            onChange={this.onInputChange}
          />
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}

// export default function AddItem({ changeItems, items }) {
//   const [input, setInput] = useState("");

//   const handleOnClick = () => {
//     if (!input) return alert("Write item");

//     if (items && items.some((item) => item.text === input))
//       return alert("This item in list. Change you chose");

//     changeItems((prev) => [
//       ...prev,
//       { id: uuidv4(), text: input, done: false },
//     ]);

//     //clear input
//     setInput("");
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button type="button" onClick={handleOnClick}>
//         Add Item
//       </button>
//     </div>
//   );
// }
