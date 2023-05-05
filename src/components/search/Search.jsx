import {useDispatch} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css'
import {loadSearchPost} from "../../store/actions";

export default function Search() {
    const dispatch = useDispatch();
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(loadSearchPost(e.target.value));
    }

    return (
        <div>
            <form className="d-flex" role="search">
                <input
                    className="form-control me-2"
                    onChange={handleSearch}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"/>
            </form>
        </div>
    )

}