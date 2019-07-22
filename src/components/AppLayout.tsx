import * as React from "react";
import "./App.scss";
import Button from "./Button/Button";
import { useInventory } from "./InventoryProvider/InventoryProvider";
import {
  clearInventoryAction,
  undoLastInventoryAction
} from "./InventoryProvider/reducer";
import ItemComponentPicker from "./ItemComponentPicker.tsx/ItemComponentPicker";
import { buildPublicUrl } from "utils/misc";
import Layout from "./Layout/Layout";

const AppLayout: React.FC = () => {
  const [state, dispatch] = useInventory();

  return (
    <main>
      <Layout>
        <h1 style={{ textAlign: "center" }}>TFT Combinatorics</h1>
        <div
          style={{
            marginBottom: 15,
            width: "100%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Button
            aria-label="Undo Button"
            onClick={() => dispatch(undoLastInventoryAction)}
            disabled={state.inventoryHistory.length < 1}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <img
                src={buildPublicUrl("assets/undo.svg")}
                alt="Undo"
                style={{
                  marginRight: 8,
                  height: 15
                }}
              />
              Undo
            </span>
          </Button>
          <Button
            aria-label="Reset"
            onClick={() => dispatch(clearInventoryAction)}
            disabled={state.inventoryHistory.length < 1}
          >
            Reset
          </Button>
        </div>
        <ItemComponentPicker></ItemComponentPicker>
        <div
          style={{
            marginTop: 15
          }}
        ></div>
      </Layout>
    </main>
  );
};

export default AppLayout;
