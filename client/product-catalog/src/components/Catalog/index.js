import style from './Catalog.module.css'
import { get } from "../../util/data";

let data = [];
get("/products").then(res => data = res);

const Catalog = (props) => {
    console.log(data)
    return (
        <div className={style.catalog}>
            {data.map(((item) => (
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.name}</div>
                        <p className="text-gray-700 text-base">
                            {item.description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#test</span>
                    </div>
                </div>
            )))}
        </div>
    );
}

export default Catalog;