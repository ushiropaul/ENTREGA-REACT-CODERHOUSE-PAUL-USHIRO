import Item from './Item'

function ItemList({ items }) {

    return (
        <>
            <div className="flex flex-wrap justify-center gap-6 mt-14 px-6 xl:px-14 2xl:px-20">
    {items.map((item) => (
        <Item item={item} key={item.id} />
    ))}
</div>

        </>
    )

}

export default ItemList;