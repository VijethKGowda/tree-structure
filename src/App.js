import { useState } from "react";
import Modal from "./components/Modal";
import Tree from "./components/Tree";
import { JSONTree } from 'react-json-tree';

const treeItem = [
  { name: 'parent1', id: "1" },
  {
    name: 'parent2', id: "2", children: [
      {
        name: 'child1',
        id: '21',
        children: [
          {
            name: 'child11',
            id: '211'
          },
          {
            name: 'child12',
            id: '212'
          }
        ]
      }
    ]
  },
  { name: 'parent3', id: "3" },
  { name: 'parent4', id: "4" },
  { name: 'parent5', id: "5" },
  { name: 'parent6', id: "6" },
];
function App() {
  const [selectedItem, setSelectedItem] = useState({})
  const [open, setOpen] = useState(false)

  console.log(selectedItem)

  return (
    <div className="mx-auto">
      <Tree data={treeItem} setSelectedItem={setSelectedItem} selectedItem={selectedItem} setOpen={setOpen} />
      <Modal setOpen={setOpen} open={open}>
        <JSONTree data={selectedItem} />
      </Modal>
    </div>
  );
}

export default App;
