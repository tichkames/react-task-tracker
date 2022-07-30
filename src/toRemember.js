export const Header = () => {
    return (
        <div>
            <h1>My Header</h1>
        </div>
    )
}

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>My Header</h1>
            </div>
        )
    }
}

<Header title="My Title" />