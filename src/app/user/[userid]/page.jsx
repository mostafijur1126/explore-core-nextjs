
const UserDetails = async({params}) => {
    const {userid} = await(params);
    console.log(userid);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
    const userInfo = await res.json();
    return (
        <div>
            <h1>{userInfo.name}</h1>
            <h1>{userInfo.email}</h1>

        </div>
    );
};

export default UserDetails;