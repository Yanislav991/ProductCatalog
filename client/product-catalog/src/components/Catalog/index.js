import style from './Catalog.module.css'
import Card from '../Card';
import { get } from "../../util/data";

let data = [];
get("/products").then(res => data = res);

const Catalog = (props) => {
    console.log(data)
    return (
        <div className={style.catalog}>
            {data.map(((item) => (
                <Card item={item} />
            )))}
        </div>
    );
}

export default Catalog;