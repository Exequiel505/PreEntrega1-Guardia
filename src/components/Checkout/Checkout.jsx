import Formulario from "./Formulario";
import db from "../../db/db.js";
import validateForm from "../../utils/validationYup.js";
import { useState } from "react";
import { useContext } from "react";
import { CartContex } from "../../context/CartContex";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const [idOrden, setIdOrden] = useState(null);

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContex);

  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };
  const handleSubmitForm = async () => {
    event.preventDefault();
    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      fecha: Timestamp.fromDate(new Date()),
      total: precioTotal(),
    };
    try {
      const response = await validateForm(datosForm);
      if (response.status === "success") {
        generateOrder(orden);
      } else {
        toast.warning(response.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const generateOrder = (orden) => {
    const ordenesRef = collection(db, "orders");
    addDoc(ordenesRef, orden)
      .then((respuesta) => setIdOrden(respuesta.id))
      .catch(error)
      .finally(() => {
        updateStock();
        vaciarCarrito();
      });
  };

  const updateStock = () => {
    carrito.map((productoCarrito) => {
      let quantity = productoCarrito.quantity;
      delete productoCarrito.quantity;
      const productoRef = doc(db, "products", productoCarrito.id);
      setDoc(productoRef, {
        ...productoCarrito,
        stock: productoCarrito.stock - quantity,
      });
    });
  };

  return (
    <div>
      {idOrden ? (
        <div>
          <h2>Orden generada con exito</h2>
          <p>guarde el id de su orden : {idOrden}</p>
        </div>
      ) : (
        <Formulario
          datosForm={datosForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default Checkout;