export function getColor(language){

    const colors = {
        JavaScript: "#f1e05a",
        TypeScript: "#3178c6",
        HTML: "#e34c26",
        CSS: "#563d7c",
        Python: "#3572A5",
        Java: "#b07219",
        C: "#555555",
        "C++": "#f34b7d",
        React: "#61dafb"
    };

    return colors[language] || "#999";
}