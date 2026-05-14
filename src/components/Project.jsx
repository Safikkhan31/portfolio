

export default function Project({ title, description, details, urls}){
    return (
        <div>
            <h4>{title}</h4>

            {description}

            <ul>
                {
                    details.map(detail => <li>{detail}</li>)
                }
            </ul>
            




        </div>
    )
}