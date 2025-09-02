function UserPage() {
  return (
    <div>
      <h5
        className="text-4xl drop-shadow-[0_0_15px_rgba(255,255,0,0.6)] font-bold
        ">
        Administrator Management
      </h5>

      <br />
      <ul className="space-y-20 w-full ">
        <li className="border-2 border-yellow-100 p-10"  > Total Admins</li>
        <li className="border-2 border-yellow-100 p-10" >Active Admin</li>
        <li className="border-2 border-yellow-100 p-10" >Super Admin</li>
      </ul>
    </div>
  );
}
export default UserPage;
