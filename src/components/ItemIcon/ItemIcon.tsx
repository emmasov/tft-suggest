import * as React from "react";
import {
  ItemComponentId,
  ItemFinishedId,
  FINISHED_ITEMS_MASTER_LIST,
  FINISHED_ITEMS_MASTER_RECORD,
  canBuildFinishedItem
} from "utils/items";
import { buildPublicUrl } from "utils/misc";
import {
  ITEM_FINISHED_ID_TO_ICON_MAP,
  ITEM_COMPONENT_ID_TO_ICON_MAP
} from "./constants";
import { useInventory } from "components/InventoryProvider/InventoryProvider";
import "./ItemIcon.scss";

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
  onItemComponentClick?: (item: ItemComponentId) => void;
  onItemFinishedClick?: (item: ItemFinishedId) => void;
}

interface ItemComponentProps extends BaseProps {
  itemComponentId: ItemComponentId;
  onItemComponentClick: (item: ItemComponentId) => void;
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
        disabled={!requiredComponentsInInventory}
        shouldShowItemCount={
          props.shouldShowItemCount === undefined
            ? countOfItemInInventory
              ? countOfItemInInventory > 0
              : false
            : props.shouldShowItemCount
        }
        countOfItemInInventory={countOfItemInInventory}
        onClick={() => {
          if (
            props.onItemFinishedClick &&
            props.itemFinishedId &&
            requiredComponentsInInventory
          ) {
            props.onItemFinishedClick!(props.itemFinishedId);
          }
        }}
      ></IconButtonBase>
    );

    return FinishedItemIcon;
  }

  const countOfItemInInventory =
    inventoryState.itemComponentsInInventory[props.itemComponentId];

  return (
    <IconButtonBase
      {...props}
      backgroundImage={`url(${
        ITEM_COMPONENT_ID_TO_ICON_MAP[props.itemComponentId]
      })`}
      shouldShowItemCount={
        props.shouldShowItemCount === undefined
          ? countOfItemInInventory
            ? countOfItemInInventory > 0
            : false
          : props.shouldShowItemCount
      }
      countOfItemInInventory={countOfItemInInventory}
      onClick={() => {
        if (props.onItemComponentClick && props.itemComponentId) {
          props.onItemComponentClick!(props.itemComponentId);
        }
      }}
    ></IconButtonBase>
  );
};

interface IconBaseProps {
  disabled?: boolean;
  backgroundImage: string;
  countOfItemInInventory: number | undefined;

  onClick: () => void;
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
    >
      {isHovering && !props.disabled}
      {props.shouldShowItemCount && (
        <ItemCountDisplay
          count={props.countOfItemInInventory || 0}
        ></ItemCountDisplay>
      )}
    </button>
  );
};

interface ItemCountDisplayProps {
  count: number | undefined;
}

const ItemCountDisplay: React.FC<ItemCountDisplayProps> = props => {
  if (!props.count) {
    return null;
  }

  return (
    <div className={"ItemCountDisplay"}>
      <span className="GLOBAL--disable-selection">{props.count}</span>
    </div>
  );
};
