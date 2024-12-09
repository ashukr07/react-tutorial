export const githubInfoLoader = async () => {
    const res=await fetch("https://api.github.com/users/ashukr07");
    return res.json();
}