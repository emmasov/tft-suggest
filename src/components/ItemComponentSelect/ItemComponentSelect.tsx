import Downshift from "downshift";
import * as React from "react";
import { DropdownOption } from "types";
import { ItemComponentId, ITEM_COMPONENTS_MASTER_RECORD } from "utils/items";
import { defaultSearch } from "utils/search";

interface Props {
  selectedItems: ItemComponentId[];
  onAddItemComponent: (itemComponentId: ItemComponentId) => void;
}
const fullOptionsList: DropdownOption[] = Object.values(
  ITEM_COMPONENTS_MASTER_RECORD
).map(component => ({ label: component.label, id: component.id }));

const ItemComponentSelect: React.FC<Props> = props => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <Downshift
      itemToString={(item: DropdownOption | undefined) =>
        item ? item.label : ""
      }
      onChange={(newSelection: DropdownOption) => {
        setSearchTerm("");
        props.onAddItemComponent(newSelection.id);
      }}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        openMenu,
        inputValue,
        highlightedIndex,
        selectedItem,
        clearSelection
      }) => (
        <div>
          <label
            {...getLabelProps()}
            visible="false"
            style={{
              display: "block"
            }}
          >
            Add the items that are currently in your inventory.
          </label>
          <input
            {...getInputProps({
              onFocus: () => openMenu(),
              value: searchTerm,
              onChange: ev => setSearchTerm(ev.target.value)
            })}
          />
          <ul {...getMenuProps()}>
            {isOpen
              ? defaultSearch(fullOptionsList, "label", searchTerm).map(
                  (item, index) => (
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
                  )
                )
              : null}
          </ul>
        </div>
      )}
    </Downshift>
  );
};

export default ItemComponentSelect;
