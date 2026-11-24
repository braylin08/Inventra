function ActividadesRecientes(){

    return(
  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
  <table className="w-full text-center border-collapse">
    <thead className="bg-gray-50 border-b border-gray-200">
      <tr>
        <th className="py-3 px-4">ID</th>
        <th className="py-3 px-4">Nombre producto</th>
        <th className="py-3 px-4">Descripcion</th>
        <th className="py-3 px-4">Cantidad</th>
        <th className="py-3 px-4">Precio</th>
        <th className="py-3 px-4">Estado</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      <tr className="hover:bg-gray-50">
        <td className="py-3 px-4">1</td>
        <td className="py-3 px-4">Taladro</td>
        <td className="py-3 px-4">total</td>
        <td className="py-3 px-4">5</td>
        <td className="py-3 px-4">$900</td>
        <td className="py-3 px-4">nuevo</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-3 px-4">2</td>
        <td className="py-3 px-4">Taladro de impacto</td>
        <td className="py-3 px-4">dewalt</td>
        <td className="py-3 px-4">10</td>
        <td className="py-3 px-4">$500</td>
        <td className="py-3 px-4">nuevo</td>
      </tr>
    </tbody>
  </table>
</div>    
);   

}


export default ActividadesRecientes;