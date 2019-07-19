import * as React from "react";
import "./App.css";
import ItemComponentSelect from "./ItemComponentSelect";
import { ItemComponentId, ITEM_COMPONENTS_MASTER_LIST } from "utils/items";
import { DropdownOption } from "types";

// const useForceUpdate = React.useReducer(x => x + 1, 0)[1];

function App() {
  const [
    itemComponentsInInventory,
    setItemComponentsInInventory
  ] = React.useState<ItemComponentId[]>([]);
  const itemComponents = Object.values(ITEM_COMPONENTS_MASTER_LIST);

  return (
    <main>
      <h1>TFT Suggest</h1>
      {itemComponentsInInventory.length && (
        <ul>
          {itemComponentsInInventory.map(itemComponentId => {
            return (
              <li>{ITEM_COMPONENTS_MASTER_LIST[itemComponentId].label}</li>
            );
          })}
        </ul>
      )}
      <ItemComponentSelect
        selectedItems={itemComponentsInInventory}
        onAddItemComponent={addedItemComponentId =>
          setItemComponentsInInventory(prevSelections =>
            prevSelections.concat(addedItemComponentId)
          )
        }
      ></ItemComponentSelect>
    </main>
  );
}

export default App;
