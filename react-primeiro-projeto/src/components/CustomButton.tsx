// Pode ser feito assim
type Props = {
    label: string;
    onClick: () => void;
}

export const CustomButton = ({ label, onClick }: Props) => {
    return (
        <button onClick={onClick} className="p-3 rounded-md text-white bg-blue-700">{label}</button>
    );
}

// Ou assim:
{/*
type Props = {
    label: string;
    onClick: () => void;
}

export const CustomButton = ({ label, onClick }: Props) => {
    const handleButtonClick = () => {
        // Executo algo antes de chamar a função
        onClick();
        // Executo algo depois de chamar a função
    }

    return (
        <button onClick={handleButtonClick} className="p-3 rounded-md text-white bg-blue-700">{label}</button>
    );
}
*/}