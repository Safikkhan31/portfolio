import './Project.css'
import { getLanguages } from '../services/github'
import { useState, useEffect } from 'react'
import { getColor } from '../utils/getColors'

export default function Project({ title, description, details, urls, username, repo}){

    const [languages, setLanguages] = useState({});
    var total = 1;

    useEffect(() => {
        const fetchLanguages = async () => {
            const data = await getLanguages(username, repo);
            setLanguages(data);
        }

        fetchLanguages();
    }, []);

    total = Object.values(languages).reduce((a, b) => a + b, 0);

    return (
        <div className='project'>
            <h4>{title}</h4>

            {description}

            <ul>
                {
                    details.map(detail => <li>{detail}</li>)
                }
            </ul>

            Tack Stack:
            <div className='techstack'>

                <div>
                    <div className="language-bar">
                        {
                            Object.entries(languages).map(([lang, bytes]) => {

                                const percent = (bytes / total) * 100;

                                return (
                                    <div
                                        key={lang}
                                        className="language-section"
                                        style={{
                                            width: `${percent}%`,
                                            backgroundColor: getColor(lang)
                                        }}
                                    />
                                );
                            })
                        }
                    </div>
                    <div className='language-names'>
                        {
                            Object.entries(languages).map(([lang, bytes]) => {

                                const percent = (bytes / total) * 100;

                                return (
                                    <div key={lang} className='lang-name'> 

                                        <span className='lang-dot' style={{backgroundColor: getColor(lang)}} />
                                        &nbsp;
                                        {lang}
                                        &nbsp; 
                                        {percent.toFixed(2)}%

                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}