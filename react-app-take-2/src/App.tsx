// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = [
//     "Kuala Lumpur",
//     "Klang",
//     "Banting",
//     "Kuala Selangor",
//     "Petaling",
//   ];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;

// import Alert from "./components/Alert";

// const App = () => {
//   return (
//     <div>
//       <Alert>
//         Hello <span>World</span>
//       </Alert>
//     </div>
//   );
// };

// export default App;

import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")}>My Button</Button>
    </div>
  );
}

export default App;
