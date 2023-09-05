import {useState} from "react";

interface Props {
    items: string [];
    heading: string;
    onSelectItem: (item: string) => void;
}

function UserListGroup({items, heading, onSelectItem}: Props) {


    const [selctedIndex, setSelectedIndex] = useState(-1)
    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>Нет элементов для выбора</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selctedIndex === index ? "list-group-item active" : "list-group-item"} key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}</li>
                ))}
            </ul>

        </>
    );
}

export default UserListGroup;