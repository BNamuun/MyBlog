export function CategList({list}){
    return(
        <>
            {list.map((item) => <div>{item}</div>)}
        </>
    )
}