import Link from "next/link";


const Users = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    // console.log(data);


    return (
        <div>
            <h1>User are comming here </h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    data.map(user => (
                        <div key={user.id} >
                            <div className="card bg-primary text-primary-content w-96">
                                <div className=" card-body">
                                    <h2 className="card-title">{user.name}</h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="card-actions justify-end">
                                        <Link href={`user/${user.id}`}><button className="btn">Show detaile</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Users;