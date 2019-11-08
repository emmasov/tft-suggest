import { useInventory } from "components/InventoryProvider/InventoryProvider";
import {
  createAddItemToInventoryAction,
  createRemoveItemFromInventoryAction
} from "components/InventoryProvider/reducer";
import * as React from "react";
import {
  canBuildFinishedItem,
  ItemComponentId,
  ItemFinishedId,
  ItemType
} from "utils/items";
import {
  ITEM_COMPONENT_ID_TO_ICON_MAP,
  ITEM_FINISHED_ID_TO_ICON_MAP
} from "./constants";
import "./ItemIcon.scss";
import classnames from "classnames";

interface BaseProps {
  itemComponentId?: ItemComponentId;
  itemFinishedId?: ItemFinishedId;
  htmlProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  isBlank?: true;
  disabled?: boolean;
  grayedOut?: boolean;
  shouldShowItemCount?: boolean;
}

interface ItemComponentProps extends BaseProps {
  itemComponentId: ItemComponentId;
}

interface BlankIconProps extends BaseProps {
  isBlank: true;
}

interface ItemFinishedIconProps extends BaseProps {
  itemFinishedId: ItemFinishedId;
  onItemFinishedClick: (item: ItemFinishedId) => void;
}

export const ItemIcon: React.FC<
  ItemComponentProps | BlankIconProps | ItemFinishedIconProps
> = props => {
  const [inventoryState, inventoryDispatch] = useInventory();

  if (props.isBlank) {
    return (
      <button
        className={"ItemIcon"}
        {...props.htmlProps}
        style={{
          ...(props.htmlProps ? props.htmlProps.style : {}),
          visibility: "hidden",
          opacity: props.grayedOut ? 0.5 : 1
        }}
      ></button>
    );
  }

  if (props.itemFinishedId) {
    const countOfItemInInventory =
      inventoryState.finishedItemsInInventory[props.itemFinishedId];

    const requiredComponentsInInventory = canBuildFinishedItem(
      inventoryState.itemComponentsInInventory,
      props.itemFinishedId
    );
    const shouldBeGrayedOut = props.grayedOut || !requiredComponentsInInventory;

    const FinishedItemIcon = (
      <IconButtonBase
        {...props}
        grayedOut={shouldBeGrayedOut}
        backgroundImage={`url(${
          ITEM_FINISHED_ID_TO_ICON_MAP[props.itemFinishedId]
        })`}
        shouldShowItemCount={
          props.shouldShowItemCount === undefined
            ? countOfItemInInventory
              ? countOfItemInInventory > 0
              : false
            : props.shouldShowItemCount
        }
        countOfItemInInventory={countOfItemInInventory}
        onClick={mouseEvent => {
          mouseEvent.persist();
          const numberOfItemsToAddItem = mouseEvent.shiftKey ? 5 : 1;
          for (let i = 0; i < numberOfItemsToAddItem; i++) {
            if (props.itemFinishedId) {
              inventoryDispatch(
                createAddItemToInventoryAction(
                  "finishedItemsInInventory",
                  props.itemFinishedId
                )
              );
            }
          }
        }}
        onRightClick={mouseEvent => {
          mouseEvent.persist();

          const numberOfItemsToRemoveItem = mouseEvent.shiftKey ? 5 : 1;

          for (let i = 0; i < numberOfItemsToRemoveItem; i++) {
            if (props.itemFinishedId) {
              inventoryDispatch(
                createRemoveItemFromInventoryAction(
                  "finishedItemsInInventory",
                  props.itemFinishedId
                )
              );
            }
          }
        }}
        variant={ItemType.FINISHED}
      ></IconButtonBase>
    );

    return FinishedItemIcon;
  }

  const countOfItemInInventory =
    inventoryState.itemComponentsInInventory[props.itemComponentId];

  const ItemComponentIcon = (
    <IconButtonBase
      {...props}
      backgroundImage={`url(${
        ITEM_COMPONENT_ID_TO_ICON_MAP[props.itemComponentId]
      })`}
      shouldShowItemCount={
        props.shouldShowItemCount === undefined
          ? countOfItemInInventory
            ? countOfItemInInventory !== 0
            : false
          : props.shouldShowItemCount
      }
      countOfItemInInventory={countOfItemInInventory}
      onClick={() => {
        if (props.itemComponentId) {
          inventoryDispatch(
            createAddItemToInventoryAction(
              "itemComponentsInInventory",
              props.itemComponentId
            )
          );
        }
      }}
      onRightClick={() => {
        if (
          props.itemComponentId &&
          countOfItemInInventory &&
          countOfItemInInventory > 0
        ) {
          inventoryDispatch(
            createRemoveItemFromInventoryAction(
              "itemComponentsInInventory",
              props.itemComponentId
            )
          );
        }
      }}
      variant={ItemType.COMPONENT}
    ></IconButtonBase>
  );

  return ItemComponentIcon;
};

interface IconBaseProps {
  disabled?: boolean;
  backgroundImage: string;
  countOfItemInInventory: number | undefined;
  variant: ItemType;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onRightClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const IconButtonBase: React.FC<BaseProps & IconBaseProps> = props => {
  const [isHovering, setIsHovering] = React.useState(false);
  return (
    <button
      className={"ItemIcon"}
      {...props.htmlProps}
      disabled={props.disabled}
      onClick={props.onClick}
      style={{
        backgroundImage: props.backgroundImage,
        opacity: props.grayedOut ? 0.5 : 1,
        ...(props.htmlProps ? props.htmlProps.style : {})
      }}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      onContextMenu={ev => {
        if (props.onRightClick) {
          ev.preventDefault();
          props.onRightClick(ev);
        }
      }}
    >
      {isHovering && !props.disabled}
      {props.shouldShowItemCount && (
        <ItemCountDisplay
          count={props.countOfItemInInventory || 0}
          variant={props.variant}
        ></ItemCountDisplay>
      )}
    </button>
  );
};

interface ItemCountDisplayProps {
  count: number | undefined;
  variant: ItemType;
}

const ItemCountDisplay: React.FC<ItemCountDisplayProps> = props => {
  if (!props.count) {
    return null;
  }

  return (
    <div className={classnames("ItemCountDisplay")}>
      <span
        className={classnames(
          "ItemCountDisplay-Text",
          props.count < 1 ? "ItemCountDisplay-Text--negative" : null,
          "GLOBAL--disable-selection"
        )}
      >
        {props.count}
      </span>
    </div>
  );
};
