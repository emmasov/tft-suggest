import { ItemIcon } from "components/ItemIcon/ItemIcon";
import * as React from "react";
import {
  ITEM_COMPONENTS_MASTER_LIST,
  ItemComponentId,
  getPossibleCompletedItemsFromSingleComponent,
  getCompletedItemFromComponents,
  ItemFinishedId
} from "utils/items";
import { useInventory } from "components/InventoryProvider/InventoryProvider";
import { createAddItemToInventoryAction } from "components/InventoryProvider/reducer";

const SPACE_BETWEEN_COMPONENTS_AND_FINISHED_ITEMS = 15;

const NUMBER_OF_COLUMNS = ITEM_COMPONENTS_MASTER_LIST.length + 1;

const ItemComponentPicker: React.FC = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: "fit-content"
      }}
    >
      <div className="ItemComponentPicker-ColumnLayout">
        {ITEM_COMPONENTS_MASTER_LIST.map(item => {
          return (
            <ResultantRow itemComponent={item.id} key={item.id}></ResultantRow>
          );
        })}
        <ComponentRow />
      </div>
    </div>
  );
};

const ComponentRow: React.FC = () => {
  const [inventoryState, inventoryDispatch] = useInventory();

  return (
    <div
      style={{
        marginBottom: SPACE_BETWEEN_COMPONENTS_AND_FINISHED_ITEMS,
        marginTop: SPACE_BETWEEN_COMPONENTS_AND_FINISHED_ITEMS,
        height: "fit-content"
      }}
    >
      <ItemIcon
        isBlank={true}
        htmlProps={{
          style: {
            marginRight: SPACE_BETWEEN_COMPONENTS_AND_FINISHED_ITEMS
          }
        }}
      ></ItemIcon>
      {ITEM_COMPONENTS_MASTER_LIST.map(el => {
        return (
          <ItemIcon
            key={el.id}
            itemComponentId={el.id}
            onItemComponentClick={() =>
              inventoryDispatch(
                createAddItemToInventoryAction(
                  "itemComponentsInInventory",
                  el.id
                )
              )
            }
          ></ItemIcon>
        );
      })}
    </div>
  );
};

const ResultantRow: React.FC<{ itemComponent: ItemComponentId }> = props => {
  const [_, inventoryDispatch] = useInventory();

  return (
    <div>
      <ItemIcon
        itemComponentId={props.itemComponent}
        htmlProps={{
          style: {
            marginRight: SPACE_BETWEEN_COMPONENTS_AND_FINISHED_ITEMS
          }
        }}
        onItemComponentClick={() =>
          inventoryDispatch(
            createAddItemToInventoryAction(
              "itemComponentsInInventory",
              props.itemComponent
            )
          )
        }
      ></ItemIcon>
      {ITEM_COMPONENTS_MASTER_LIST.map(itemForCurrentColumn => {
        const finishedItem = getCompletedItemFromComponents(
          props.itemComponent,
          itemForCurrentColumn.id
        );
        return (
          <ItemIcon
            itemFinishedId={finishedItem}
            key={finishedItem}
            onItemFinishedClick={() =>
              inventoryDispatch(
                createAddItemToInventoryAction(
                  "finishedItemsInInventory",
                  finishedItem
                )
              )
            }
          />
        );
      })}
    </div>
  );
};

export default ItemComponentPicker;
