type ButtonProps = {
    text?: string; // Interrogação indica que a propriedade é opcional
    children?: string;
}

export function Button(props: ButtonProps) {
    return (
        <button>{props.text || props.children ||'Default'}</button>
    )
}