import { ItemComponent, ItemFinished, Inventory } from "types";

export enum ItemType {
  COMPONENT = 0,
  FINISHED = 1
}

export enum ItemFinishedId {
  BLADE_OF_THE_RUINED_KING = "blade_of_the_ruined_king",
  BLOODTHIRSTER = "bloodthirster",
  CURSED_BLADE = "cursed_blade",
  DARKIN = "darkin",
  DRAGONS_CLAW = "dragons_claw",
  FORCE_OF_NATURE = "force_of_nature",
  FROZEN_HEART = "frozen_heart",
  FROZEN_MALLET = "frozen_mallet",
  GUARDIAN_ANGEL = "guardian_angel",
  GUINSOOS_RAGE_BLADE = "guinsoos_rage_blade",
  HEXTECH_GUNBLADE = "hextech_gunblade",
  HUSH = "hush",
  INFINITY_EDGE = "infinity_edge",
  IONIC_SPARK = "ionic_spark",
  KNIGHTS_VOW = "knights_vow",
  LOCKET_OF_THE_IRON_SOLARI = "locket_of_the_iron_solari",
  LUDENS_ECHO = "ludens_echo",
  MORELLONOMICON = "morellonomicon",
  PHANTOM_DANCER = "phantom_dancer",
  RABADONS_DEATHCAP = "rabadons_deathcap",
  RAPID_FIRE_CANNON = "rapid_fire_cannon",
  RED_BUFF = "red_buff",
  REDEMPTION = "redemption",
  RUNAANS_HURRICANE = "runaans_hurricane",
  SERAPHS_EMBRACE = "seraphs_embrace",
  SPEAR_OF_SHOJIN = "spear_of_shojin",
  STATIKK_SHIV = "statikk_shiv",
  SWORD_BREAKER = "sword_breaker",
  SWORD_OF_THE_DIVINE = "sword_of_the_divine",
  THORNMAIL = "thornmail",
  TITANIC_HYDRA = "titanic_hydra",
  WARMOGS_ARMOR = "warmogs_armor",
  YOUMUUS_GHOSTBLADE = "youmuus_ghostblade",
  YUUMI = "yuumi",
  ZEKES_HERALD = "zekes_herald",
  ZEPHYR = "zephyr"
}

export enum ItemComponentId {
  BF_SWORD = "bfsword",
  CHAIN_VEST = "chain_vest",
  GIANTS_BELT = "giants_belt",
  NEEDLESSLY_LARGE_ROD = "needlessly_large_rod",
  NEGATRON_CLOAK = "negatron_cloak",
  RECURVE_BOW = "recurve_bow",
  SPATULA = "spatula",
  TEAR_OF_THE_GODDESS = "tear_of_the_goddess"
}

export const ITEM_COMPONENTS_MASTER_RECORD: Record<
  ItemComponentId,
  ItemComponent
