import Button from "../Button";

const Card = (props) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.item.name}</div>
                <p className="text-gray-700 text-base">
                    {props.item.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {props.item.categories.length === 0 ? <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#none</span>
                    : props.item.categories.map(((category) => (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category.name}</span>
                    )))}
            </div>
            <div className="px-6 pt-4 pb-2">
                <Button to={"/products/details/" + props.item._id}>Details</Button>
                <Button>Edit</Button>
            </div>
        </div>
    )
}

export default Card;