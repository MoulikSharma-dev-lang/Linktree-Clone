import LinksPage from "../components/LinksPage"

export default async function Links({params}){
    const username = (await params).username
    return (
        <div>
            <LinksPage username={username} />
        </div>
    )
}