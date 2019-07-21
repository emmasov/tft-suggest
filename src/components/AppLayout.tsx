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
import Button from "./Button/Button";
import { clearInventoryAction } from "./InventoryProvider/reducer";

const AppLayout: React.FC = () => {
  const [state, dispatch] = useInventory();

  return (
    <main>
      <h1 style={{ textAlign: "center" }}>TFT Combinatorics</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            marginBottom: 15
          }}
        >
          <Button onClick={() => dispatch(clearInventoryAction)}>Reset</Button>
        </div>
        <ItemComponentPicker></ItemComponentPicker>
      </div>
    </main>
  );
};

export default AppLayout;
