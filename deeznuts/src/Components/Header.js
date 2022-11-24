import 'bootstrap/dist/css/bootstrap.css';
import "../App.css"
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const Header = () => {
    function ShowEm(){
        alert("do it now")
    }
    return <header className="header">
        <Button variant="outline-light" onClick={ShowEm}>Sub to Pewdiepie</Button>
    </header>
}