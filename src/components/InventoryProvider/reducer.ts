import {
  ItemType,
  ItemComponentId,
  ItemFinishedId,
  addItemToInventory,
  removeItemFromInventory,
  FINISHED_ITEMS_MASTER_RECORD
} from "utils/items";
import { Inventory } from "types";

const ADD_ITEM_TO_INVENTORY = "ADD_ITEM_TO_INVENTORY";
type ADD_ITEM_TO_INVENTORY = typeof ADD_ITEM_TO_INVENTORY;

const REMOVE_ITEM_FROM_INVENTORY = "REMOVE_ITEM_FROM_INVENTORY";
type REMOVE_ITEM_FROM_INVENTORY = typeof REMOVE_ITEM_FROM_INVENTORY;

const UNDO_LAST_INVENTORY_ACTION = "UNDO_LAST_INVENTORY_ACTION";
type UNDO_LAST_INVENTORY_ACTION = typeof UNDO_LAST_INVENTORY_ACTION;

const CLEAR_INVENTORY = "CLEAR_INVENTORY";
type CLEAR_INVENTORY = typeof CLEAR_INVENTORY;

export interface ActionAddItemToInventory {
  type: ADD_ITEM_TO_INVENTORY;
  inventorySlot: keyof InventorySlots;
  item: ItemComponentId | ItemFinishedId;
}

export interface ActionRemoveItemFromInventory {
  type: REMOVE_ITEM_FROM_INVENTORY;
  inventorySlot: keyof InventorySlots;
  item: ItemComponentId | ItemFinishedId;
}

export interface ActionClearInventory {
  type: CLEAR_INVENTORY;
}

export interface ActionUndoLastInventoryAction {
  type: UNDO_LAST_INVENTORY_ACTION;
}

export type InventoryAction =
  | ActionAddItemToInventory
  | ActionRemoveItemFromInventory
  | ActionClearInventory
  | ActionUndoLastInventoryAction;

interface InventorySlots {
  itemComponentsInInventory: Inventory<ItemComponentId>;
  finishedItemsInInventory: Inventory<ItemFinishedId>;
}

export interface InventoryState extends InventorySlots {
  inventoryHistory: InventorySlots[];
}

export const initialInventoryState: InventoryState = {
  finishedItemsInInventory: {},
  itemComponentsInInventory: {},
  inventoryHistory: []
};

export const inventoryReducer = (
  state: InventoryState,
  action: InventoryAction
): InventoryState => {
  let newState: InventoryState;
  switch (action.type) {
    case ADD_ITEM_TO_INVENTORY:
      /** When adding a finished item to the inventory, we need to remove its components */

      const shouldRemoveComponents =
        action.inventorySlot === "finishedItemsInInventory";

      const itemsToRemove: ItemComponentId[] =
        shouldRemoveComponents && FINISHED_ITEMS_MASTER_RECORD[action.item]
          ? FINISHED_ITEMS_MASTER_RECORD[action.item].buildsFrom
          : [];

      const componentInventoryAfterRemovingItems = itemsToRemove.reduce<
        Inventory<ItemComponentId>
      >((acc, cur) => {
        return removeItemFromInventory(acc, cur);
      }, state.itemComponentsInInventory);

      newState = {
        ...state,
        itemComponentsInInventory: { ...componentInventoryAfterRemovingItems },
        [action.inventorySlot]: addItemToInventory(
          state[action.inventorySlot],
          action.item
        )
      };

      return {
        ...newState,
        inventoryHistory: state.inventoryHistory.concat(
          getInventorySlotsFromState(state)
        )
      };
    case REMOVE_ITEM_FROM_INVENTORY:
      /** When removing a finished item we need back its components to the inventory. */

      const shouldAddBackComponents =
        action.inventorySlot === "finishedItemsInInventory";

      const itemsToAdd: ItemComponentId[] =
        shouldAddBackComponents && FINISHED_ITEMS_MASTER_RECORD[action.item]
          ? FINISHED_ITEMS_MASTER_RECORD[action.item].buildsFrom
          : [];

      const componentInventoryAfterAddingBackItems = itemsToAdd.reduce<
        Inventory<ItemComponentId>
      >((acc, cur) => {
        return addItemToInventory(acc, cur);
      }, state.itemComponentsInInventory);

      newState = {
        ...state,
        itemComponentsInInventory: {
          ...componentInventoryAfterAddingBackItems
        },
        [action.inventorySlot]: removeItemFromInventory(
          state[action.inventorySlot],
          action.item
        )
      };

      return {
        ...newState,
        inventoryHistory: state.inventoryHistory.concat(
          getInventorySlotsFromState(state)
        )
      };
    case CLEAR_INVENTORY:
      return {
        ...initialInventoryState,
        inventoryHistory: state.inventoryHistory.concat(
          getInventorySlotsFromState(state)
        )
      };
    case UNDO_LAST_INVENTORY_ACTION: {
      if (state.inventoryHistory.length < 1) {
        return state;
      }

      const indexOfLastInventoryHistory = state.inventoryHistory.length - 1;

      newState = {
        ...state.inventoryHistory[indexOfLastInventoryHistory],
        inventoryHistory: state.inventoryHistory.slice(
          0,
          indexOfLastInventoryHistory
        )
      };

      return newState;
    }
    default:
      return state;
  }
};

export const createAddItemToInventoryAction = <
  T extends ItemComponentId | ItemFinishedId
>(
  inventorySlot: T extends ItemComponentId
    ? "itemComponentsInInventory"
    : "finishedItemsInInventory",
  item: T
): ActionAddItemToInventory => {
  return {
    type: ADD_ITEM_TO_INVENTORY,
    inventorySlot,
    item
  };
};

export const createRemoveItemFromInventoryAction = <
  T extends ItemComponentId | ItemFinishedId
>(
  inventorySlot: T extends ItemComponentId
    ? "itemComponentsInInventory"
    : "finishedItemsInInventory",
  item: T
): ActionRemoveItemFromInventory => {
  return {
    type: REMOVE_ITEM_FROM_INVENTORY,
    inventorySlot,
    item
  };
};

export const clearInventoryAction: ActionClearInventory = {
  type: CLEAR_INVENTORY
};

export const undoLastInventoryAction: ActionUndoLastInventoryAction = {
  type: UNDO_LAST_INVENTORY_ACTION
};

/** We don't want to pollute the history object with all the other stuff inside of state. */
const getInventorySlotsFromState = (state: InventoryState): InventorySlots => {
  return {
    finishedItemsInInventory: state.finishedItemsInInventory,
    itemComponentsInInventory: state.itemComponentsInInventory
  };
};
