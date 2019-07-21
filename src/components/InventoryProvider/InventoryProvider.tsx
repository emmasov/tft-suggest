import * as React from "react";
import {
  inventoryReducer,
  initialInventoryState,
  InventoryState,
  InventoryAction
} from "./reducer";

const InventoryContext = React.createContext<
  [InventoryState, React.Dispatch<InventoryAction>] | undefined
>(undefined);

const InventoryProvider: React.FC = props => {
  const reducer = React.useReducer<typeof inventoryReducer>(
    inventoryReducer,
    initialInventoryState
  );

  return (
    <InventoryContext.Provider value={reducer}>
      {props.children}
    </InventoryContext.Provider>
  );
};

export const useInventory = (): [
  InventoryState,
  React.Dispatch<InventoryAction>
] => {
  const inventory = React.useContext(InventoryContext);

  if (!inventory) {
    throw new Error(
      "You attempted to use InventoryContext in a component that isn't a descendant of an InventoryProvider."
    );
  }

  return inventory;
};

export default InventoryProvider;
