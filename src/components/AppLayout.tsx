import * as React from "react";
import {
  ItemComponentId,
  ItemFinishedId,
  addItemToInventory
} from "utils/items";
import { generatePossibleCompletedItems } from "utils/suggestions";
import "./App.scss";
import { ItemIcon } from "./ItemIcon/ItemIcon";
import ItemComponentPicker from "./ItemComponentPicker.tsx/ItemComponentPicker";
import { Inventory } from "types";
import InventoryProvider, {
  useInventory
} from "./InventoryProvider/InventoryProvider";

const AppLayout: React.FC = () => {
  const [state] = useInventory();

  console.log(state);
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>TFT Combinatorics</h1>
      <ItemComponentPicker></ItemComponentPicker>
    </main>
  );
};

export default AppLayout;
