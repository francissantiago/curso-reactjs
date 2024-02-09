type Props = {
    name: string;
    avatar?: string; // Propriedade opcional
    roles: string[];
}

export const Person = ({
    name,
    avatar = 'https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-black-default-avatar-image_2237212.jpg',
    roles
}: Props) => {
    /* Regra 1: Retorno de um único elemento padrão(apenas um return) */
    /* Regra 2: Feachar todas as tags */
    /* Regra 3: camelCase em todas as propriedades que tenham 2 palavras como className, onClick, etc. */

    return (
        <div className="p-3">
            <h1>{name}</h1>
            <img
                src={avatar}
                alt={name}
                className="w-40"
            /> 
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </div>
    );
}