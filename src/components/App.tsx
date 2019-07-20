import * as React from "react";
import { ItemComponentId } from "utils/items";
import { generatePossibleCompletedItems } from "utils/suggestions";
import "./App.scss";
import { ItemIcon } from "./ItemIcon/ItemIcon";
import ItemComponentPicker from "./ItemComponentPicker.tsx/ItemComponentPicker";

function App() {
  const [
    itemComponentsInInventory,
    setItemComponentsInInventory
  ] = React.useState<ItemComponentId[]>([]);

  const possibleCompletedItems = generatePossibleCompletedItems(
    itemComponentsInInventory
  );

  return (
    <main>
      <h1>TFT Combinatorics</h1>
      {/* <ItemComponentSelect
        selectedItems={itemComponentsInInventory}
        onAddItemComponent={addedItemComponentId =>
          setItemComponentsInInventory(prevSelections =>
            prevSelections.concat(addedItemComponentId)
          )
        }
      ></ItemComponentSelect> */}
      <ItemComponentPicker></ItemComponentPicker>
    </main>
  );
}

export default App;
