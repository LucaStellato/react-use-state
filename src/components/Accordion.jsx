import { languages } from "./Main";
export default function Accordion({ langId }) {
    return (
        <div className='accordion border border-2 mt-4'>
            <h3>{languages.find(lang => lang.id === langId)?.title}</h3>
            <p>{languages.find(lang => lang.id === langId)?.description}</p>
        </div>

    )
}