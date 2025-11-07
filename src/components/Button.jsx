
import { languages } from './Main'
export default function Button({ setLangId }) {
    return (
        <div>
            {languages.map((lang) => (
                <button key={lang.id} className='btn btn-primary me-2' onClick={() => setLangId(lang.id)} style={{}}>{lang.title}</button>
            ))}
        </div>
    )
}