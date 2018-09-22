export const categories = [
  {
    categoryName: "Vehicles & Boats",
    uid: "1",
    description: "",
    navigate: "/new-shipment/ship/vb",
    icon: "fa fa-truck fa-10x"
  },
  {
    categoryName: "Home Appliances",
    uid: "2",
    description: "",
    navigate: "/new-shipment/ship/hp",
    icon: "fa fa-truck fa-10x"
  },
  {
    categoryName: "Home Movement",
    uid: "3",
    description: "",
    navigate: "/new-shipment/ship/hm",
    icon: "fa fa-truck fa-10x"
  },
  {
    categoryName: "Heavy Equipment",
    uid: "4",
    description: "",
    navigate: "/new-shipment/ship/he",
    icon: "fa fa-truck fa-10x"
  },
  {
    categoryName: "Freight",
    uid: "5",
    description: "",
    navigate: "/new-shipment/ship/fr",
    icon: "fa fa-truck fa-10x"
  },
  {
    categoryName: "Pets",
    uid: "6",
    description: "",
    navigate: "/new-shipment/ship/pe",
    icon: "fa fa-paw fa-10x"
  },
  {
    categoryName: "Others",
    uid: "7",
    description: "",
    navigate: "/new-shipment/ship/ot",
    icon: "fa fa-truck fa-10x"
  }
];

export const CategoryTypes: ICategoryType[] = [
  {
    Category:"pe",
    categoryName: "Dogs",
    uid: "1",
    description: "",
    navigate: "/new-shipment/ship/vb",
    icon: "fa fa-dove fa-10x"
  },
  {
    Category:"pe",
    categoryName: "Birds",
    uid: "2",
    description: "",
    navigate: "/new-shipment/ship/vb",
    icon: "fa fa-dove fa-10x"
  },
  {
    Category:"vb",
    categoryName: "Boat",
    uid: "3",
    description: "",
    navigate: "/new-shipment/ship/vb",
    icon: "fa fa-dove fa-10x"
  }
];

export interface ICategoryType {
    Category:string,
    categoryName: string,
    uid: string,
    description: string,
    navigate: string,
    icon: string
}