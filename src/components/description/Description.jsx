import 'bootstrap/dist/css/bootstrap.css'
import {Link} from "react-router-dom";
import {shallowEqual, useSelector} from "react-redux";

export default function Description() {
    const {post, loading} = useSelector((state) => {
        return state.post
    }, shallowEqual);

    if (loading) {
        return <>Идет загрузка...</>
    }

    return (
        <div>
            <div className="">
                <div className="pb-2">
                    <img src={post.images[0]} className="card-img-top w-50 h-50" alt={post.title}/>
                </div>
                <div className="card-body">
                    <h3 className="card-title pb-2">{post.title} <span>{post.price}$</span></h3>
                    <h5>Брэнд: <span className="fw-bold">{post.brand}</span></h5>
                    <h5>Категория: <span className="fw-bold">{post.category}</span></h5>
                    <h5>Скидка: <span className="fw-bold">{post.discountPercentage}%</span></h5>
                    <h5>Рейтинг: <span className="fw-bold">{post.rating}</span></h5>
                    <h5>В наличии: <span className="fw-bold">{post.stock}</span></h5>
                </div>
            </div>
            <Link className="btn btn-primary" to="/">Home</Link>
        </div>
    );
}


