import * as React from "react";
import { Inventory } from "types";
import { ItemComponentId, ItemFinishedId } from "utils/items";
import "./App.scss";
import AppLayout from "./AppLayout";
import InventoryProvider from "./InventoryProvider/InventoryProvider";

const App: React.FC = () => {
  return (
    <InventoryProvider>
      <AppLayout></AppLayout>
    </InventoryProvider>
  );
};

export default App;
