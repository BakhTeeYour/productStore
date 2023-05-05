import 'bootstrap/dist/css/bootstrap.css';
import './Main.css'
import {Link} from "react-router-dom"
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {loadPost, loadPosts} from "../../store/actions";
import {useEffect} from "react";

function Main() {
    const {posts, loading, error} = useSelector((state) => {
        console.log(state)
        return state.posts
    }, shallowEqual);
    const dispatch = useDispatch();


    const handleRequest = () => {
        dispatch(loadPosts())
    };

    useEffect(() => {
        dispatch(loadPosts());
    },[dispatch]);

    if (loading) {
        return <>Идет загрузка...</>
    }

    if (error) {
        return <button onClick={handleRequest}>Повторить запрос?</button>
    }

    return (
        <>
            <div className="Main d-flex flex-wrap justify-content-center">
                {posts?.map(e => {
                    return <div key={e.id} className="card ms-4 mb-4">
                        <img src={e.images[0]} className="card-img-top" alt={e.title}/>
                        <div className="card-body">
                            <h5 className="card-title pb-2">{e.title}</h5>
                            <p>Цена: <span className="fw-bold">{e.price}$</span></p>
                            <div className="pb-2">
                                <Link className="btn btn-primary" onClick={() => dispatch(loadPost(e.id))}
                                      to="/description">Подробно...</Link>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </>

    );
}

export default Main;