> = {
  [ItemComponentId.BF_SWORD]: {
    id: ItemComponentId.BF_SWORD,
    buildsInto: new Set([
      ItemFinishedId.INFINITY_EDGE,
      ItemFinishedId.HEXTECH_GUNBLADE,
      ItemFinishedId.SWORD_OF_THE_DIVINE,
      ItemFinishedId.SPEAR_OF_SHOJIN,
      ItemFinishedId.GUARDIAN_ANGEL,
      ItemFinishedId.BLOODTHIRSTER,
      ItemFinishedId.ZEKES_HERALD,
      ItemFinishedId.YOUMUUS_GHOSTBLADE
    ]),
    itemType: ItemType.COMPONENT,
    label: "BF Sword",
    stats: {
      armor: 0,
      attackDamage: 20,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    },
    gridIndex: 0
  },
  [ItemComponentId.NEEDLESSLY_LARGE_ROD]: {
    id: ItemComponentId.NEEDLESSLY_LARGE_ROD,
    buildsInto: new Set([
      ItemFinishedId.HEXTECH_GUNBLADE,
      ItemFinishedId.RABADONS_DEATHCAP,
      ItemFinishedId.GUINSOOS_RAGE_BLADE,
      ItemFinishedId.LUDENS_ECHO,
      ItemFinishedId.LOCKET_OF_THE_IRON_SOLARI,
      ItemFinishedId.IONIC_SPARK,
      ItemFinishedId.MORELLONOMICON,
      ItemFinishedId.YUUMI
    ]),
    itemType: ItemType.COMPONENT,
    label: "Needlessly Large Rod",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 20
    },
    gridIndex: 1
  },
  [ItemComponentId.RECURVE_BOW]: {
    id: ItemComponentId.RECURVE_BOW,
    buildsInto: new Set([
      ItemFinishedId.SWORD_OF_THE_DIVINE,
      ItemFinishedId.GUINSOOS_RAGE_BLADE,
      ItemFinishedId.RAPID_FIRE_CANNON,
      ItemFinishedId.STATIKK_SHIV,
      ItemFinishedId.PHANTOM_DANCER,
      ItemFinishedId.CURSED_BLADE,
      ItemFinishedId.TITANIC_HYDRA,
      ItemFinishedId.BLADE_OF_THE_RUINED_KING
    ]),
    itemType: ItemType.COMPONENT,
    label: "Recurve Bow",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 20,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    },
    gridIndex: 2
  },
  [ItemComponentId.TEAR_OF_THE_GODDESS]: {
    id: ItemComponentId.TEAR_OF_THE_GODDESS,
    buildsInto: new Set([
      ItemFinishedId.SPEAR_OF_SHOJIN,
      ItemFinishedId.LUDENS_ECHO,
      ItemFinishedId.STATIKK_SHIV,
      ItemFinishedId.SERAPHS_EMBRACE,
      ItemFinishedId.FROZEN_HEART,
      ItemFinishedId.HUSH,
      ItemFinishedId.REDEMPTION,
      ItemFinishedId.DARKIN
    ]),
    itemType: ItemType.COMPONENT,
    label: "Tear of the Goddess",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 20,
      spellDamage: 0
    },
    gridIndex: 3
  },
  [ItemComponentId.CHAIN_VEST]: {
    id: ItemComponentId.CHAIN_VEST,
    buildsInto: new Set([
      ItemFinishedId.GUARDIAN_ANGEL,
      ItemFinishedId.LOCKET_OF_THE_IRON_SOLARI,
      ItemFinishedId.PHANTOM_DANCER,
      ItemFinishedId.FROZEN_HEART,
      ItemFinishedId.THORNMAIL,
      ItemFinishedId.SWORD_BREAKER,
      ItemFinishedId.RED_BUFF,
      ItemFinishedId.KNIGHTS_VOW
    ]),
    itemType: ItemType.COMPONENT,
    label: "Chain Vest",
    stats: {
      armor: 20,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    },
    gridIndex: 4
  },
  [ItemComponentId.NEGATRON_CLOAK]: {
    id: ItemComponentId.NEGATRON_CLOAK,
    buildsInto: new Set([
      ItemFinishedId.BLOODTHIRSTER,
      ItemFinishedId.IONIC_SPARK,
      ItemFinishedId.CURSED_BLADE,
      ItemFinishedId.HUSH,
      ItemFinishedId.SWORD_BREAKER,
      ItemFinishedId.DRAGONS_CLAW,
      ItemFinishedId.ZEPHYR,
      ItemFinishedId.RUNAANS_HURRICANE
    ]),
    itemType: ItemType.COMPONENT,
    label: "Negatron Cloak",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 20,
      mana: 0,
      spellDamage: 0
    },
    gridIndex: 5
  },
  [ItemComponentId.GIANTS_BELT]: {
    id: ItemComponentId.GIANTS_BELT,
    buildsInto: new Set([
      ItemFinishedId.ZEKES_HERALD,
      ItemFinishedId.MORELLONOMICON,
      ItemFinishedId.TITANIC_HYDRA,
      ItemFinishedId.REDEMPTION,
      ItemFinishedId.RED_BUFF,
      ItemFinishedId.ZEPHYR,
      ItemFinishedId.WARMOGS_ARMOR,
      ItemFinishedId.FROZEN_MALLET
    ]),
    itemType: ItemType.COMPONENT,
    label: "Giants Belt",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 20,
      mana: 0,
      spellDamage: 0
    },
    gridIndex: 6
  },
  [ItemComponentId.SPATULA]: {
    id: ItemComponentId.SPATULA,
    buildsInto: new Set([
      ItemFinishedId.YOUMUUS_GHOSTBLADE,
      ItemFinishedId.YUUMI,
      ItemFinishedId.YOUMUUS_GHOSTBLADE,
      ItemFinishedId.DARKIN,
      ItemFinishedId.KNIGHTS_VOW,
      ItemFinishedId.RUNAANS_HURRICANE,
      ItemFinishedId.FROZEN_MALLET,
      ItemFinishedId.FORCE_OF_NATURE
    ]),
    itemType: ItemType.COMPONENT,
    label: "Spatula",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    },
    gridIndex: 7
  }
};

