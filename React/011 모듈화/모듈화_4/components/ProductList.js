import ProductList from '../data/data.js'

export default function () {
    return (
        <ul>
            {productData.filter(p => p.price < 10000).map((i) => (
                <ProductInfo item={i} key={i.id} />
            ))}
        </ul>
    );
}
productData.filter(v => v.price <= 10000).map(i => <ProductInfo item={i} key={i.id} />)

function ProductInfo(props) {
    // ProductInfo({item})
    console.log(props.item);
    return (
        <li>
            <img
                src={
                    "http://test.api.weniv.co.kr/" +
                    props.item["thumbnailImg"]
                }
                alt=""
            />
            <p>{props.item["productName"]}</p>
            <p>하트</p>
            <p>{props.item["price"]}</p>
        </li>
    );
}