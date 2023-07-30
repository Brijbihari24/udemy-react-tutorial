import useNavigation from "../hooks/use-navigation";

function Link({ to, children }) {

    const { navigate } = useNavigation();

    const handleClick = (event) => {
        console.log("EVENT -", event);
        if (event.ctrlKey || event.metaKey) {
            return
        }
        event.preventDefault()
        navigate(to)
    }

    return (
        <div>
            <a href={to} onClick={handleClick} >{children}</a>
        </div>
    )
}


export default Link;