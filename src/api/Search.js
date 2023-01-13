
export const searchData = async (term) => {
    const data = await fetch(`http://api.tvmaze.com/search/shows?q=${term}`)
    const result = data.json()
    return result
}