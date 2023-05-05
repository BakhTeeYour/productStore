import 'bootstrap/dist/css/bootstrap.css'
import {useDispatch} from "react-redux";
import {loadPostByCategories, loadPostSortByPrice} from "../../store/actions";
import {useEffect} from "react";

function Filter() {
    const dispatch = useDispatch();


    const onSortChange = (e) => {
        if (e.target.value === 'countAsc' || e.target.value === 'countDesc') {
            dispatch(loadPostSortByPrice(e.target.value));
        }
        dispatch(loadPostByCategories(e.target.value));
    }
    useEffect(() => {
    }, [dispatch, onSortChange])


    return (
        <div className="dropdown d-flex">
            <select onChange={onSortChange} className="form-select me-5">
                <option value=''>Сортировка по категории</option>
                <option value='smartphones'>Смартфоны</option>
                <option value='laptops'>Ноутбуки</option>
                <option value='fragrances'>Парфюмы</option>
                <option value='skincare'>Уход за кожей</option>
                <option value='groceries'>Продукты</option>
                <option value='home-decoration'>Декорации для дома</option>
                <option value='furniture'>Фурнитура</option>
                <option value='tops'>Топы</option>
                <option value='womens-dresses'>Женская одежда</option>
                <option value='womens-shoes'>Женская обувь</option>
                <option value='mens-shirts'>Мужская одежда</option>
                <option value='mens-shoes'>Мужская обувь</option>
                <option value='mens-watches'>Мужские часы</option>
                <option value='womens-watches'>Женские часы</option>
                <option value='womens-bags'>Женские сумочки</option>
                <option value='womens-jewellery'>Женские ювелирные изделия</option>
                <option value='sunglasses'>Солнечные очки</option>
                <option value='automotive'>Авто</option>
                <option value='motorcycle'>Мото</option>
                <option value='lighting'>Освещение</option>
            </select>
            <select onChange={onSortChange} className="form-select">
                <option value=''>Сортировка по цене</option>
                <option value='countAsc'>По цене по возрастанию</option>
                <option value='countDesc'>По цене по убыванию</option>
            </select>
        </div>
    );
}

export default Filter;