export const FINISHED_ITEMS_MASTER_RECORD: Record<
  ItemFinishedId,
  ItemFinished
> = {
  [ItemFinishedId.INFINITY_EDGE]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.INFINITY_EDGE,
    buildsFrom: [[ItemComponentId.BF_SWORD, ItemComponentId.BF_SWORD]],
    description: "Critical strikes deal 300% damage instead of 150%.",
    name: "Infinity Edge",
    stats: {
      armor: 0,
      attackDamage: 40,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.SWORD_OF_THE_DIVINE]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.SWORD_OF_THE_DIVINE,
    buildsFrom: [[ItemComponentId.RECURVE_BOW, ItemComponentId.BF_SWORD]],
    description: "Critical strikes deal 300% damage instead of 150%.",
    name: "Sword of the Divine",
    stats: {
      armor: 0,
      attackDamage: 20,
      attackSpeed: 20,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.HEXTECH_GUNBLADE]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.HEXTECH_GUNBLADE,
    buildsFrom: [
      [ItemComponentId.NEEDLESSLY_LARGE_ROD, ItemComponentId.BF_SWORD]
    ],
    description:
      "Heal for 25% of damage dealth. Does not heal for damage dealt by items.",
    name: "Hextech Gunblade",
    stats: {
      armor: 0,
      attackDamage: 40,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.SPEAR_OF_SHOJIN]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.SPEAR_OF_SHOJIN,
    buildsFrom: [
      [ItemComponentId.TEAR_OF_THE_GODDESS, ItemComponentId.BF_SWORD]
    ],
    description:
      "After casting Special Ability for the first time, basic attacks restore an additional 15% of maximum mana on hit.",
    name: "Spear of Shojin",
    stats: {
      armor: 0,
      attackDamage: 20,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 20,
      spellDamage: 0
    }
  },
  [ItemFinishedId.GUARDIAN_ANGEL]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.GUARDIAN_ANGEL,
    buildsFrom: [[ItemComponentId.CHAIN_VEST, ItemComponentId.BF_SWORD]],
    description:
      "Upon death, clears Grievous Wounds and revives after 2 seconds with 1000 health.",
    name: "Guardian Angel",
    stats: {
      armor: 20,
      attackDamage: 20,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.BLOODTHIRSTER]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.BLOODTHIRSTER,
    buildsFrom: [[ItemComponentId.NEGATRON_CLOAK, ItemComponentId.BF_SWORD]],
    description: "Heal for 50% of damage dealth by basic attacks.",
    name: "Bloodthirster",
    stats: {
      armor: 0,
      attackDamage: 20,
      attackSpeed: 0,
      health: 0,
      magicResist: 20,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.ZEKES_HERALD]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.ZEKES_HERALD,
    buildsFrom: [[ItemComponentId.GIANTS_BELT, ItemComponentId.BF_SWORD]],
    description:
      "At the beginning of combat the wearer and the champiopns two spaces to the left and right of the wearer gain 15% attack speed.",
    name: "Bloodthirster",
    stats: {
      armor: 0,
      attackDamage: 20,
      attackSpeed: 0,
      health: 200,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.YOUMUUS_GHOSTBLADE]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.YOUMUUS_GHOSTBLADE,
    buildsFrom: [[ItemComponentId.SPATULA, ItemComponentId.BF_SWORD]],
    description: "Wearer is also an Assassin.",
    name: "Youmuus Ghostblade",
    stats: {
      armor: 0,
      attackDamage: 40,
      attackSpeed: 0,
      health: 200,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.RAPID_FIRE_CANNON]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.RAPID_FIRE_CANNON,
    buildsFrom: [[ItemComponentId.RECURVE_BOW, ItemComponentId.RECURVE_BOW]],
    description: "Wearer is also an Assassin.",
    name: "Youmuus Ghostblade",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 40,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.GUINSOOS_RAGE_BLADE]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.GUINSOOS_RAGE_BLADE,
    buildsFrom: [
      [ItemComponentId.RECURVE_BOW, ItemComponentId.NEEDLESSLY_LARGE_ROD]
    ],
    description: "Wearer is also an Assassin.",
    name: "Youmuus Ghostblade",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 20,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 20
    }
  },
  [ItemFinishedId.STATIKK_SHIV]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.STATIKK_SHIV,
    buildsFrom: [
      [ItemComponentId.RECURVE_BOW, ItemComponentId.TEAR_OF_THE_GODDESS]
    ],
    description:
      "Every third basic attack deals 100 magic damage to the target and 3 additional targets.",
    name: "Statikk Shiv",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 20,
      health: 0,
      magicResist: 0,
      mana: 20,
      spellDamage: 0
    }
  },
  [ItemFinishedId.PHANTOM_DANCER]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.PHANTOM_DANCER,
    buildsFrom: [[ItemComponentId.RECURVE_BOW, ItemComponentId.CHAIN_VEST]],
    description: "Dodge all critical strikes.",
    name: "Phantom Dancer",
    stats: {
      armor: 20,
      attackDamage: 0,
      attackSpeed: 20,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.CURSED_BLADE]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.CURSED_BLADE,
    buildsFrom: [[ItemComponentId.RECURVE_BOW, ItemComponentId.NEGATRON_CLOAK]],
    description:
      "Basic attacks have a 20% chance to shrink the target, removing 1 star.",
    name: "Cursed Blade",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 20,
      health: 0,
      magicResist: 20,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.TITANIC_HYDRA]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.TITANIC_HYDRA,
    buildsFrom: [[ItemComponentId.RECURVE_BOW, ItemComponentId.GIANTS_BELT]],
    description:
      "Basic attacks deal 10% of your maximum health bonus damage to the target and all adjacent enemies.",
    name: "Titanic Hydra",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 20,
      health: 200,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.BLADE_OF_THE_RUINED_KING]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.BLADE_OF_THE_RUINED_KING,
    buildsFrom: [[ItemComponentId.RECURVE_BOW, ItemComponentId.SPATULA]],
    description: "Wearer is also a Blademaster.",
    name: "Titanic Hydra",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 40,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.RABADONS_DEATHCAP]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.RABADONS_DEATHCAP,
    buildsFrom: [
      [
        ItemComponentId.NEEDLESSLY_LARGE_ROD,
        ItemComponentId.NEEDLESSLY_LARGE_ROD
      ]
    ],
    description: "Increases ability power by 50%.",
    name: "Rabadon's Deathcap",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 40
    }
  },
  [ItemFinishedId.LOCKET_OF_THE_IRON_SOLARI]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.LOCKET_OF_THE_IRON_SOLARI,
    buildsFrom: [
      [ItemComponentId.CHAIN_VEST, ItemComponentId.NEEDLESSLY_LARGE_ROD]
    ],
    description:
      "At the beginning of combat, the wearer and the champions two spaces to the left and right of the wearer gain a 300 health shield.",
    name: "Locket of the Iron Solari",
    stats: {
      armor: 20,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 20
    }
  },
  [ItemFinishedId.IONIC_SPARK]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.IONIC_SPARK,
    buildsFrom: [
      [ItemComponentId.NEGATRON_CLOAK, ItemComponentId.NEEDLESSLY_LARGE_ROD]
    ],
    description:
      "Enemies take 200 true damage whenever they cast their Special Ability.",
    name: "Ionic Spark",
    stats: {
      armor: 20,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 20
    }
  },
  [ItemFinishedId.MORELLONOMICON]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.MORELLONOMICON,
    buildsFrom: [
      [ItemComponentId.GIANTS_BELT, ItemComponentId.NEEDLESSLY_LARGE_ROD]
    ],
    description:
      "Special Ability applies a burn on the enemies hit for 3 seconds, dealing 3% of their maximum health as true damage each second and applying Grievous Wounds for the duration.",
    name: "Morellonomicon",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 200,
      magicResist: 0,
      mana: 0,
      spellDamage: 20
    }
  },
  [ItemFinishedId.YUUMI]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.YUUMI,
    buildsFrom: [
      [ItemComponentId.NEEDLESSLY_LARGE_ROD, ItemComponentId.SPATULA]
    ],
    description: "Wearer is also a Sorceror.",
    name: "Yuumi",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 40
    }
  },
  [ItemFinishedId.LUDENS_ECHO]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.LUDENS_ECHO,
    buildsFrom: [
      [
        ItemComponentId.NEEDLESSLY_LARGE_ROD,
        ItemComponentId.TEAR_OF_THE_GODDESS
      ]
    ],
    description:
      "Special Abliity deals 200 magic damage to all adjacent enemies to target.",
    name: "Yuumi",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 20,
      spellDamage: 20
    }
  },
  [ItemFinishedId.SERAPHS_EMBRACE]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.SERAPHS_EMBRACE,
    buildsFrom: [
      [ItemComponentId.TEAR_OF_THE_GODDESS, ItemComponentId.TEAR_OF_THE_GODDESS]
    ],
    description: "After casting Special Ability gain 20 mana.",
    name: "Seraph's Embrace",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 40,
      spellDamage: 0
    }
  },
  [ItemFinishedId.HUSH]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.HUSH,
    buildsFrom: [
      [ItemComponentId.TEAR_OF_THE_GODDESS, ItemComponentId.NEGATRON_CLOAK]
    ],
    description: "Basic attacks have a 30% chance to silence the target.",
    name: "Hush",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 20,
      mana: 20,
      spellDamage: 0
    }
  },
  [ItemFinishedId.REDEMPTION]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.REDEMPTION,
    buildsFrom: [
      [ItemComponentId.TEAR_OF_THE_GODDESS, ItemComponentId.GIANTS_BELT]
    ],
    description:
      "When reaching 25% of maximum health, creates a zone that, after a small delay, heals allies for 1000 health.",
    name: "Yuumi",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 200,
      magicResist: 0,
      mana: 20,
      spellDamage: 0
    }
  },
  [ItemFinishedId.DARKIN]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.DARKIN,
    buildsFrom: [
      [ItemComponentId.SPATULA, ItemComponentId.TEAR_OF_THE_GODDESS]
    ],
    description: "Wearer is also a Demon.",
    name: "Darkin",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 40,
      spellDamage: 0
    }
  },
  [ItemFinishedId.KNIGHTS_VOW]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.KNIGHTS_VOW,
    buildsFrom: [[ItemComponentId.SPATULA, ItemComponentId.CHAIN_VEST]],
    description: "Wearer is also a Knight.",
    name: "Knight's Vow",
    stats: {
      armor: 40,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.RUNAANS_HURRICANE]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.RUNAANS_HURRICANE,
    buildsFrom: [[ItemComponentId.SPATULA, ItemComponentId.NEGATRON_CLOAK]],
    description: "Basic attacks hit one additional target for 25% damage.",
    name: "Runaan's Hurricane",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 40,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.FROZEN_MALLET]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.FROZEN_MALLET,
    buildsFrom: [[ItemComponentId.SPATULA, ItemComponentId.GIANTS_BELT]],
    description: "Wearer is also a Glacial",
    name: "Darkin",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 400,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.FORCE_OF_NATURE]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.FORCE_OF_NATURE,
    buildsFrom: [[ItemComponentId.SPATULA, ItemComponentId.SPATULA]],
    description: "Increases the number of champion slots by 1.",
    name: "Force of Nature",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 400,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.RED_BUFF]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.RED_BUFF,
    buildsFrom: [[ItemComponentId.CHAIN_VEST, ItemComponentId.GIANTS_BELT]],
    description:
      "Basic attacks apply a burn on targets for 5 seconds, dealing 2.5% of their maximum health as true damage each second and applying Grievous Wounds for the duration.",
    name: "Red Buff",
    stats: {
      armor: 20,
      attackDamage: 0,
      attackSpeed: 0,
      health: 200,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.DRAGONS_CLAW]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.DRAGONS_CLAW,
    buildsFrom: [
      [ItemComponentId.NEGATRON_CLOAK, ItemComponentId.NEGATRON_CLOAK]
    ],
    description: "Gain 83% resistance to magic damage.",
    name: "Dragon's Claw",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 40,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.FROZEN_HEART]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.FROZEN_HEART,
    buildsFrom: [
      [ItemComponentId.CHAIN_VEST, ItemComponentId.TEAR_OF_THE_GODDESS]
    ],
    description: "Adjacent enemies have their attack speed reduced by 20%.",
    name: "Frozen Heart",
    stats: {
      armor: 20,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 20,
      spellDamage: 0
    }
  },
  [ItemFinishedId.THORNMAIL]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.THORNMAIL,
    buildsFrom: [[ItemComponentId.CHAIN_VEST, ItemComponentId.CHAIN_VEST]],
    description:
      "Reflect 100% of physical damage mitigated as true damage to the attacker.",
    name: "Thornmail",
    stats: {
      armor: 20,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 0,
      mana: 20,
      spellDamage: 0
    }
  },
  [ItemFinishedId.SWORD_BREAKER]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.SWORD_BREAKER,
    buildsFrom: [[ItemComponentId.CHAIN_VEST, ItemComponentId.NEGATRON_CLOAK]],
    description: "Basic attacks have a 20% change to disarm the target.",
    name: "Sword Breaker",
    stats: {
      armor: 20,
      attackDamage: 0,
      attackSpeed: 0,
      health: 0,
      magicResist: 20,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.ZEPHYR]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.ZEPHYR,
    buildsFrom: [[ItemComponentId.GIANTS_BELT, ItemComponentId.NEGATRON_CLOAK]],
    description:
      "At the start of combat, banishes the unit that mirrors the wearer's placement on the other side of the board for 5 seconds.",
    name: "Sword Breaker",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 200,
      magicResist: 20,
      mana: 0,
      spellDamage: 0
    }
  },
  [ItemFinishedId.WARMOGS_ARMOR]: {
    itemType: ItemType.FINISHED,
    id: ItemFinishedId.WARMOGS_ARMOR,
    buildsFrom: [[ItemComponentId.GIANTS_BELT, ItemComponentId.GIANTS_BELT]],
    description: "Regenerates 6% of missing health per second..",
    name: "Warmog's Armor",
    stats: {
      armor: 0,
      attackDamage: 0,
      attackSpeed: 0,
      health: 400,
      magicResist: 0,
      mana: 0,
      spellDamage: 0
    }
  }
};

