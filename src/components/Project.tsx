

const Project = () => {
  return (
    <div className="flex flex-col bg-button-light dark:bg-button-dark dark:border-2 rounded-sm">
      <img
        className="h-56 rounded-t-sm object-cover"
        src="https://kzmq3w42miq2p7lhvere.lite.vusercontent.net/placeholder.svg?height=200&width=350"
        alt=""
      />
      <div className="flex flex-col gap-6 p-6">
        <h2 className="text-xl font-semibold">E-commerce App</h2>
        <p>
          An e-commerce application with a shopping cart and payment gateway.
        </p>
        <div className="flex gap-4 text-[14px]">
          <p className="dark:bg-gray-700 px-3 rounded-lg text-[13px] font-semibold">
            React
          </p>
          <p className="dark:bg-gray-700 px-3 rounded-lg text-[13px] font-semibold">
            Nest.js
          </p>
          <p className="dark:bg-gray-700 px-3 rounded-lg text-[13px] font-semibold">
            Postgres
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
