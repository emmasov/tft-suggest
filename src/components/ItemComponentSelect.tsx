import * as React from "react";

import Downshift from "downshift";
import { ItemComponentId, ITEM_COMPONENTS_MASTER_LIST } from "utils/items";
import { DropdownOption } from "types";

interface Props {
  selectedItems: ItemComponentId[];
  onAddItemComponent: (itemComponentId: ItemComponentId) => void;
}
const fullOptionsList: DropdownOption[] = Object.values(
  ITEM_COMPONENTS_MASTER_LIST
).map(component => ({ label: component.label, id: component.id }));

const ItemComponentSelect: React.FC<Props> = props => {
  return (
    <Downshift
      itemToString={(item: DropdownOption | undefined) =>
        item ? item.label : ""
      }
      onChange={(newSelection: DropdownOption) => {
        props.onAddItemComponent(newSelection.id);
      }}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem
      }) => (
        <div>
          <label {...getLabelProps()}>
            Add the items that are currently in your inventory.
          </label>
          <input {...getInputProps()} />
          <ul {...getMenuProps()}>
            {isOpen
              ? fullOptionsList
                  .filter(
                    item =>
                      !inputValue ||
                      item.label
                        .toLocaleLowerCase()
                        .includes(inputValue.toLocaleLowerCase())
                  )
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: item.id,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? "lightgray" : "white",
                          fontWeight: selectedItem === item ? "bold" : "normal"
                        }
                      })}
                    >
                      {item.label}
                    </li>
                  ))
              : null}
          </ul>
        </div>
      )}
    </Downshift>
  );
};

export default ItemComponentSelect;
