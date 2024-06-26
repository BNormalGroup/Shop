import SexSelect from "../../../components/menu/SelectSex/SexSelect.tsx";
import CollectionSelect from "../../../components/menu/SelectCollection/CollectionSelect.tsx";
import MenuFooter from "../../../components/menu/MenuFooter/MenuFooter.tsx";

const MenuPage = () => {
  return (
    <>
      <div className="container" style={{ marginBottom: 56, padding: 0 }}>
        <SexSelect></SexSelect>
        <CollectionSelect></CollectionSelect>
      </div>
      <MenuFooter></MenuFooter>
    </>
  );
};

export default MenuPage;
