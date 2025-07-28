const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mx-auto p-8 mt-8 bg-white shadow-xl rounded-lg text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4 animate-fade-in-down">
        {greeting}
      </h2>
      <p className="text-lg text-gray-600">
        Aquí es donde se mostrará el catálogo de productos.
      </p>
    </div>
  );
};
export default ItemListContainer;
