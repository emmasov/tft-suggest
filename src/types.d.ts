export interface DropdownOption {
  id: ItemComponentId;
  label: string;
}

export interface ItemComponent {
  id: ItemComponentId;
  label: string;
  buildsInto: Set<ItemFinishedId>;
  itemType: ItemType.COMPONENT;
  stats: ItemStats;
  gridIndex: number;
}

export interface ItemFinished {
  id: ItemFinishedId;
  name: string;
  buildsFrom: Array<[ItemComponentId, ItemComponentId]>;
  itemType: ItemType.FINISHED;
  description: string;
  stats: ItemStats;
}

export interface ItemStats {
  attackDamage: number;
  armor: number;
  magicResist: number;
  spellDamage: number;
  attackSpeed: number;
  mana: number;
  health: number;
}
