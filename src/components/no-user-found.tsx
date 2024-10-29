export default function NoUserFound() {
  return (
    <div className="grid w-full place-items-center mx-auto" >
      <img className="max-sm:w-52" src="/not-found.png" width={400} height={400} alt="No User Found" />
      <p className=" text-gray-400 mgt-10 font-semibold" >No result found.</p>
    </div>
  );
}