export const FINISHED_ITEMS_MASTER_LIST = Object.values(
  FINISHED_ITEMS_MASTER_RECORD
);

export const ITEM_COMPONENTS_MASTER_LIST = Object.values(
  ITEM_COMPONENTS_MASTER_RECORD
).sort((a, b) => a.gridIndex - b.gridIndex);

interface FinishedItemPossiblity {
  otherIngredient: ItemComponentId;
  finishedItem: ItemFinishedId;
}

/** Assume finished items build only from two components. */
export const getPossibleCompletedItemsFromSingleComponent = (
  itemComponent: ItemComponentId
): FinishedItemPossiblity[] => {
  return FINISHED_ITEMS_MASTER_LIST.filter(finishedItem =>
    finishedItem.buildsFrom[0].includes(itemComponent)
  ).map(
    (possibleFinishedItem): FinishedItemPossiblity => {
      const indexOfItemComponent = possibleFinishedItem.buildsFrom[0].indexOf(
        itemComponent
      );
      const indexOfOtherIngredient = indexOfItemComponent === 0 ? 1 : 0;

      return {
        finishedItem: possibleFinishedItem.id,
        otherIngredient:
          possibleFinishedItem.buildsFrom[0][indexOfOtherIngredient]
      };
    }
  );
};

export const FINISHED_ITEMS_MASTER_RECORD_KEYED_BY_COMPONENT = ITEM_COMPONENTS_MASTER_LIST.reduce(
  (acc, cur) => {
    acc[cur.id] = getPossibleCompletedItemsFromSingleComponent(cur.id);

    return acc;
  },
  {}
) as Record<ItemComponentId, FinishedItemPossiblity[]>;

