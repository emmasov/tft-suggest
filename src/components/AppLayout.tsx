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

  return (
    <main>
      <h1 style={{ textAlign: "center" }}>TFT Combinatorics</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <ItemComponentPicker></ItemComponentPicker>
      </div>
    </main>
  );
};

export default AppLayout;
