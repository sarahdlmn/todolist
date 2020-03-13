import React,{useEffect, useState} from 'react'
import { getAllListe } from '../../actions/ListeActions';

function ShowListe() {
    const [liste, setListe] = useState([])
    useEffect(() => {
        console.log("maliste");
        loadListe();
    }, [])

    async function loadListe(){
        let ListeAjax = await getAllListe();
        console.log(ListeAjax);
        setListe(ListeAjax.data["hydra:member"]);
    }

    return (
        <div>
            <ul>
                {liste.map(liste => (
                    <li>Le titre du livre est {liste_course.liste}</li>
                ))}
            </ul>
        </div>
    )
}

export default ShowListe
