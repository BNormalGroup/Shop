import SexSelect from "./SelectSex/SexSelect.tsx";
import CollectionSelect from "./SelectCollection/CollectionSelect.tsx";
import MenuFooter from "./MenuFooter/MenuFooter.tsx";

const MenuPage = () => {
    return (
        <>
            <div className="container" style={{marginBottom: 56, padding: 0,}}>
                <SexSelect></SexSelect>
                <CollectionSelect></CollectionSelect>
            </div>
            <MenuFooter></MenuFooter>
        </>
    );
};

export default MenuPage;