export const getCompletedItemFromComponents = (
  componentA: ItemComponentId,
  componentB: ItemComponentId
) => {
  const possibilities =
    FINISHED_ITEMS_MASTER_RECORD_KEYED_BY_COMPONENT[componentA];
  const possibleFinishedItemWithSecondComponent = possibilities.find(
    el => el.otherIngredient === componentB
  );

  if (!possibleFinishedItemWithSecondComponent) {
    throw new Error(
      `Unable to find a possible finished item with the following components: [${componentA}, ${componentB}]`
    );
  }

  return possibleFinishedItemWithSecondComponent.finishedItem;
};

export const addItemToInventory = <T extends ItemComponentId | ItemFinishedId>(
  inventory: Inventory<T>,
  itemToAdd: T
): Inventory<T> => {
  return {
    ...inventory,
    [itemToAdd]: inventory.hasOwnProperty(itemToAdd)
      ? inventory[itemToAdd]! + 1
      : 1
  };
};

export const removeItemFromInventory = <
  T extends ItemComponentId | ItemFinishedId
>(
  inventory: Inventory<T>,
  itemToRemove: T
): Inventory<T> => {
  if (!inventory.hasOwnProperty(itemToRemove)) {
    return inventory;
  }

  return {
    ...inventory,
    [itemToRemove]: Math.max(inventory[itemToRemove]! - 1, 0)
  };
};
